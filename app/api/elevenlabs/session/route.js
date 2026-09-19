import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID || 'agent_7301m2xhdar8fjba5v8cm9s90m5x';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'ELEVENLABS_API_KEY is not configured on the server environment.' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
      {
        headers: {
          'xi-api-key': apiKey,
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('ElevenLabs get_signed_url error:', errorData);
      return NextResponse.json(
        { 
          error: errorData?.detail?.message || 'Failed to generate ElevenLabs signed session URL',
          details: errorData 
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      signedUrl: data.signed_url,
      agentId: agentId,
    });
  } catch (error) {
    console.error('Error in /api/elevenlabs/session route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while connecting to ElevenLabs Conversational AI.' },
      { status: 500 }
    );
  }
}
