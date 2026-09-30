import { Link } from 'react-router-dom'
import { kitchenProducts } from '../data/products'
import { ProductCard } from '../components/Cards'

export function KitchenPage() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>At Home</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>At home, in your kitchen</h1>
          <p>
            Pans, burners and utensils we test in our own kitchen first. If it does not survive a
            Tuesday it does not make the shelf.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="grid grid--cards">
            {kitchenProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
