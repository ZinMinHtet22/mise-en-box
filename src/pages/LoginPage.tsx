import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowIcon, CheckIcon, MailIcon, PhoneIcon } from '../components/Icons'

export function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({})
  const [done, setDone] = useState(false)

  const update = (field: 'name' | 'email' | 'password', value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: typeof errors = {}
    if (mode === 'register' && form.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.password.length < 6) next.password = 'Passwords need at least 6 characters.'
    setErrors(next)
    if (Object.keys(next).length === 0) setDone(true)
  }

  if (done) {
    return (
      <section className="section reveal">
        <div className="shell">
          <div className="panel panel--accent auth__panel" style={{ textAlign: 'center' }}>
            <div className="success-state__icon" style={{ background: 'var(--saffron)', margin: '0 auto 1rem' }}>
              <CheckIcon />
            </div>
            <h2 style={{ color: '#fff' }}>
              {mode === 'login' ? 'Welcome back!' : 'You are all set!'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '40ch', margin: '0.75rem auto 1.5rem' }}>
              {mode === 'login'
                ? 'Your box, meal plan and saved recipes are waiting inside.'
                : 'Check your inbox — we sent a confirmation link to finish setting up your account.'}
            </p>
            <Link className="btn btn--primary" to="/meal-planner">
              Open meal planner <ArrowIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section reveal">
      <div className="shell auth__grid">
        <div className="auth__pitch">
          <span className="eyebrow">
            {site.name} account
          </span>
          <h1>{mode === 'login' ? 'Welcome back to the kitchen' : 'Start your first box'}</h1>
          <p>
            {mode === 'login'
              ? 'Pick up where you left off — skip a week, swap a recipe or reorder a favourite.'
              : 'Create an account to plan the week, save recipes and get first access to new menus.'}
          </p>
          <ul className="list-check list-check--dark">
            <li>Skip or pause any delivery</li>
            <li>Saved recipes and shopping lists</li>
            <li>Free cookbook with your first order</li>
          </ul>
          <div className="auth__contact">
            <span>
              <PhoneIcon width={16} height={16} /> {site.phone}
            </span>
            <span>
              <MailIcon width={16} height={16} /> {site.email}
            </span>
          </div>
        </div>

        <div className="panel auth__panel">
          <div className="auth__tabs" role="tablist" aria-label="Account">
            <button
              type="button"
              className={mode === 'login' ? 'is-active' : ''}
              aria-pressed={mode === 'login'}
              onClick={() => {
                setMode('login')
                setErrors({})
              }}
            >
              Sign in
            </button>
            <button
              type="button"
              className={mode === 'register' ? 'is-active' : ''}
              aria-pressed={mode === 'register'}
              onClick={() => {
                setMode('register')
                setErrors({})
              }}
            >
              Create account
            </button>
          </div>

          <form className="auth__form" onSubmit={handleSubmit} noValidate>
            {mode === 'register' && (
              <div className="field">
                <label htmlFor="auth-name">Full name</label>
                <input
                  id="auth-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
            )}

            <div className="field">
              <label htmlFor="auth-email">Email</label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="auth-password">Password</label>
              <input
                id="auth-password"
                type="password"
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                value={form.password}
                onChange={(event) => update('password', event.target.value)}
                aria-invalid={Boolean(errors.password)}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <button className="btn btn--primary btn--block" type="submit">
              {mode === 'login' ? 'Sign in' : 'Create account'}
            </button>

            <p className="form-note" style={{ marginTop: '1rem', textAlign: 'center' }}>
              {mode === 'login' ? 'New here? ' : 'Already have an account? '}
              <button
                type="button"
                className="linkish"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              >
                {mode === 'login' ? 'Create an account' : 'Sign in instead'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
