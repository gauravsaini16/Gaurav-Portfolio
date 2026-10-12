import localFont from "next/font/local";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-normal-latin.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/playfair-italic-latin.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Gaurav Saini — Full-Stack Developer",
    template: "%s — Gaurav Saini",
  },
  description: "Full-stack developer building responsive websites, web applications, backend systems, databases, and AI-powered solutions.",
  keywords: [
    "Gaurav Saini",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Backend Developer",
    "Freelance Web Developer India",
    "Web Application Development",
  ],
  authors: [{ name: "Gaurav Saini", url: BASE }],
  creator: "Gaurav Saini",
  publisher: "Gaurav Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Gaurav Saini — Full-Stack Developer",
    title: "Gaurav Saini — Full-Stack Developer",
    description: "Portfolio of Gaurav Saini, a full-stack developer creating websites, web applications, backend systems, and AI-powered solutions.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Gaurav Saini — Full-Stack Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Saini — Full-Stack Developer",
    description: "Full-stack websites, web applications, backend systems, databases, and AI-powered solutions.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [{ url: "/photo/gaurav-logo.png", type: "image/png" }],
    apple: "/photo/gaurav-logo.png",
    shortcut: "/photo/gaurav-logo.png",
  },
  manifest: "/manifest.json",
  alternates: { canonical: BASE },
  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Gaurav Saini",
      url: BASE,
      jobTitle: "Full-Stack Developer",
      description: "Full-stack developer from India building responsive websites, web applications, backend systems, databases, and AI-powered solutions.",
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Laravel",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Python",
        "AI API Integration",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full-Stack Developer",
        occupationLocation: { "@type": "Country", name: "India" },
        skills: "React, Next.js, Node.js, Express, Laravel, MongoDB, PostgreSQL, MySQL, Python",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Application Development",
            description: "Responsive web applications with frontend interfaces, backend services, authentication, dashboards, and deployment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Websites and Portfolios",
            description: "Modern, responsive websites for businesses, professionals, and personal brands.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend APIs and Database Systems",
            description: "Backend APIs, authentication, database design, integrations, and CRUD systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Features and Workflow Automation",
            description: "AI API integrations, smart assistants, automated workflows, and custom productivity tools.",
          },
        },
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Gaurav Saini — Full-Stack Developer",
      description: "The development portfolio of Gaurav Saini.",
      publisher: { "@id": `${BASE}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      url: BASE,
      name: "Gaurav Saini — Full-Stack Developer Portfolio",
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#person` },
      mainEntity: { "@id": `${BASE}/#person` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Gaurav Saini offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gaurav builds full-stack web applications, business websites, portfolios, backend APIs, database systems, and AI-powered features.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Gaurav about a project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the contact page to send project details by email or open a prepared WhatsApp message.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Gaurav work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gaurav works with React, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express, Laravel, MongoDB, PostgreSQL, MySQL, and Python.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
