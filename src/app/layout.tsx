'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { PermissionProvider } from "./context/PermissionContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PermissionProvider>
          {children}
        </PermissionProvider>
      </body>
    </html >
  );
}
