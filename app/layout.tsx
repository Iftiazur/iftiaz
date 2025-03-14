'use client';

import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white overflow-x-hidden">

        {children}
      </body>
    </html>
  );
}
