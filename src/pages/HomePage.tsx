import { Link } from 'react-router-dom'
import { featuredRecipes, recipes } from '../data/recipes'
import { pantryProducts } from '../data/products'
import { steps, testimonials } from '../data/site'
import { ProductCard, RecipeCard } from '../components/Cards'
import { SmartImage } from '../components/SmartImage'
import { CountUp } from '../components/CountUp'
import { ArrowIcon, BoxIcon, SparkIcon, TruckIcon } from '../components/Icons'

const marqueeItems = [
  'Tested three times before it ships',
  'Free delivery over $60',
  'Skip or pause any week',
  'Packed the morning it leaves us',
  'Pre-measured, zero waste',
  'Baked in small batches',
]

export function HomePage() {
  const picks = pantryProducts.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <SmartImage src="/images/hero.jpg" alt="A couple cooking together in a bright kitchen" loading="eager" />
          <div className="hero__scrim" />
        </div>
        <div className="shell hero__content">
          <span className="eyebrow" style={{ color: 'var(--saffron)' }}>
            Weekly meal kits &amp; bakery
          </span>
          <h1>Cook better, box by box.</h1>
          <p>
            Pre-measured ingredients, tested recipe cards and pantry staples that actually get
            used. Everything you need for the week, delivered to your door.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/recipes">
              Browse recipes <ArrowIcon width={18} height={18} />
            </Link>
            <Link className="btn btn--light" to="/packages">
              See packages
            </Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>
                <CountUp value="6" />
              </strong>
              <span>recipes every week</span>
            </div>
            <div className="hero__stat">
              <strong>
                <CountUp value="30 min" />
              </strong>
              <span>average cook time</span>
            </div>
            <div className="hero__stat">
              <strong>
                <CountUp value="0 waste" />
              </strong>
              <span>pre-measured portions</span>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="marquee__item" key={`${item}-${index}`}>
              <span className="marquee__dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section section--tight reveal">
        <div className="shell">
          <div className="grid grid--three">
            <div className="feature">
              <div className="feature__icon">
                <BoxIcon />
              </div>
              <h3>{steps[0].title}</h3>
              <p>{steps[0].body}</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <TruckIcon />
              </div>
              <h3>{steps[1].title}</h3>
              <p>{steps[1].body}</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <SparkIcon />
              </div>
              <h3>{steps[2].title}</h3>
              <p>{steps[2].body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint reveal">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">This week</span>
              <h2>Recipes worth staying in for</h2>
            </div>
            <Link className="link-arrow" to="/recipes">
              All recipes <ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="grid grid--cards">
            {featuredRecipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="shell stack" style={{ gap: '2rem' }}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">Pantry</span>
              <h2>Staples that never go stale</h2>
              <p style={{ marginTop: '0.5rem' }}>
                The flour, yeast and syrups behind every recipe on this site — measured for real
                home cooking.
              </p>
            </div>
            <Link className="link-arrow" to="/pantry">
              Shop ingredients <ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="grid grid--cards">
            {picks.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight reveal">
        <div className="shell">
          <div className="banner">
            <SmartImage src="/images/cakes-banner.jpg" alt="A slice of layer cake being served" />
            <div className="banner__inner">
              <span className="badge badge--dark">Celebrations</span>
              <h2>Special cakes, made to order</h2>
              <p>
                Birthdays, promotions, Tuesday afternoons. Order 48 hours ahead and we will bake,
                decorate and box it for collection.
              </p>
              <Link className="btn btn--light" to="/gift-box">
                Order a cake box <ArrowIcon width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint reveal">
        <div className="shell stack" style={{ gap: '2rem' }}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">Plan the week</span>
              <h2>Breakfast to dinner, sorted</h2>
            </div>
            <Link className="link-arrow" to="/meal-planner">
              Open meal planner <ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="grid grid--three">
            {recipes.slice(3).map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Reviews</span>
              <h2>People who stopped ordering takeaway</h2>
            </div>
          </div>
          <div className="grid grid--three">
            {testimonials.map((item) => (
              <figure className="feature" key={item.name}>
                <blockquote style={{ margin: 0, fontSize: '1rem' }}>“{item.quote}”</blockquote>
                <figcaption style={{ fontSize: '0.88rem', color: 'var(--ink-soft)' }}>
                  <strong style={{ color: 'var(--ink)' }}>{item.name}</strong> — {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight reveal">
        <div className="shell">
          <div className="panel panel--accent" style={{ textAlign: 'center' }}>
            <h2>Ready when you are</h2>
            <p style={{ maxWidth: '52ch', margin: '0.75rem auto 1.5rem', color: 'rgba(255,255,255,0.78)' }}>
              Start with a single recipe box, or commit to the week and save 15%. No lock-in, skip
              any week you like.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary" to="/login">
                Get started
              </Link>
              <Link className="btn btn--light" to="/contact">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
