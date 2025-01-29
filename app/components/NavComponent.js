"use client";

import { usePathname } from 'next/navigation';

/**
 * Component for rendering the navigation
 * .
 * @param logo
 *   The navigation logo.
 * @param logoHeight
 *   The navigation logo height.
 *
 * @return {JSX.Element}
 */
export default function NavComponent({ logo, logoHeight }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const switcherLink = isEnglish ? '/' : '/en';
  const locale = isEnglish ? 'fi' : 'en';
  const switcherText = isEnglish ? 'Suomi' : 'SV/EN';

  return (
    <header role="banner" className="container">
      <nav className="navigation">
        <div className="navigation--logo">
          <img src={logo} height={logoHeight} alt="Header logo" />
        </div>
        <ul className="navigation--language-switcher">
          <li><a href={switcherLink} hrefLang={locale}>{switcherText}</a></li>
        </ul>
      </nav>
    </header>
  );
}
