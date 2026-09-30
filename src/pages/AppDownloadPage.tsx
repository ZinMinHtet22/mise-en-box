import { Link } from 'react-router-dom'
import { AppStoreBadge, CheckIcon, GooglePlayBadge } from '../components/Icons'
import { SmartImage } from '../components/SmartImage'

const features = [
  {
    title: 'Cook mode',
    body: 'Step-by-step timers that wake the screen as you go, so you never lose your place.',
  },
  {
    title: 'Auto shopping list',
    body: 'Tick off what you already have; the app builds the rest from your chosen recipes.',
  },
  {
    title: 'Week sync',
    body: 'Your meal plan follows you from the site to the kitchen, offline included.',
  },
]

export function AppDownloadPage() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Download App</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>The Mise en Box app</h1>
          <p>
            Everything on this site, plus timers, offline recipes and a shopping list that writes
            itself. Free with every subscription.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '2rem' }}>
          <div className="split">
            <div className="split__media">
              <SmartImage src="/images/kitchen-utensils.jpg" alt="A kitchen counter with utensils and a recipe on a tablet" />
            </div>
            <div className="split__body">
              <h2>Cook with your hands full</h2>
              <p>
                Large type, voice-friendly steps and a screen that stays awake while the oven
                heats.
              </p>
              <ul className="list-check">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <strong style={{ color: 'var(--ink)' }}>{feature.title}</strong> — {feature.body}
                  </li>
                ))}
              </ul>
              <div className="split__cta">
                <a href="#" aria-label="Download on the App Store" onClick={(event) => event.preventDefault()}>
                  <AppStoreBadge />
                </a>
                <a href="#" aria-label="Get it on Google Play" onClick={(event) => event.preventDefault()}>
                  <GooglePlayBadge />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid--three">
            {features.map((feature) => (
              <div className="feature" key={feature.title}>
                <div className="feature__icon">
                  <CheckIcon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
