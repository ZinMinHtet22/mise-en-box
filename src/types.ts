export interface NutritionFact {
  label: string
  value: string
}

export interface Recipe {
  slug: string
  title: string
  tagline: string
  image: string
  imageAlt: string
  prep: string
  cook: string
  serves: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  calories: number
  category: 'Bakery' | 'Bread' | 'Dinner'
  description: string
  ingredients: string[]
  steps: string[]
  nutrition: NutritionFact[]
  featured?: boolean
}

export type ProductCategory = 'pantry' | 'kitchen'

export interface Product {
  id: string
  name: string
  price: number
  unit: string
  image: string
  imageAlt: string
  blurb: string
  category: ProductCategory
  tag?: string
}

export interface MealPlan {
  id: string
  title: string
  image: string
  imageAlt: string
  price: number
  items: string[]
}

export interface PackageOffer {
  id: string
  name: string
  image: string
  imageAlt: string
  price: number
  serves: number
  summary: string
  items: string[]
  popular?: boolean
}

export interface GiftBox {
  id: string
  name: string
  image: string
  imageAlt: string
  price: number
  summary: string
  items: string[]
}

export interface CartLine {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}
