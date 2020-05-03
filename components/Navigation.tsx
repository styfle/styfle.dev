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
  //{ href: '/slides', label: 'Slides' },
  { href: '/contact', label: 'Contact' }
];

function getClassName(href: string) {
  // TODO: figure out how to run on page load
  return typeof window !== 'undefined' && window.location.pathname === href ? 'active' : undefined;
}

const Navigation = () => (
  <nav>
    <ul className="container">
      {links.map(({ href, label }) => (
        <li key={href} className={getClassName(href)}>
          <Link href={href}><a>{label}</a></Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        background-color: #184534;
        text-align: center;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
      }
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
      }
      a:hover {
        border-bottom: none;
      }
    `}</style>
  </nav>
)

export default Navigation