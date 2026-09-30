import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { SmartImage } from './SmartImage'

export function CartDrawer() {
  const { lines, total, isOpen, close, increment, decrement, remove, clear } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={close} aria-hidden="true" />
      <aside className="cart" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <header className="cart__head">
          <h2>Your box</h2>
          <button className="cart__close" onClick={close} aria-label="Close cart">
            ×
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="cart__empty">
            <div className="cart__empty-art" aria-hidden="true">
              <svg viewBox="0 0 112 96" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <g className="cart-art__heart">
                  <path d="M56 35c-9-7-16-13.5-11.5-20C47.8 10 54 11.5 56 16c2-4.5 8.2-6 11.5-1C72 21.5 65 28 56 35Z" />
                </g>
                <g className="cart-art__box">
                  <path d="M16 44 56 56l40-12" />
                  <path d="M16 44v28l40 12 40-12V44" />
                  <path d="M56 56v28" />
                  <path d="M16 44 5 33M96 44l11-11" />
                </g>
                <g className="cart-art__sparks">
                  <path className="cart-art__spark cart-art__spark--a" d="M25 14v8M21 18h8" />
                  <path className="cart-art__spark cart-art__spark--b" d="M91 11v6M88 14h6" />
                  <circle className="cart-art__spark cart-art__spark--c" cx="76" cy="24" r="2.2" fill="currentColor" stroke="none" />
                </g>
              </svg>
            </div>
            <h2>Your box is empty</h2>
            <p>Add pantry staples or a package to get started.</p>
            <div className="cart__empty-actions">
              <Link className="btn btn--primary btn--block" to="/pantry" onClick={close}>
                Browse pantry
              </Link>
              <Link className="btn btn--ghost btn--block" to="/packages" onClick={close}>
                See packages
              </Link>
            </div>
            <div className="cart__empty-chips">
              <Link className="cart__chip" to="/recipes" onClick={close}>
                Popular recipes
              </Link>
              <Link className="cart__chip" to="/weekly-recipes" onClick={close}>
                This week&apos;s menu
              </Link>
              <Link className="cart__chip" to="/gift-box" onClick={close}>
                Gift boxes
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart__items">
            {lines.map((line) => (
              <div className="cart__line" key={line.id}>
                <SmartImage src={line.image} alt={line.name} />
                <div>
                  <h3>{line.name}</h3>
                  <div className="cart__qty">
                    <button onClick={() => decrement(line.id)} aria-label={`Reduce ${line.name}`}>
                      −
                    </button>
                    <span>{line.quantity}</span>
                    <button onClick={() => increment(line.id)} aria-label={`Add another ${line.name}`}>
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong>${line.price * line.quantity}</strong>
                  <button
                    onClick={() => remove(line.id)}
                    style={{
                      display: 'block',
                      marginTop: '0.35rem',
                      border: 0,
                      background: 'transparent',
                      color: 'var(--accent)',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={clear}
              style={{
                border: 0,
                background: 'transparent',
                color: 'var(--ink-soft)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
              }}
            >
              Empty the box
            </button>
          </div>
        )}

        {lines.length > 0 && (
          <footer className="cart__foot">
            <div className="cart__total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <Link className="btn btn--primary btn--block" to="/login" onClick={close}>
              Checkout
            </Link>
            <p className="form-note" style={{ textAlign: 'center' }}>
              Free delivery over $60 · Cancel any week
            </p>
          </footer>
        )}
      </aside>
    </>
  )
}
