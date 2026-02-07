
import type { Metadata } from "next";
import { Roboto, Merriweather, Bitcount_Single} from 'next/font/google'
import { ReactLenis } from "@/utils/lenis";
import { ThemeProvider } from "next-themes";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import Header from "@/utils/header";
import Footer from "@/utils/footer";

export const metadata: Metadata = {
  description: "Freddie Robinson - Digital Portfolio",
  keywords: ["Freddie Robinson", "Portfolio", "Computer Science", "Developer", "Projects", "Apps", "Certifications", "Activities"],
  authors: [{ name: "Freddie Robinson", url: "https://freddierobinson.com" }],
  creator: "Freddie Robinson",
  publisher: "Freddie Robinson",
  openGraph: {
    title: "Freddie Robinson - Digital Portfolio",
    description: "Freddie Robinson - Digital Portfolio showcasing activities, certifications, projects, apps, and more.",
    url: "https://freddierobinson.com",
    siteName: "Freddie Robinson - Digital Portfolio",
    images: [ 
      {
        url: "https://freddierobinson.com/328e181c84.jpg",
        width: 466,
        height: 644,
        alt: "Freddie Robinson - Digital Portfolio Image",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

const font1 = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: "variable",
  style: "normal",
  fallback: ['sans-serif'],
  adjustFontFallback: true,
  preload: true,
})
const font2 = Merriweather({ 
  subsets: ['latin'],
  display: 'swap',
  weight: "variable",
  style: "normal",
  fallback: ['serif'],
  adjustFontFallback: true,
  preload: true,
})
const font3 = Bitcount_Single({   
  subsets: ['latin'],
  display: 'swap',
  weight: "variable",
  style: "normal",
  fallback: ['monospace'],
  adjustFontFallback: true,
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${font1.className} ${font2.className} ${font3.className}`}>
      <ReactLenis root>
         <body className="font-roboto"> 
          <ThemeProvider defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <Header />
              {children}
              <SpeedInsights />
              <Analytics />
            <Footer />
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}

