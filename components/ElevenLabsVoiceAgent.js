'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';
import { 
  Mic, 
  MicOff, 
  PhoneCall, 
  PhoneOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Bot, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  Calendar,
  MessageSquare,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function ElevenLabsVoiceAgent({ onBookClick }) {
  const [transcripts, setTranscripts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      setIsInitializing(false);
      setErrorMessage(null);
      console.log('Connected to SmileCraft ElevenLabs AI Front Desk');
    },
    onDisconnect: () => {
      setIsInitializing(false);
      console.log('Disconnected from SmileCraft ElevenLabs AI Front Desk');
    },
    onMessage: (message) => {
      // message has structure: { message: string, source: 'user' | 'ai' }
      if (message && message.message) {
        setTranscripts((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            source: message.source || 'ai',
            text: message.message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    },
    onError: (error) => {
      setIsInitializing(false);
      console.error('ElevenLabs Conversation Error:', error);
      const errStr = typeof error === 'string' ? error : error?.message || 'Connection error occurred.';
      setErrorMessage(errStr);
    },
  });

  const { status, isSpeaking, isMuted, setMuted, startSession, endSession } = conversation;

  const handleStartCall = useCallback(async () => {
    try {
      setIsInitializing(true);
      setErrorMessage(null);

      // Check microphone permission
      if (navigator?.mediaDevices?.getUserMedia) {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      }

      // Fetch signed session URL from secure server endpoint
      const response = await fetch('/api/elevenlabs/session');
      const data = await response.json();

      if (!response.ok || !data.signedUrl) {
        throw new Error(data.error || 'Could not obtain ElevenLabs signed session URL.');
      }

      // Initiate ElevenLabs Conversational WebSockets session
      await startSession({ signedUrl: data.signedUrl });
    } catch (err) {
      console.error('Failed to start ElevenLabs session:', err);
      setIsInitializing(false);
      setErrorMessage(err.message || 'Microphone access denied or network issue.');
    }
  }, [startSession]);

  const handleEndCall = useCallback(async () => {
    try {
      await endSession();
    } catch (err) {
      console.error('Failed to end call:', err);
    }
  }, [endSession]);

  const toggleMute = useCallback(() => {
    setMuted(!isMuted);
  }, [isMuted, setMuted]);

  const isConnected = status === 'connected';
  const isConnecting = status === 'connecting' || isInitializing;

  return (
    <div className="space-y-6">
      {/* Main Agent Status & Visualizer Box */}
      <div className="bg-navy-900 text-ivory-50 p-6 sm:p-8 rounded-3xl border border-navy-800 relative overflow-hidden text-center space-y-6 shadow-elevated">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Live Status Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/80 border border-navy-700 text-xs font-semibold tracking-wide">
          {isConnected ? (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 uppercase font-mono">
                {isSpeaking ? 'Sarah Speaking...' : 'Listening to Patient'}
              </span>
            </>
          ) : isConnecting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 text-champagne-400 animate-spin" />
              <span className="text-champagne-400 uppercase font-mono">Connecting to AI Receptionist...</span>
            </>
          ) : (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-champagne-500/50" />
              <span className="text-ivory-300 font-mono">ElevenLabs Voice Receptionist • Live Agent</span>
            </>
          )}
        </div>

        {/* Dynamic Voice Pulse Circle */}
        <div className="relative z-10 flex items-center justify-center py-2">
          <div className="relative">
            {/* Pulsing Outer Rings when speaking/connected */}
            {isSpeaking && (
              <>
                <div className="absolute -inset-4 rounded-full border-2 border-champagne-400/40 animate-ping" />
                <div className="absolute -inset-8 rounded-full border border-champagne-500/20 animate-pulse" />
              </>
            )}
            {isConnected && !isSpeaking && (
              <div className="absolute -inset-3 rounded-full border border-emerald-500/30 animate-pulse-subtle" />
            )}

            {/* Avatar Icon */}
            <div className={`w-28 h-28 rounded-full flex items-center justify-center relative shadow-2xl transition-all duration-500 ${
              isConnected 
                ? isSpeaking
                  ? 'bg-gradient-to-br from-champagne-400 to-amber-600 text-navy-950 scale-105 border-4 border-champagne-200' 
                  : 'bg-navy-800 text-emerald-400 border-2 border-emerald-500/60'
                : 'bg-navy-800 text-champagne-400 border-2 border-champagne-500/40'
            }`}>
              {isConnected ? (
                isSpeaking ? (
                  <Volume2 className="w-12 h-12 animate-bounce" />
                ) : (
                  <Mic className="w-12 h-12" />
                )
              ) : (
                <Bot className="w-12 h-12" />
              )}
            </div>
          </div>
        </div>

        {/* Agent Info Title */}
        <div className="relative z-10 space-y-1.5 max-w-md mx-auto">
          <h3 className="font-serif text-2xl font-bold text-ivory-50 tracking-tight">
            {isConnected 
              ? isSpeaking 
                ? 'Sarah (SmileCraft Receptionist)' 
                : 'Listening to your voice...' 
              : 'SmileCraft AI Voice Receptionist'}
          </h3>
          <p className="text-xs text-ivory-300/80 leading-relaxed">
            {isConnected 
              ? 'Speak naturally to ask about dental implants, veneers, appointment slots, or office hours.'
              : 'Powered by ElevenLabs Conversational AI & Trishul Dental Intelligence. Click below to start live voice call.'}
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="relative z-10 max-w-md mx-auto p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 text-left">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-rose-200">Connection Note</p>
              <p className="text-rose-300/90 text-[11px] mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-3">
          {!isConnected ? (
            <button
              onClick={handleStartCall}
              disabled={isConnecting}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-champagne-500 hover:bg-champagne-400 text-navy-950 font-bold text-sm transition-all shadow-xl hover:shadow-champagne-500/25 active:scale-95 disabled:opacity-50"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{isConnecting ? 'Initializing Call...' : 'Start Live Voice Call'}</span>
            </button>
          ) : (
            <>
              <button
                onClick={toggleMute}
                className={`p-3.5 rounded-xl font-semibold text-xs transition-colors border ${
                  isMuted 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                    : 'bg-navy-800 text-ivory-200 border-navy-700 hover:bg-navy-700'
                }`}
                title={isMuted ? 'Unmute microphone' : 'Mute microphone'}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <button
                onClick={handleEndCall}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all shadow-lg active:scale-95"
              >
                <PhoneOff className="w-5 h-5" />
                <span>End Call</span>
              </button>
            </>
          )}

          {onBookClick && (
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-navy-800 hover:bg-navy-700 text-champagne-400 border border-champagne-500/30 text-xs font-semibold transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Form</span>
            </button>
          )}
        </div>
      </div>

      {/* Real-time Conversation Transcript */}
      {transcripts.length > 0 && (
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-ivory-200 dark:border-navy-800 p-5 space-y-4 shadow-soft">
          <div className="flex items-center justify-between border-b border-ivory-200 dark:border-navy-800 pb-3">
            <h4 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-champagne-500" />
              <span>Live Conversation Transcript</span>
            </h4>
            <span className="text-[10px] text-charcoal-700/60 dark:text-ivory-400/60 font-mono">
              {transcripts.length} messages
            </span>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {transcripts.map((item) => (
              <div
                key={item.id}
                className={`flex gap-3 text-xs leading-relaxed ${
                  item.source === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {item.source === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    item.source === 'user'
                      ? 'bg-navy-900 text-ivory-50 rounded-br-none'
                      : 'bg-ivory-100 dark:bg-navy-800 text-navy-950 dark:text-ivory-100 border border-ivory-200 dark:border-navy-700 rounded-bl-none'
                  }`}
                >
                  <p className="font-sans">{item.text}</p>
                  <span className="text-[9px] opacity-60 block text-right mt-1 font-mono">
                    {item.timestamp}
                  </span>
                </div>

                {item.source === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-navy-800 text-ivory-200 flex items-center justify-center shrink-0 text-[10px]">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Inquiries */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-champagne-500" />
          <span>Recommended Questions to Ask Sarah:</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { label: 'New Patient Registration', prompt: 'Hi Sarah, I would like to join SmileCraft as a new patient.' },
            { label: 'Dental Implant Consultation', prompt: 'What is the consultation process for single tooth implants?' },
            { label: 'Porcelain Veneers & Pricing', prompt: 'Do you offer custom cosmetic veneers, and how does financing work?' },
            { label: 'Clinic Hours & Location', prompt: 'Where is your Manhattan office located and what are your operating hours?' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 text-xs hover:border-champagne-400 transition-colors shadow-soft"
            >
              <span className="font-bold block text-navy-900 dark:text-ivory-100 mb-0.5">{item.label}</span>
              <p className="text-charcoal-700/70 dark:text-ivory-400/80 italic font-sans">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Note */}
      <div className="bg-ivory-100 dark:bg-navy-900 p-4 rounded-2xl border border-ivory-300 dark:border-navy-800 flex items-center gap-3 text-xs text-charcoal-700 dark:text-ivory-300">
        <ShieldCheck className="w-5 h-5 text-sage-600 dark:text-sage-400 shrink-0" />
        <p className="leading-snug">
          <span className="font-semibold text-navy-900 dark:text-ivory-100">Enterprise Security:</span> Voice sessions are encrypted end-to-end. API keys remain protected server-side via authenticated token generation.
        </p>
      </div>
    </div>
  );
}
