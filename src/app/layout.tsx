import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Noel Chacko - Software Engineer & Photographer",
  description: "Personal website of Noel Chacko, an aspiring software engineer, photographer, and adventurer. Explore my projects, skills, and creative work.",
  keywords: ["software engineer", "photographer", "developer", "portfolio", "projects"],
  authors: [{ name: "Noel Chacko" }],
  creator: "Noel Chacko",
  openGraph: {
    title: "Noel Chacko - Software Engineer & Photographer",
    description: "Personal website of Noel Chacko, an aspiring software engineer, photographer, and adventurer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noel Chacko - Software Engineer & Photographer",
    description: "Personal website of Noel Chacko, an aspiring software engineer, photographer, and adventurer.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
