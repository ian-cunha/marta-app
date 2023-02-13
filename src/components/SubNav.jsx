import logoMartaWhite from "../assets/logoMartaWhite.svg";

function SubNav() {
  
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img width="120px" className="d-inline-block align-text-top" src={logoMartaWhite} alt="Marta" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-semibold">
              <li className="nav-item">
                <a className="nav-link navb" aria-current="page" href="/">Página inicial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/">A Marta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/">Como funciona?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/">Números</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/indices">Índices Marta</a>
              </li>
            </ul>
            <a className="login nav-link fw-semibold" target="_blank" href="https://app.deixacommarta.com.br/">Login <i className="bi bi-box-arrow-in-right"></i></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SubNav