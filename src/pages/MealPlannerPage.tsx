import { Link } from 'react-router-dom'
import { mealPlans } from '../data/offers'
import { SmartImage } from '../components/SmartImage'
import { useCart } from '../context/CartContext'
import { ArrowIcon } from '../components/Icons'

export function MealPlannerPage() {
  const { add } = useCart()

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Meal Planner</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>Meal planner</h1>
          <p>
            Three fixed menus a day — breakfast, lunch and dinner — so the only decision left is
            who sets the table.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack" style={{ gap: '1.75rem' }}>
          {mealPlans.map((meal, index) => (
            <article className={`split${index % 2 === 1 ? ' split--flip' : ''}`} key={meal.id}>
              <div className="split__media">
                <SmartImage src={meal.image} alt={meal.imageAlt} />
                <span className="split__price">${meal.price} / person</span>
              </div>
              <div className="split__body">
                <span className="badge">{meal.title}</span>
                <h2 style={{ marginTop: '0.6rem' }}>{meal.title} menu</h2>
                <p>Ready to heat, plate and eat. Swap any item at checkout.</p>
                <ul className="list-check">
                  {meal.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="split__cta">
                  <button
                    className="btn btn--primary"
                    onClick={() =>
                      add({
                        id: `meal-${meal.id}`,
                        name: `${meal.title} menu`,
                        price: meal.price,
                        image: meal.image,
                      })
                    }
                  >
                    Add to box
                  </button>
                  <Link className="link-arrow" to="/packages">
                    See full packages <ArrowIcon width={16} height={16} />
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
