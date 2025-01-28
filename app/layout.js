"use client";

import "./globals.scss";
import {usePathname} from "next/navigation";

/**
 * Render root layout.
 */
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const locale = isEnglish ? 'en' : 'fi';

  return (
    <html lang={locale}>
    <body>{children}</body>
    </html>
  );
}