import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className=" d-flex justify-content-center col-12 bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to={"/"} className="nav-link">All</Link>
        </li>
        <li className="nav-item">
          <Link to={"fullstack"} className="nav-link">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
          <Link to={'/datascience'} className="nav-link">DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
          <Link to={'/cybersecurity'} className="nav-link ">CYBER SECURITY</Link>
        </li>
        <li className="nav-item">
          <Link to={'/career'} className="nav-link ">CARRER</Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Menu