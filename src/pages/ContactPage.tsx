import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { SmartImage } from '../components/SmartImage'
import { CheckIcon, MailIcon, PinIcon, PhoneIcon } from '../components/Icons'

interface FormState {
  name: string
  email: string
  message: string
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A few more words would help us help you.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact Us</span>
          </div>
          <span className="eyebrow">We reply within one working day</span>
          <h1>Get in touch</h1>
          <p>Questions about an order, a dietary swap or a custom cake? Send us a note.</p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell contact">
          <div className="contact__details stack">
            <div className="feature" style={{ textAlign: 'left' }}>
              <div className="feature__icon">
                <PinIcon />
              </div>
              <h3>Kitchen &amp; counter</h3>
              <p>{site.address}</p>
            </div>
            <div className="feature" style={{ textAlign: 'left' }}>
              <div className="feature__icon">
                <PhoneIcon />
              </div>
              <h3>Call us</h3>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </p>
            </div>
            <div className="feature" style={{ textAlign: 'left' }}>
              <div className="feature__icon">
                <MailIcon />
              </div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="map-frame">
              <SmartImage src="/images/map.jpg" alt="Map showing the Mise en Box kitchen location" />
            </div>
          </div>

          <div className="panel">
            {sent ? (
              <div className="success-state">
                <div className="success-state__icon">
                  <CheckIcon />
                </div>
                <h2>Thanks, {form.name.split(' ')[0]}!</h2>
                <p>Your message is on its way. We usually reply within one working day.</p>
                <button className="btn btn--ghost btn--sm" style={{ marginTop: '1rem' }} onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 style={{ marginBottom: '1.25rem' }}>Send a message</h2>

                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => update('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => update('email', event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    value={form.message}
                    onChange={(event) => update('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button className="btn btn--primary" type="submit">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
