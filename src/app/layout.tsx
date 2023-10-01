import { LeftNavigationBar } from "@/components/LeftNavigationBar";
import { TopNavigationBar } from "@/components/TopNavigationBar.tsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          key="1"
          className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]"
        >
          <LeftNavigationBar />
          <div>
            <TopNavigationBar />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
