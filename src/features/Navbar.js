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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <a className="nav-link active" href=""><img style={{'height': '1.3rem'}} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></img></a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href=""><img style={{'height': '1.3rem'}} src="https://cdn-icons-png.flaticon.com/512/1656/1656799.png"></img></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;