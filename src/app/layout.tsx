import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunu Entreprenariat | Accompagnement Entrepreneurial - Dakar, Sénégal",
  description: "Sunu Entreprenariat vise à accompagner les entrepreneurs dans la quête de visibilité et le développement de leur structure. Événements, forums, ateliers de formation, accompagnement personnalisé.",
  keywords: [
    "accompagnement entrepreneurial Dakar",
    "formation entrepreneur Sénégal", 
    "coaching business Dakar",
    "ateliers formation entrepreneuriat",
    "networking entrepreneurs Dakar",
    "mentoring business Sénégal",
    "développement entreprise Dakar",
    "forums entrepreneuriaux",
    "webinaires business",
    "événements entrepreneurs Dakar",
    "incubateur Sénégal",
    "startup Dakar",
    "création entreprise Sénégal",
    "levée de fonds",
    "business plan"
  ],
  authors: [{ name: "Sunu Entreprenariat" }],
  creator: "Sunu Entreprenariat",
  publisher: "Sunu Entreprenariat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sunu Entreprenariat | Accompagnement Entrepreneurial au Sénégal",
    description: "Accompagnement d'entrepreneurs à Dakar spécialisé dans le développement d'entreprise. Ateliers, formations, événements et coaching personnalisé.",
    type: "website",
    locale: "fr_SN",
    url: "https://sunu-entreprenariat.com",
    siteName: "Sunu Entreprenariat",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunu Entreprenariat - Accompagnement Entrepreneurial Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunu Entreprenariat | Accompagnement Entrepreneurial Dakar",
    description: "Accompagnement d'entrepreneurs, formation et coaching business. Votre partenaire de croissance à Dakar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sunu-entreprenariat.com",
    languages: {
      "fr-SN": "https://sunu-entreprenariat.com",
      "fr": "https://sunu-entreprenariat.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sunu Entreprenariat",
              "description": "Organisation d'accompagnement entrepreneurial basée à Dakar, Sénégal",
              "url": "https://sunu-entreprenariat.com",
              "logo": "https://sunu-entreprenariat.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dakar",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+221-XX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["French", "Wolof"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/sunu-entreprenariat",
                "https://www.facebook.com/sunuentreprenariat",
                "https://www.instagram.com/sunuentreprenariat"
              ],
              "service": [
                "Ateliers de Formation Entrepreneuriale",
                "Forums Entrepreneuriaux", 
                "Panels d'Experts",
                "Webinaires Interactifs",
                "Accompagnement Personnalisé",
                "Événements de Networking"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

