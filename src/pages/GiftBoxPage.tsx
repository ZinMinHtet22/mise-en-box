import { Link } from 'react-router-dom'
import { giftBoxes } from '../data/offers'
import { SmartImage } from '../components/SmartImage'
import { useCart } from '../context/CartContext'

export function GiftBoxPage() {
  const { add } = useCart()

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Gift Box</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>Gift boxes</h1>
          <p>
            Wrapped, ribboned and ready to hand over. Add a handwritten card at checkout and we
            will post it straight to them.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '1.75rem' }}>
          {giftBoxes.map((box, index) => (
            <article className={`split${index % 2 === 1 ? ' split--flip' : ''}`} key={box.id}>
              <div className="split__media">
                <SmartImage src={box.image} alt={box.imageAlt} />
                <span className="split__price">${box.price}</span>
              </div>
              <div className="split__body">
                <span className="badge">Gift ready</span>
                <h2 style={{ marginTop: '0.6rem' }}>{box.name}</h2>
                <p>{box.summary}</p>
                <ul className="list-check">
                  {box.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="split__cta">
                  <button
                    className="btn btn--primary"
                    onClick={() =>
                      add({
                        id: `gift-${box.id}`,
                        name: box.name,
                        price: box.price,
                        image: box.image,
                      })
                    }
                  >
                    Add to box
                  </button>
                  <Link className="btn btn--ghost" to="/contact">
                    Send to someone
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
