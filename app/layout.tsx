
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
};

const font1 = Roboto({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
const font2 = Merriweather({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
const font3 = Bitcount_Single({   
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
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

