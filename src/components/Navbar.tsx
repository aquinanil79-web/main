import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="topbar">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Aquin Anil home">
          Aquin Anil
        </a>

        <div className="nav-desktop" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            Online
          </span>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" role="menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link mobile-link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <span className="status-pill mobile-status">
            <Sparkles size={12} />
            Online
          </span>
        </div>
      )}
    </header>
  )
}
