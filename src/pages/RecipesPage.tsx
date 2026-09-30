import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'
import { RecipeCard } from '../components/Cards'

const categories = ['All', 'Bakery', 'Bread', 'Dinner'] as const

export function RecipesPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return recipes.filter((recipe) => {
      const matchesCategory = category === 'All' || recipe.category === category
      const matchesQuery =
        needle === '' ||
        recipe.title.toLowerCase().includes(needle) ||
        recipe.tagline.toLowerCase().includes(needle) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(needle))
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Recipes</span>
          </div>
          <span className="eyebrow">Recipe book</span>
          <h1>Every recipe, matched to its ingredients</h1>
          <p>
            Each card lists exactly what goes in the box — no mystery steps, no mismatched photos.
            Tap through for the full method, nutrition and timing.
          </p>
        </div>
      </header>

      <section className="section section--tight reveal" style={{ paddingTop: 0 }}>
        <div className="shell stack">
          <div className="tag-row" role="group" aria-label="Filter recipes by category">
            {categories.map((item) => (
              <button
                key={item}
                className="tag"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="field" style={{ maxWidth: '420px' }}>
            <label htmlFor="recipe-search">Search by name or ingredient</label>
            <input
              id="recipe-search"
              type="search"
              placeholder="Try “banana”, “flour” or “chocolate”"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid--cards">
              {filtered.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.slug} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>Nothing matches that yet</h2>
              <p>Try a different ingredient, or clear the search to see all six recipes.</p>
              <button
                className="btn btn--ghost btn--sm"
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setQuery('')
                  setCategory('All')
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
