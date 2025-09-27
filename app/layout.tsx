import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./PosthogProvider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostHog Workshop",
  description: "Lær PostHog med praktiske oppgaver",
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
      >
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <Link href="/" className="font-bold text-xl">
              YourBrand
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                href="/#blog"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Blog
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/funnel"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Funnel
              </Link>
            </nav>
          </div>
        </header>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
