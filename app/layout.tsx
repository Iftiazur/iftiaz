'use client';
// import "@/app/globals.css";

import { ReactNode } from "react";
import Home from "@/app/page";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white overflow-x-hidden">

        {children}
      </body>
    </html>
  );
}
