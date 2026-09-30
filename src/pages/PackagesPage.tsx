import { Link } from 'react-router-dom'
import { packages } from '../data/offers'
import { SmartImage } from '../components/SmartImage'
import { useCart } from '../context/CartContext'
import { UsersIcon } from '../components/Icons'

export function PackagesPage() {
  const { add } = useCart()

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Packages</span>
          </div>
          <span className="eyebrow">Feed a crowd</span>
          <h1>Packages for ten</h1>
          <p>
            Fully cooked, boxed and labelled with reheating times. Order for ten people, take the
            credit.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '1.75rem' }}>
          {packages.map((offer, index) => (
            <article className={`split${index % 2 === 1 ? ' split--flip' : ''}`} key={offer.id}>
              <div className="split__media">
                <SmartImage src={offer.image} alt={offer.imageAlt} />
                <span className="split__price">${offer.price}</span>
              </div>
              <div className="split__body">
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className="badge">{offer.serves} people</span>
                  {offer.popular && <span className="badge badge--dark">Most ordered</span>}
                </div>
                <h2 style={{ marginTop: '0.6rem' }}>{offer.name}</h2>
                <p>{offer.summary}</p>
                <ul className="list-check">
                  {offer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="split__cta">
                  <button
                    className="btn btn--primary"
                    onClick={() =>
                      add({
                        id: `package-${offer.id}`,
                        name: offer.name,
                        price: offer.price,
                        image: offer.image,
                      })
                    }
                  >
                    Add to box
                  </button>
                  <span className="form-note" style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                    <UsersIcon width={16} height={16} /> ${offer.price / offer.serves} per head
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
