"use client";

import { usePathname } from 'next/navigation';

export default function NavComponent({ logo, colors, logo_height }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const switcherLink = isEnglish ? '/' : '/en';
  const local = isEnglish ? 'fi' : 'en';
  const switcherText = isEnglish ? 'Suomi' : 'English';

  return (
    <nav
      style={{
        "--primary-color": colors.primary,
        "--secondary-color": colors.secondary,
      }}
      className="navigation">
      <div className="site-logo">
        <img src={logo} height={logo_height} alt="Header logo" />
      </div>
      <ul className="language-switcher">
        <li><a href={switcherLink} hrefLang={local}>{switcherText}</a></li>
      </ul>
    </nav>
  );
}
