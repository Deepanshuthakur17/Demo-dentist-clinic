# Implementation Plan - SmileCraft Dental Demo Website

Build a production-quality sales demonstration website for **SmileCraft Dental** (New York Cosmetic & Implant Dentistry). The website is tailored for Trishul AI to present to dental clinic owners, showcasing an independent premium dental practice with a future-ready AI Front Desk receptionist capability.

---

## User Review Required

> [!IMPORTANT]
> **Key Architecture & Design Highlights:**
> 1. **Framework & Stack**: Next.js (App Router), React, Tailwind CSS, Framer Motion, Lucide React icons, and Google Fonts (`Space Grotesk` & `Source Serif 4`).
> 2. **Visual System**: Luxury medical editorial aesthetic with Warm Ivory (`#FAF8F5`), Deep Navy (`#1A2332`), Soft Sage (`#8FA89B`), Warm Champagne (`#C5A059`), and Dark Charcoal text (`#1E2022`).
> 3. **AI Front Desk Integration Point**: A reusable, stateful `AIFrontDeskModal` component supporting state transitions (`Idle`, `Connecting`, `Listening`, `AISpeaking`, `Processing`, `Ended`, `Error`). It provides a clean integration interface for future ElevenLabs WebSocket or SDK integration without displaying fake call simulations or exposing client-side API keys.
> 4. **Demo State Integrity**: Booking forms and AI front desk interactions reflect clear, realistic demonstration states without making false claims or simulating fake calls.

---

## Proposed Changes

### Project Setup & Core Configuration

#### [NEW] [package.json](file:///d:/Demo-dentist-clinic/package.json)
- Configures Next.js, React, Tailwind CSS, Framer Motion, Lucide React, and clsx/tailwind-merge.

#### [NEW] [tailwind.config.js](file:///d:/Demo-dentist-clinic/tailwind.config.js)
- Establishes the custom luxury dental design system:
  - Font families: `Space Grotesk` (sans) and `Source Serif 4` (serif).
  - Custom color palette: Warm Ivory, Deep Navy, Soft Sage, Warm Champagne, Charcoal.

#### [NEW] [app/layout.js](file:///d:/Demo-dentist-clinic/app/layout.js)
- Root layout embedding Google Fonts (`Space Grotesk` and `Source Serif 4`), global SEO metadata, persistent `Navbar`, `Footer`, and `AIFrontDeskModal` provider/context.

#### [NEW] [app/globals.css](file:///d:/Demo-dentist-clinic/app/globals.css)
- Custom typography rules, smooth scrolling, subtle noise/gradient backgrounds, selection colors, and animation keyframes.

---

### UI Components (`components/`)

#### [NEW] [`components/Navbar.js`](file:///d:/Demo-dentist-clinic/components/Navbar.js)
- Sticky modern navigation header with logo, navigation links, "Book an Appointment" primary CTA, "Talk to Our AI Front Desk" secondary CTA, and a responsive mobile drawer.

#### [NEW] [`components/Footer.js`](file:///d:/Demo-dentist-clinic/components/Footer.js)
- Editorial footer with clinic info, office hours, links to all 10 routes, and subtle demo disclaimer note.

#### [NEW] [`components/AIFrontDeskModal.js`](file:///d:/Demo-dentist-clinic/components/AIFrontDeskModal.js)
- Premium modal component for the AI Front Desk experience.
- Implements state architecture (`Idle`, `Connecting`, `Listening`, `AISpeaking`, `Processing`, `Ended`, `Error`).
- Provides realistic overview of capabilities (24/7 patient answering, appointment routing, FAQs, lead intake) with clear hooks prepared for ElevenLabs integration.

#### [NEW] [`components/HeroSection.js`](file:///d:/Demo-dentist-clinic/components/HeroSection.js)
- Premium editorial hero layout featuring display serif headline ("Modern dentistry. Designed around you."), dual CTAs, trust badges ("New patients welcome", "Same-day consultation available"), and elegant high-res dental imagery.

#### [NEW] [`components/AIFrontDeskSection.js`](file:///d:/Demo-dentist-clinic/components/AIFrontDeskSection.js)
- Dedicated homepage section ("Your dental practice, always ready to answer.") introducing the 24/7 AI front desk capabilities, interactive prompt previews, and high-conversion CTAs.

