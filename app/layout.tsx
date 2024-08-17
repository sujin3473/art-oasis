import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARO",
  description: "아르오 건설",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
