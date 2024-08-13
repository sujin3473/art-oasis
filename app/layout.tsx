import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARO",
  description: "아르오 건설",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="px-[10%] py-5">{children}</main>
      </body>
    </html>
  );
}
