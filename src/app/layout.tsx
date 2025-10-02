import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kptechnologysolutions.com'),
  title: "Web Development Company Cleveland & Charleston | Custom Websites & Mobile Apps | KP Technology Solutions",
  description: "Professional web development services in Cleveland, Ohio and Charleston, South Carolina. Custom websites, mobile apps, Angular & Next.js development. 15+ years experience serving clients nationwide.",
  keywords: "web development Cleveland, web development Charleston, custom website development, mobile app development, Angular developers, Next.js development, Cleveland web design, Charleston web design, Ohio web developers, South Carolina web developers",
  authors: [{ name: "KP Technology Solutions" }],
  creator: "KP Technology Solutions",
  publisher: "KP Technology Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Web Development Company Cleveland & Charleston | KP Technology Solutions",
    description: "Professional web development services in Cleveland, Ohio and Charleston, South Carolina. Custom websites and mobile apps that help your business grow nationwide.",
    url: "https://kptechnologysolutions.com",
    siteName: "KP Technology Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/social/og-image-main.png",
        width: 1200,
        height: 630,
        alt: "KP Technology Solutions - Web Development Cleveland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company Cleveland & Charleston | KP Technology Solutions",
    description: "Professional web development services in Cleveland, Ohio and Charleston, South Carolina. Custom websites and mobile apps that help your business grow nationwide.",
    images: ["/images/social/og-image-main.png"],
    creator: "@kptechnology",
    site: "@kptechnology",
  },
  other: {
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "kptechnologysolutions",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
