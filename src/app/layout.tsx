import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import { AppProvider } from "@/context/AppContext";
import ReCaptchaProvider from "@/components/ReCaptcha/ReCaptchaProvider";
import { CookieConsentProvider } from "@/components/cookie-consent/cookie-context";
import { CookieBanner } from "@/components/cookie-consent/cookie-banner";
import { SITE_METADATA } from "@/lib/seo";

const parkinsans = Nunito({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus_Jakarta_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${parkinsans.variable} ${orbitron.variable} antialiased`}
      >
        <ReCaptchaProvider>
          <CookieConsentProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </AppProvider>
          <CookieBanner/>
          </CookieConsentProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
