import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className="container">
        {links.map(({ href, label }) => (
          <li key={href} className={pathname === href ? 'active' : undefined}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 0px;
        }
        li {
          display: flex;
          padding: 10px 10px;
        }
        li.active {
          border-bottom: 3px ridge currentColor;
        }
        a {
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
