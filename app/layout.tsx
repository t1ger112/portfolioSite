
import type { Metadata } from "next";
import { Roboto, Merriweather, Open_Sans, Oswald, Bitcount_Single} from 'next/font/google'
import { ReactLenis } from "@/utils/lenis";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import Header from "@/utils/header";
import Footer from "@/utils/footer";

export const metadata: Metadata = {
  description: "Freddie Robinson - Digital Portfolio",
};

const font1 = Roboto({
  subsets: ['latin'],
  display: 'swap',
})
const font2 = Merriweather({ 
  subsets: ['latin'],
  display: 'swap',
})
const font3 = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})
const font4 = Oswald({ 
  subsets: ['latin'],
  display: 'swap',
})
const font5 = Bitcount_Single({   
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
    <html suppressHydrationWarning lang="en" className={`${font1.className} ${font2.className} ${font3.className} ${font4.className} ${font5.className}`}>
      <ReactLenis root>
         <body className="font-roboto"> 
          <ThemeProvider defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <Header />
              {children}
              <SpeedInsights/>
            <Footer />
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}

