import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <span className="logo__mark">MB</span>
              {site.name}
            </Link>
            <p>
              Meal kits, bakery recipes, pantry staples and kitchen tools — packed the morning
              they ship.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div>
            <h3>Shop</h3>
            <ul>
              <li>
                <Link to="/pantry">Ingredients</Link>
              </li>
              <li>
                <Link to="/kitchen">At Home</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/gift-box">Gift Box</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Cook</h3>
            <ul>
              <li>
                <Link to="/recipes">All recipes</Link>
              </li>
              <li>
                <Link to="/weekly-recipes">Weekly recipe</Link>
              </li>
              <li>
                <Link to="/meal-planner">Meal planner</Link>
              </li>
              <li>
                <Link to="/app">Download app</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">Our company</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {site.copyright} {site.name} Company. All rights reserved.
          </span>
          <span>Photography: StockSnap &amp; Rawpixel contributors, used under CC0.</span>
        </div>
      </div>
    </footer>
  )
}
