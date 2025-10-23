
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/utils/header";
import Footer from "@/utils/footer";

export const metadata: Metadata = {
  description: "Freddie Robinson - Digital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

