import cubo from "../assets/cubo.svg";

function InteligenciaImobiliaria() {

  return (
    <div className="section2">
    <div className="mt-5 d-flex justify-content-center container-fluid">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center color-1">INTELIGÊNCIA<br />IMOBILIÁRIA</h2>
        <div className="d-flex justify-content-evenly align-items-center flex-sm-row flex-column mb-5">
          <div>
            <img width="250px" className="center" src={cubo} alt="Art by Marta" />
          </div>
          <div>
            <h2 className="fw-bold fs-4 mt-5 color-1">Agentes<br /><span className="color-3">Empreendimentos</span><br /><span className="color-2">Clientes e Jornada de Compra</span></h2>
            <ul className="list-group list-group-flush list-group-numbered fw-semibold mt-2 mb-5">
              <li className="list-group-item">Sistêmica e completa</li>
              <li className="list-group-item">Atualizada em tempo real</li>
              <li className="list-group-item">Fortemente amparada em tecnologia e dados</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InteligenciaImobiliaria