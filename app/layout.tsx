import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adeen Amir | Full Stack Web Developer & AI Developer",
    template: "%s | Adeen Amir",
  },
  description:
    "Full Stack Developer and AI enthusiast with hands-on experience in web development, NLP, and cloud solutions.",
  keywords: [
    "Full Stack Developer",
    "Adeen Amir",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "FastAPI",
    "NLP",
    "MongoDB",
    "PostgreSQL",
    "OpenAI",
    "AI Tools",
    "Job Automation",
  ],
  authors: [{ name: "Adeen Amir" }],
  creator: "Adeen Amir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "", // Replace with your actual portfolio domain if different
    title: "Adeen Amir | Full Stack & AI Developer",
    description:
      "Portfolio of Adeen Amir – showcasing full stack web apps, AI projects, and cloud-powered solutions.",
    siteName: "Adeen Amir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeen Amir | Full Stack & AI Developer",
    description:
      "Experienced in Next.js, Node, FastAPI, NLP, and building AI-powered web platforms.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
