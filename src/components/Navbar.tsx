import { useCallback, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/site'
import { useCart } from '../context/CartContext'
import { CartIcon, ChevronIcon, MoonIcon, SunIcon } from './Icons'

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(readTheme)
  const { count, open: openCart } = useCart()
  const location = useLocation()

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('inabox.theme', next)
      } catch (e) {}
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', next === 'dark' ? '#14110d' : '#fbf7f0')
      return next
    })
  }, [])

  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setSubOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const groupIsActive = (children: { to: string }[]) =>
    children.some((child) => location.pathname === child.to)

  return (
    <header className="nav">
      <div className="shell nav__inner">
        <Link to="/" className="logo" aria-label="Mise en Box home">
          <span className="logo__mark">MB</span>
          Mise en Box
        </Link>

        <nav aria-label="Main">
          <ul className="nav__links">
            {navigation.map((item) =>
              item.children ? (
                <li className="nav__dropdown" key={item.label}>
                  <span
                    className={`nav__link${groupIsActive(item.children) ? ' is-active' : ''}`}
                    style={{ cursor: 'default' }}
                  >
                    {item.label}
                  </span>
                  <ul className="nav__dropdown-menu">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to ?? '/'}
                    className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="cart-button" onClick={openCart} aria-label={`Open cart, ${count} items`}>
            <CartIcon />
            {count > 0 && (
              <span className="cart-button__count" key={count}>
                {count}
              </span>
            )}
          </button>
          <Link to="/login" className="btn btn--dark btn--sm">
            Login
          </Link>
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__drawer">
          <div className="shell">
            <ul className="nav__drawer-list">
              {navigation.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span
                        className={`nav__drawer-link${groupIsActive(item.children) ? ' is-active' : ''}`}
                        style={{ flex: 1, borderBottom: 0, paddingBottom: '0.35rem' }}
                      >
                        {item.label}
                      </span>
                      <button
                        className="nav__subtoggle"
                        aria-expanded={subOpen}
                        aria-label="Toggle submenu"
                        onClick={() => setSubOpen((value) => !value)}
                      >
                        <ChevronIcon
                          style={{
                            transform: subOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </button>
                    </div>
                    {subOpen && (
                      <ul className="nav__sublist">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to}>{child.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to ?? '/'}
                      className={({ isActive }) =>
                        `nav__drawer-link${isActive ? ' is-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
            <div className="nav__drawer-cta">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <Link to="/login" className="btn btn--dark">
                Login
              </Link>
              <Link to="/recipes" className="btn btn--primary">
                Start cooking
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
