import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Watermark from "@/components/Watermark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajvansh.js | Home",
  description: "Developed by Abhijay Rajvansh",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        {children}
        <Watermark />
        </main>
      </body>
    </html>
  );
};