#### [NEW] [`components/ServicesSection.js`](file:///d:/Demo-dentist-clinic/components/ServicesSection.js)
- Grid showcasing 6 primary service offerings (Dental Implants, Cosmetic Dentistry, Invisalign, Porcelain Veneers, General Dentistry, Smile Makeovers) with hover motion and links to detail pages.

#### [NEW] [`components/FeaturedImplantSection.js`](file:///d:/Demo-dentist-clinic/components/FeaturedImplantSection.js)
- Split-screen editorial section focused on Dental Implants ("Restore more than a tooth. Restore confidence.").

#### [NEW] [`components/PatientExperienceSection.js`](file:///d:/Demo-dentist-clinic/components/PatientExperienceSection.js)
- 4 core practice principles: Personalized Care, Modern Technology, Clear Communication, Comfort First.

#### [NEW] [`components/WhySmileCraftSection.js`](file:///d:/Demo-dentist-clinic/components/WhySmileCraftSection.js)
- Feature cards highlighting online appointment request, convenient communication, modern treatment spaces, and digital patient experience.

#### [NEW] [`components/TechnologySection.js`](file:///d:/Demo-dentist-clinic/components/TechnologySection.js)
- "Modern technology. Human care." featuring digital imaging, treatment planning, and diagnostic tools.

#### [NEW] [`components/AppointmentForm.js`](file:///d:/Demo-dentist-clinic/components/AppointmentForm.js)
- High-conversion booking form with fields (Name, Phone, Email, Patient status, Treatment interest dropdown, Date, Time, Message) and interactive demo submission state.

#### [NEW] [`components/FAQSection.js`](file:///d:/Demo-dentist-clinic/components/FAQSection.js)
- Accordion FAQ component addressing patient inquiries and AI receptionist scope.

---

### Pages & Routing (`app/`)

#### [NEW] [`app/page.js`](file:///d:/Demo-dentist-clinic/app/page.js)
- Main homepage assembling Hero, AI Front Desk Section, Services, Featured Implants, Patient Experience, Why SmileCraft, Technology, Mid-page Conversion CTA, FAQs, and Booking.

#### [NEW] [`app/about/page.js`](file:///d:/Demo-dentist-clinic/app/about/page.js)
- About SmileCraft Dental page detailing clinic philosophy, patient approach, technology, and demo clinical team.

#### [NEW] [`app/services/page.js`](file:///d:/Demo-dentist-clinic/app/services/page.js)
- Complete services overview page with detailed descriptions and direct booking entry points.

#### [NEW] [`app/services/dental-implants/page.js`](file:///d:/Demo-dentist-clinic/app/services/dental-implants/page.js)
- Service page for Dental Implants (Hero, Process, Candidate details, FAQs, CTAs).

#### [NEW] [`app/services/cosmetic-dentistry/page.js`](file:///d:/Demo-dentist-clinic/app/services/cosmetic-dentistry/page.js)
- Service page for Cosmetic Dentistry (Teeth whitening, bonding, smile design).

#### [NEW] [`app/services/invisalign/page.js`](file:///d:/Demo-dentist-clinic/app/services/invisalign/page.js)
- Service page for Invisalign clear aligners.

#### [NEW] [`app/services/veneers/page.js`](file:///d:/Demo-dentist-clinic/app/services/veneers/page.js)
- Service page for Porcelain Veneers.

#### [NEW] [`app/services/general-dentistry/page.js`](file:///d:/Demo-dentist-clinic/app/services/general-dentistry/page.js)
- Service page for General Dentistry (Preventive care, hygiene, restorations).

#### [NEW] [`app/contact/page.js`](file:///d:/Demo-dentist-clinic/app/contact/page.js)
- Contact page with practice info, office hours, map location graphic, and inquiry form.

#### [NEW] [`app/book-appointment/page.js`](file:///d:/Demo-dentist-clinic/app/book-appointment/page.js)
- Dedicated appointment booking page with full scheduling interface.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify clean TypeScript/JS compilation, static asset bundling, and zero routing errors across all 10 pages.

### Manual Verification
- Test all 10 routes (`/`, `/about`, `/services`, `/services/*`, `/contact`, `/book-appointment`).
- Verify AI Front Desk modal open/close functionality on desktop & mobile navigation.
- Verify appointment form submission state and validation.
- Verify mobile responsiveness, mobile navigation drawer, and visual layout on various viewport sizes.
