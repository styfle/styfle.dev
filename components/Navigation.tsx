'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from 'styles/navigation.module.css';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  //{ href: '/slides', label: 'Slides' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={style.nav}>
      <ul className={`container ${style.ul}`}>
        {links.map(({ href, label }) => (
          <li key={href} className={pathname === href ? `${style.li} ${style.active}` : style.li}>
            <Link href={href} className={style.a}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
