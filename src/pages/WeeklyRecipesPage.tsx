import { Link } from 'react-router-dom'
import { featuredRecipes } from '../data/recipes'
import { RecipeCard } from '../components/Cards'
import { ArrowIcon } from '../components/Icons'

export function WeeklyRecipesPage() {
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Weekly Recipe</span>
          </div>
          <span className="eyebrow">Products &amp; services</span>
          <h1>This week&apos;s three</h1>
          <p>
            The bakes and dinners we are cooking in-house right now, rotated every Monday. Order
            by Sunday midnight for the week ahead.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="grid grid--three">
            {featuredRecipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.slug} />
            ))}
          </div>

          <div
            className="panel"
            style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <h2 style={{ marginBottom: '0.35rem' }}>Want all six?</h2>
              <p className="muted" style={{ maxWidth: '48ch' }}>
                The full recipe book includes the week&apos;s breads, cookies and pizza — with the
                pantry staples measured out for you.
              </p>
            </div>
            <Link className="btn btn--primary" to="/recipes">
              Open the recipe book <ArrowIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
