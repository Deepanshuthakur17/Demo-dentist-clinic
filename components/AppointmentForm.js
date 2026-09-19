'use me';
'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    patientStatus: 'new',
    interest: 'General Dentistry',
    preferredDate: '',
    preferredTime: 'Morning (8am - 12pm)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-navy-900 p-6 sm:p-10 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-elevated transition-colors duration-300">
      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 dark:bg-sage-500/20 text-sage-600 dark:text-sage-400 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50">
            Appointment Request Preview
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-navy-900 dark:text-ivory-100">{formData.firstName}</span>. In a live system, your request for <span className="font-semibold text-navy-900 dark:text-ivory-100">{formData.interest}</span> would be transmitted to the SmileCraft front desk.
          </p>
          
          <div className="bg-ivory-100 dark:bg-navy-950 p-4 rounded-xl border border-ivory-300 dark:border-navy-800 text-xs text-charcoal-700 dark:text-ivory-300 max-w-sm mx-auto text-left space-y-1 font-mono">
            <div>• Patient: {formData.firstName} {formData.lastName}</div>
            <div>• Contact: {formData.phone} | {formData.email}</div>
            <div>• Status: {formData.patientStatus === 'new' ? 'New Patient' : 'Existing Patient'}</div>
            <div>• Preferred Date: {formData.preferredDate || 'Flexible'}</div>
            <div>• Preferred Time: {formData.preferredTime}</div>
          </div>

          <div className="pt-4 border-t border-ivory-200 dark:border-navy-800 text-[11px] text-sage-600 dark:text-sage-400 font-semibold uppercase tracking-wider">
            Demo State Confirmation • No Real Appointment Created
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-5 py-2.5 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-xs font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-ivory-50">
              Request an Appointment
            </h3>
            <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80">
              Fill out your preferred details below. Our front desk team will contact you to finalize your visit.
            </p>
          </div>

          {/* Patient Status Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">
              Patient Status
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, patientStatus: 'new' })}
                className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all text-center ${
                  formData.patientStatus === 'new'
                    ? 'bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 border-navy-900 dark:border-champagne-500 shadow-sm'
                    : 'bg-ivory-100 dark:bg-navy-950 text-charcoal-700 dark:text-ivory-300 border-ivory-300 dark:border-navy-800 hover:border-navy-900 dark:hover:border-champagne-500'
                }`}
              >
                I am a New Patient
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, patientStatus: 'existing' })}
                className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all text-center ${
                  formData.patientStatus === 'existing'
                    ? 'bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 border-navy-900 dark:border-champagne-500 shadow-sm'
                    : 'bg-ivory-100 dark:bg-navy-950 text-charcoal-700 dark:text-ivory-300 border-ivory-300 dark:border-navy-800 hover:border-navy-900 dark:hover:border-champagne-500'
                }`}
              >
                I am an Existing Patient
              </button>
            </div>
          </div>

          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">First Name *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Eleanor"
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Last Name *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Vane"
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(212) 555-0194"
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="eleanor@example.com"
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              />
            </div>
          </div>

          {/* Interested In Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Interested In</label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
            >
              <option value="General Dentistry">General Dentistry & Preventive Hygiene</option>
              <option value="Dental Implants">Dental Implants Consultation</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry & Teeth Whitening</option>
              <option value="Invisalign">Invisalign Clear Aligners</option>
              <option value="Veneers">Porcelain Veneers</option>
              <option value="Smile Makeover">Full Smile Makeover Plan</option>
              <option value="Other">Other Clinical Inquiry</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Preferred Date</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Preferred Time Window</label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors"
              >
                <option value="Morning (8am - 12pm)">Morning (8:00 AM – 12:00 PM)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM – 4:00 PM)</option>
                <option value="Late Afternoon (4pm - 6pm)">Late Afternoon (4:00 PM – 6:00 PM)</option>
                <option value="Saturday Morning">Saturday Morning (9:00 AM – 12:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200">Message / Treatment Notes (Optional)</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about any specific concerns, symptoms, or goals..."
              className="w-full px-4 py-3 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 dark:focus:border-champagne-400 transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 font-bold text-sm hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-champagne-400 dark:text-navy-950" />
              <span>Request Appointment</span>
            </button>
          </div>

          <div className="text-[11px] text-charcoal-700/60 dark:text-ivory-400/60 text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
            <span>Demonstration state • No personal data is stored or shared.</span>
          </div>
        </form>
      )}
    </div>
  );
}
