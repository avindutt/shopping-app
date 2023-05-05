import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div>
            <nav style={{'height': '5.5rem'}} className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div>
      <Link to="/" href="#">
        <img style={{'height': '4.5rem'}} 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fmyntra-logo-clipart-3.png&f=1&nofb=1&ipt=c669bc538f832f9a25ef86e1ddfe9d303b456f10caa13de0ea5f9b0909547715&ipo=images">
        </img>
      </Link>
    </div>
    
      <ul style={{'position': 'relative', 'left': '40px'}} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">WOMEN</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#">KIDS</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active">HOME & LIVING</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active">BEAUTY</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active">STUDIO</a>
        </li>
      </ul>
      <form style={{'position': 'relative', 'right': '19rem', 'width': '30rem', }} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul style={{'position': 'absolute', 'right': '4rem'}} className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item mx-3" >
          <a className="nav-link active" href=""><img style={{'height': '1.3rem'}} src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"></img></a>
        </li>
        <li className="nav-item mx-3">
          <Link to="/wishlist" className="nav-link active" href=""><img style={{'height': '1.3rem'}} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></img></Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/cart" className="nav-link active" href=""><img style={{'height': '1.3rem'}} src="https://cdn-icons-png.flaticon.com/512/1656/1656799.png"></img></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;