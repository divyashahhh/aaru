import type { Metadata, Viewport } from "next";
import { EB_Garamond, Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.practice} | ${site.discipline} in ${site.location}`,
  description:
    "Therapy for adolescents and adults from all backgrounds, offered online and in person.",
};

/* Tints Safari's toolbar and status bar to match the announcement bar. */
export const viewport: Viewport = {
  themeColor: "#464831",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
