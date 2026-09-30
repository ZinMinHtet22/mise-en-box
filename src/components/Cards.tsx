import { Link } from 'react-router-dom'
import type { Product, Recipe } from '../types'
import { SmartImage } from './SmartImage'
import { useCart } from '../context/CartContext'
import { ClockIcon, GaugeIcon, UsersIcon } from './Icons'

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="card">
      <div className="card__media">
        <SmartImage src={recipe.image} alt={recipe.imageAlt} />
        <span className="badge card__badge">{recipe.category}</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">
          <Link to={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
        </h3>
        <div className="card__meta">
          <span>
            <ClockIcon width={14} height={14} /> {recipe.prep} + {recipe.cook}
          </span>
          <span>
            <UsersIcon width={14} height={14} /> Serves {recipe.serves}
          </span>
          <span>
            <GaugeIcon width={14} height={14} /> {recipe.difficulty}
          </span>
        </div>
        <p className="card__text">{recipe.tagline}</p>
        <div className="card__footer">
          <span className="price">
            {recipe.calories}
            <small> kcal</small>
          </span>
          <Link className="btn btn--primary btn--sm" to={`/recipes/${recipe.slug}`}>
            View recipe
          </Link>
        </div>
      </div>
    </article>
  )
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart()

  return (
    <article className="card">
      <div className="card__media">
        <SmartImage src={product.image} alt={product.imageAlt} />
        {product.tag && <span className="badge card__badge">{product.tag}</span>}
      </div>
      <div className="card__body">
        <h3 className="card__title">{product.name}</h3>
        <p className="card__text">{product.blurb}</p>
        <div className="card__footer">
          <span className="price">
            ${product.price}
            <small> / {product.unit}</small>
          </span>
          <div className="card__actions">
            <button
              className="btn btn--primary btn--sm"
              onClick={() =>
                add({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
            >
              Add to box
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
