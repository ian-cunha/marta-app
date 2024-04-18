import logoMarta from "../assets/logoMarta.svg";

function Nav() {
  
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img width="120px" className="d-inline-block align-text-top" src={logoMarta} alt="Marta" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-semibold">
              <li className="nav-item">
                <a className="nav-link navb" aria-current="page" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/marta">Marta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/mercado">Mercado</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/ofertaedemanda">Oferta & Demanda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/comercializacao">Visão 360°</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navb" href="/beneficios">Benefícios</a>
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

export default Nav