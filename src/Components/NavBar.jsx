import { Link } from "react-router-dom";
import '../css/NavBar.css'

function NavBar()
{
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Favourite" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar