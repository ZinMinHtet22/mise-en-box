import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { RecipesPage } from './pages/RecipesPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { PantryPage } from './pages/PantryPage'
import { KitchenPage } from './pages/KitchenPage'
import { MealPlannerPage } from './pages/MealPlannerPage'
import { WeeklyRecipesPage } from './pages/WeeklyRecipesPage'
import { PackagesPage } from './pages/PackagesPage'
import { GiftBoxPage } from './pages/GiftBoxPage'
import { AppDownloadPage } from './pages/AppDownloadPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
        <Route path="/pantry" element={<PantryPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/meal-planner" element={<MealPlannerPage />} />
        <Route path="/weekly-recipes" element={<WeeklyRecipesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/gift-box" element={<GiftBoxPage />} />
        <Route path="/app" element={<AppDownloadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
