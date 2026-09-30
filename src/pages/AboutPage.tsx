import { Link } from 'react-router-dom'
import { SmartImage } from '../components/SmartImage'
import { ArrowIcon, BoxIcon, LeafIcon, SparkIcon } from '../components/Icons'

const values = [
  {
    icon: <LeafIcon />,
    title: 'Quality meets convenience',
    body: 'Life is hectic. Our range exists so a good meal never depends on a last-minute shop.',
  },
  {
    icon: <SparkIcon />,
    title: 'Tested in our kitchen',
    body: 'Every recipe is cooked at least three times before it earns a place on the site.',
  },
  {
    icon: <BoxIcon />,
    title: 'Nothing wasted',
    body: 'Pre-measured portions mean less food in the bin and less money out of your pocket.',
  },
]

const offerings = [
  ['Breakfast bliss', 'Oats, artisanal granola and gourmet coffee to start the day properly.'],
  ['Lunchtime delights', 'Soups, sandwiches and salads built for a quick, genuinely filling break.'],
  ['Dinner elegance', 'Premium ingredients, from pasta and sauces to exotic spices and marinades.'],
  ['Breads and beyond', 'Whole grain, sourdough and gluten-free loaves baked the morning they ship.'],
  ['Sweet indulgence', 'Cakes, cookies and desserts for every occasion, from a Tuesday to a wedding.'],
  ['Cooking tools', 'Utensils, gadgets and appliances that make the kitchen a better place to be.'],
]

export function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Our Company</span>
          </div>
          <span className="eyebrow">About us</span>
          <h1>Welcome to Mise en Box</h1>
          <p>
            We believe the heart of any home is its kitchen — and we are here to make sure yours is
            always stocked with the finest food and the right tools.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '1.75rem' }}>
          <div className="split">
            <div className="split__media">
              <SmartImage src="/images/about-kitchen.jpg" alt="A calm kitchen table with cutlery laid out" />
            </div>
            <div className="split__body">
              <h2>From a small kitchen to your table</h2>
              <p>
                Whether you are an aspiring chef, a busy professional or simply someone who likes
                eating well, we have something for you in a curated, ever-changing selection.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                What started as a weekend baking stall is now a weekly box, a pantry shelf and a
                recipe book — still packed by the same handful of people.
              </p>
              <div className="split__cta">
                <Link className="btn btn--primary" to="/recipes">
                  See what we cook <ArrowIcon width={18} height={18} />
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Visit us
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid--three">
            {values.map((value) => (
              <div className="feature" key={value.title}>
                <div className="feature__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint reveal">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Our offering</span>
              <h2>Six ways we feed you</h2>
            </div>
          </div>
          <div className="grid grid--two">
            {offerings.map(([title, body]) => (
              <div className="feature" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
