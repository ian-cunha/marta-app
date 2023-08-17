import data from "../assets/data.svg";
import diretoria from "../assets/diretoria.svg";
import comercial from "../assets/comercial.svg";
import marketing from "../assets/marketing.svg";

function Conhecimento() {

  return (
    <div className="section2">
      <div className="mt-5 d-flex justify-content-center container-fluid">
        <div className="container">
          <img width="200px" className="center" src={data} alt="Art by Marta" />
          <h2 className="fw-bold text-center mt-5 color-1">Conhecimento<br /><span className="color-2">Inteligência</span></h2>
          <h5 className="text-center container fs-5 mt-5 mb-5">Com o conhecimento extraído é possível planejar e executar as melhores estratégias para alcançar os melhores resultados em todas as áreas da sua incorporadora.</h5>
          <div className="container">
            <div className="row">
              <div className="col-sm text-center">
                <img width="100px" className="center" src={diretoria} alt="Art by Marta" />
                <h6 className="fw-semibold mt-2">Diretoria</h6>
                <p className="text-icon">Decisões baseadas em dados.<br />
                  Acesso às informações do mercado.<br />
                  Empreendimentos lançados no mercado<br /> com mais confiança.
                </p>
              </div>
              <div className="col-sm text-center">
                <img width="100px" className="center" src={comercial} alt="Art by Marta" />
                <h6 className="fw-semibold mt-2">Comercial</h6>
                <p className="text-icon">Maior velocidade nas vendas.<br />
                  Time de vendas mais qualificado.<br />
                  Controle em toda a jornada do cliente.
                </p>
              </div>
              <div className="col-sm text-center">
                <img width="100px" className="center" src={marketing} alt="Art by Marta" />
                <h6 className="fw-semibold mt-2">Marketing</h6>
                <p className="text-icon">Perfil do cliente-alvo da campanha conhecido.<br />
                  Campanhas baseadas em resultados atualizados.<br />
                  Menor custo e investimento mais direcionado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conhecimento