import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Nursery Leaf</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="#">Home</Link>
                        <Link className="nav-link" to="#">About</Link>
                        <Link className="nav-link" to="#">Gallery</Link>
                        <Link className="nav-link" to="#">Contact</Link>
                        <Link className="nav-link" to="addnursery">Add Nursery</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar