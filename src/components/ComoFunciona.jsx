
import grafdesktop from "../assets/graf-desktop.svg";

function ComoFunciona() {

  return (
    <div className="section">
    <div className="pt-5 d-flex justify-content-center container-fluid">
      <div className="container">
        <h2 className="fw-bold fs-1 text-light text-center mb-5">Como funciona?</h2>
        <img width="100%" className="d-inline-block align-text-top" src={grafdesktop} alt="Art by Marta" />
        <h5 className="text-center container text-light fs-5 mt-5 mb-5">Acreditamos que o comportamento do mercado muda o tempo todo e por isso usamos a tecnologia para acompanhar a mudança em <strong className="color-2">TEMPO REAL</strong>.</h5>
      </div>
    </div>
  </div>
  )
}

export default ComoFunciona