
import beneficio1 from "../assets/beneficio1.svg";
import beneficio2 from "../assets/beneficio2.svg";
import beneficio3 from "../assets/beneficio3.svg";
import beneficio4 from "../assets/beneficio4.svg";
import benef1 from "../assets/benef1.svg";
import benef2 from "../assets/benef2.svg";
import benef3 from "../assets/benef3.svg";
import benef4 from "../assets/benef4.svg";
import benef5 from "../assets/benef5.svg";
import benef6 from "../assets/benef6.svg";

function Beneficios() {

  return (
    <>
      <div className="section2">
        <div className="d-flex justify-content-center container-fluid">
          <div className="container">
            <h2 className="fw-bold fs-1 text-center mt-5 color-1">Benefícios</h2>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio1} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Tenha uma visão completa de como os clientes acessam os seus empreendimentos.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio2} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Receba insights para aproveitar ao máximo as informações capturadas e analisadas.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio3} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Acompanhe e compare a performance dos seus empreendimentos com a concorrência no mercado.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio4} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Crie inteligência para que os dados trabalhem para a sua incorporadora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="container">
          <h2 className="fw-bold text-center color-1 pt-5">Marta não é o destino. Marta é o caminho.</h2>
          <div className="container mt-5">
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef1} alt="Art by Marta" />
                <p className="text-icon m-2">Time de Marta responsável por manter os dados atualizados e trabalhar em conjunto com a equipe da incorporadora.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef2} alt="Art by Marta" />
                <p className="text-icon m-2">Gerar inteligência através da análise dos dados para auxiliar na tomada de decisão pela diretoria, marketing, comercial e vendas.
                </p>
              </div>
            </div>
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef3} alt="Art by Marta" />
                <p className="text-icon m-2">Organização do conhecimento da incorporadora, mercado (oferta e demanda), clientes, jornada, e força de vendas.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef4} alt="Art by Marta" />
                <p className="text-icon m-2">Transparência e visibilidade total no acompanhamento do atendimento, e em toda a jornada de compra do cliente.
                </p>
              </div>
            </div>
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef5} alt="Art by Marta" />
                <p className="text-icon m-2">Ferramentas para analisar todos os dados e entender o comportamento das informações coletadas e agrupadas.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef6} alt="Art by Marta" />
                <p className="text-icon m-2">Informação sobre os agentes imobiliários locais, construção dos parceiros comerciais e gestão da força de vendas just-in-time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 id="numeros" className="fs-1 pb-5 fw-bold mt-5 text-center color-3">#deixacommarta</h2>
      </div>
    </>
  )
}

export default Beneficios