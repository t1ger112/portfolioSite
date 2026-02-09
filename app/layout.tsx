
import "./globals.css";
import Header from "@/utils/header";
import Footer from "@/utils/footer";
import { Roboto, Merriweather, Bitcount_Single, Bebas_Neue} from 'next/font/google'
import type { Metadata } from "next";

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
    locale: "en_GB",
    type: "website",
  },
};

const font1 = Roboto({
  subsets: ['latin'], 
  weight: "variable",
  fallback: ["Arial", "sans-serif"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
})
const font2 = Merriweather({ 
  subsets: ['latin'],
  weight: "variable",
  fallback: ["Arial", "sans-serif"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
})
const font3 = Bitcount_Single({   
  subsets: ['latin'],
  weight: "variable",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
  preload: true,
})
const font4 = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
  preload: true,
})

import { ReactLenis } from "@/utils/lenis";
import { ThemeProvider } from "next-themes";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en-GB" className={`${font1.className} ${font2.className} ${font3.className} ${font4.className}`}>
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

