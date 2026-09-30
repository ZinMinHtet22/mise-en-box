import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

export function NotFoundPage() {
  return (
    <section className="section reveal">
      <div className="shell" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <span className="eyebrow">404</span>
        <h1>This box came back empty</h1>
        <p className="muted" style={{ marginTop: '0.75rem' }}>
          The page you are after has been moved, eaten or never existed. The recipes are still
          where we left them.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link className="btn btn--primary" to="/">
            Back home <ArrowIcon width={18} height={18} />
          </Link>
          <Link className="btn btn--ghost" to="/recipes">
            Browse recipes
          </Link>
        </div>
      </div>
    </section>
  )
}
