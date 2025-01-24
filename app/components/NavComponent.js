"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavComponent({ logo }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const switcherLink = isEnglish ? '/' : '/en';
  const switcherText = isEnglish ? 'Suomi' : 'English';

  return (
    <nav className="navigation">
      {logo && <img className="logo" src={logo} alt="Logo" />}
      <ul>
        <li><Link href={switcherLink}>{switcherText}</Link></li>
      </ul>
    </nav>
  );
}
