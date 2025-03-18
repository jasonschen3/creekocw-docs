import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creek OCW",
  description: "Cherry Creek High School OpenCourseWare",
  icons: {
    icon: "https://ugakd4mkxv.ufs.sh/f/QRXW6mPDvNgcODJnurmfb52Q6NjpkM7THVhzLqitUSY9d4rf",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
