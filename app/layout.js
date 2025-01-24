"use client";

import "./globals.scss";
import {usePathname} from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const local = isEnglish ? 'en' : 'fi';

  return (
    <html lang={local}>
      <body>
        {children}
      </body>
    </html>
  );
}
