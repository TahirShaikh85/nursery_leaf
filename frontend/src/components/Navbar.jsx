import { NavLink } from "react-router-dom"

const Navbar = ({linkColor}) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Nursery Leaf</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={`nav-link ${linkColor}`} to="/">Home</NavLink>
                        <NavLink className={`nav-link ${linkColor}`} to="/products">Products</NavLink>
                        <NavLink className={`nav-link ${linkColor}`} to="/about">About</NavLink>
                        <NavLink className={`nav-link ${linkColor}`} to="/gallery">Gallery</NavLink>
                        <NavLink className={`nav-link ${linkColor}`} to="/contact">Contact</NavLink>
                        <NavLink className={`nav-link ${linkColor}`} to="/addnursery">Add Nursery</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar