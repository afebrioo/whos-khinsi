import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Credentials', href: '#credentials' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-cream border-b border-taupe">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="group inline-flex items-baseline gap-2.5 focus-visible:outline-none"
          aria-label={`${profile.fullName} — Home`}
        >
          <span className="script-accent text-[2rem] text-espresso transition-colors duration-300 group-hover:text-caramel">
            {profile.firstName}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted sm:inline">
            {profile.monogram}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="editorial-link text-[11px] font-medium uppercase tracking-[0.22em] text-walnut transition-colors duration-200 hover:text-espresso"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-espresso/75 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors duration-250 hover:border-espresso hover:bg-espresso hover:text-cream"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-taupe-strong p-2.5 text-espresso transition-colors hover:border-espresso md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="rounded-b-3xl border-t border-taupe/80 bg-ivory px-6 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="divide-y divide-taupe/60">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-xs uppercase tracking-[0.22em] text-walnut transition-colors hover:text-espresso"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full border border-espresso bg-espresso px-5 py-3 text-center text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cocoa"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
