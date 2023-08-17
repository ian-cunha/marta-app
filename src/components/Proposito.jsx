import anos from "../assets/20anos.svg";

function Proposito() {

  return (
    <div className="section">
      <div className="d-flex justify-content-center container-fluid">
        <div className="container">
          <img width="160px" className="center mt-5" src={anos} alt="Art by Marta" />
          <h5 className="text-center container text-light fs-5 mt-5 mb-5">Marta coleta e analisa dados de um ecossistema que tem mais de 20 anos de experiência construindo soluções para o mercado imobiliário. Durante todo esse tempo, monitoramos milhões de atividades de clientes interessados em imóveis, e informações detalhadas de centenas de milhares de empreendimentos e imóveis do mercado.
          </h5>
          <h3 className="text-center container color-2 fs-4 fw-bold mt-5 mb-5">Nosso propósito é transformar dados em conhecimento e inteligência para tomada de ação estratégica pelas incorporadoras e construtoras.
          </h3>
        </div>
      </div>
      <div id="como-funciona"></div>
    </div>
  )
}

export default Proposito