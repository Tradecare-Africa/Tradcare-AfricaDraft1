import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LOCATION, SITE } from '@/lib/site';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32' },
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/images/favicons/apple-touch-icon.png',
  },
  manifest: '/images/favicons/site.webmanifest',
  title: { default: 'TradeCare Africa - Integrated Agri-Services Ecosystem', template: '%s | TradeCare Africa' },
  description:
    'One company. The whole chain. Founded by Joyce Wambui Gema, TradeCare Africa operates a Service Ecosystem of five integrated products: Train (TradeCare Academy), Produce (Zao Safi Hub), Digitise (FarmDataPod), Assure (TCert), and Connect (TradeCare Market).',
  openGraph: {
    title: 'TradeCare Africa - Integrated Agri-Services Ecosystem',
    description: 'One company. The whole chain. One Service Ecosystem, one supply-chain control tower for African agriculture.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.legalName,
              email: SITE.email,
              telephone: SITE.phone,
              foundingDate: '2014',
              // TODO(confirm): address text unchanged; only the coordinates were updated.
              address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
              location: {
                '@type': 'Place',
                geo: { '@type': 'GeoCoordinates', latitude: LOCATION.lat, longitude: LOCATION.lng },
                hasMap: LOCATION.mapsUrl,
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
