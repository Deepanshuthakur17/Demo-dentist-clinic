import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AIFrontDeskProvider } from '@/context/AIFrontDeskContext';
import { ImagePreviewProvider } from '@/context/ImagePreviewContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIFrontDeskModal from '@/components/AIFrontDeskModal';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'SmileCraft Dental | Cosmetic & Implant Dentistry in New York',
  description: 'SmileCraft Dental provides modern cosmetic, implant, restorative, and general dental care with a personalized patient experience in New York.',
  keywords: 'dentist New York, cosmetic dentistry Park Avenue, dental implants NYC, Invisalign Manhattan, porcelain veneers',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'SmileCraft Dental | New York Cosmetic & Implant Dentistry',
    description: 'Modern dentistry. Personalized care. Confident smiles.',
    url: 'https://smilecraft-demo.com',
    siteName: 'SmileCraft Dental',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Supermercado+One&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ivory-50 dark:bg-navy-950 text-charcoal-900 dark:text-ivory-100 font-sans antialiased selection:bg-champagne-500 selection:text-ivory-50 min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <AIFrontDeskProvider>
            <ImagePreviewProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <AIFrontDeskModal />
              <ImagePreviewModal />
              <ScrollToTop />
            </ImagePreviewProvider>
          </AIFrontDeskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
