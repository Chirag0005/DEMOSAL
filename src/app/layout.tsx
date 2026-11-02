import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hair Studio · New Brunswick",
  description:
    "Beautiful hair that feels like you. Lived-in blondes and dimensional colour at The Hair Studio in New Brunswick.",
  keywords: [
    "HAIR STUDIO",
    "The Hair Studio",
    "The Hair Studio",
    "hairstylist New Brunswick",
    "lived-in blonde New Brunswick",
    "dimensional colour New Brunswick",
    "blonde specialist New Brunswick",
  ],
  authors: [{ name: "The Hair Studio" }],
  openGraph: {
    title: "The Hair Studio",
    description:
      "Beautiful hair that feels like you. Lived-in blondes and dimensional colour in New Brunswick.",
    locale: "en_CA",
    type: "website",
  },
};

const MOTION_BOOT = `(function(){try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("js-motion");setTimeout(function(){if(!window.__heroMotion)d.classList.remove("js-motion")},2500)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Flags motion support before first paint so the hero entrance never flashes.
            If the entrance has not started within 2.5s, content is released untouched. */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
      </head>
      <body className="bg-[#F7F2EA] text-[#30231F] font-sans antialiased selection:bg-[#EAE0D3] selection:text-[#30231F] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
