
// import type { Metadata } from "next";
import "./globals.css";
import Header from "@/utils/header";
import Footer from "@/utils/footer";


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

// export const metadata: Metadata = {
//   title: "Freddie Robinson - Apps",
//   description: "Apps created by Freddie Robinson",
// };

