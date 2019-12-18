import React from 'react'
import Link from 'next/link'

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/slides', label: 'Slides' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

function getClassName(href: string) {
  // TODO: figure out how to run on page load
  return typeof window !== 'undefined' && window.location.pathname === href ? 'active' : undefined;
}

const Navigation = () => (
  <nav>
    <ul>
      {links.map(({ href, label }) => (
        <li key={href} className={getClassName(href)}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        border-bottom: 1px solid #ccc;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0px;
        margin: 0px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      li.active {
        border-bottom: 3px ridge currentColor;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
      }
      a:hover {
        text-decoration: none;
      }
    `}</style>
  </nav>
)

export default Navigation