import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const inter = Inter({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--inter",
});

export const metadata: Metadata = {
  title: "simple site",
  description: "This is simple site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
        
    </html>
  );
}
