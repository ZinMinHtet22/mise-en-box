import { Link } from 'react-router-dom'
import { pantryProducts } from '../data/products'
import { ProductCard } from '../components/Cards'
import { ArrowIcon, LeafIcon, TruckIcon } from '../components/Icons'

export function PantryPage() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Ingredients</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>Ingredients</h1>
          <p>
            The pantry shelf behind our recipes — flour, yeast, mixes and syrups, portioned for the
            way you actually cook.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '2rem' }}>
          <div className="grid grid--three">
            <div className="feature">
              <div className="feature__icon">
                <LeafIcon />
              </div>
              <h3>Sourced simply</h3>
              <p>Short ingredient lists, no fillers, nothing you cannot pronounce.</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <TruckIcon />
              </div>
              <h3>Free over $60</h3>
              <p>Pantry orders ship free when the box tops sixty dollars.</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <ArrowIcon />
              </div>
              <h3>Pause any week</h3>
              <p>Skip a delivery or swap items up to 48 hours before dispatch.</p>
            </div>
          </div>

          <div className="grid grid--cards">
            {pantryProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
