import { Link, useParams } from 'react-router-dom'
import { getRecipe, recipes } from '../data/recipes'
import { SmartImage } from '../components/SmartImage'
import { RecipeCard } from '../components/Cards'
import { ArrowIcon, ClockIcon, FireIcon, GaugeIcon, UsersIcon } from '../components/Icons'
import { NotFoundPage } from './NotFoundPage'

export function RecipeDetailPage() {
  const { slug } = useParams()
  const recipe = slug ? getRecipe(slug) : undefined

  if (!recipe) return <NotFoundPage />

  const related = recipes.filter((item) => item.slug !== recipe.slug).slice(0, 3)

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/recipes">Recipes</Link>{' '}
            <span>/</span> <span>{recipe.title}</span>
          </div>

          <div className="recipe-hero">
            <div className="recipe-hero__media">
              <SmartImage src={recipe.image} alt={recipe.imageAlt} loading="eager" />
            </div>
            <div>
              <span className="eyebrow">{recipe.category}</span>
              <h1>{recipe.title}</h1>
              <p className="muted">{recipe.description}</p>

              <dl className="recipe-facts">
                <div>
                  <dt>Prep</dt>
                  <dd>{recipe.prep}</dd>
                </div>
                <div>
                  <dt>Cook</dt>
                  <dd>{recipe.cook}</dd>
                </div>
                <div>
                  <dt>Serves</dt>
                  <dd>{recipe.serves}</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>{recipe.difficulty}</dd>
                </div>
              </dl>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <Link className="btn btn--primary" to="/pantry">
                  Get the ingredients <ArrowIcon width={18} height={18} />
                </Link>
                <Link className="btn btn--ghost" to="/meal-planner">
                  Add to meal plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell recipe-body">
          <aside className="panel panel--accent">
            <h2>Ingredients</h2>
            <ul className="ingredients">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              Everything except salt, pepper and oil is included in the box.
            </p>
          </aside>

          <div className="stack">
            <div className="panel">
              <h2>Method</h2>
              <ol className="steps">
                {recipe.steps.map((step) => (
                  <li key={step}>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="panel">
              <h2>Nutrition per serving</h2>
              <table className="nutrition">
                <tbody>
                  {recipe.nutrition.map((fact) => (
                    <tr key={fact.label}>
                      <th scope="row">{fact.label}</th>
                      <td>{fact.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="form-note" style={{ marginTop: '1rem' }}>
                Packed in a facility that handles milk, eggs, wheat, soy, nuts and sesame.
              </p>
            </div>

            <div className="grid grid--three">
              <div className="feature">
                <ClockIcon />
                <h3>Total time</h3>
                <p>{recipe.prep.includes('proving') || recipe.prep.includes('chilling') ? 'Plan ahead' : 'Weeknight friendly'}</p>
              </div>
              <div className="feature">
                <GaugeIcon />
                <h3>Difficulty</h3>
                <p>{recipe.difficulty}</p>
              </div>
              <div className="feature">
                <FireIcon />
                <h3>Energy</h3>
                <p>{recipe.calories} kcal per serving</p>
              </div>
              <div className="feature">
                <UsersIcon />
                <h3>Portions</h3>
                <p>Serves {recipe.serves}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint reveal">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Keep cooking</span>
              <h2>You might also like</h2>
            </div>
            <Link className="link-arrow" to="/recipes">
              All recipes <ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="grid grid--cards">
            {related.map((item) => (
              <RecipeCard recipe={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
