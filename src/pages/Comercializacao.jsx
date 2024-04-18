import Nav from "../components/Nav"
import Whatsapp from "../components/Whatsapp"
import Footer from "../components/Footer"

import icon1 from "../assets/icons/visao.svg";
import icon2 from "../assets/icons/performance.svg";
import icon3 from "../assets/icons/luz.svg";
import icon4 from "../assets/icons/dados.svg";

function Comercializacao() {

    return (
        <>
            <Nav />
            <Whatsapp />
            <div className="container comercio">
                <h2 className="fs-1 fw-bold text-center">Visão 360°</h2>

                <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-sm text-center">
                  <img width="130px" className="center" src={icon1} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Tenha uma visão completa de como os clientes acessam os seus empreendimentos.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="130px" className="center" src={icon2} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Acompanhe e compare a performance dos seus empreendimentos com a concorrência no mercado.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="130px" className="center" src={icon3} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Receba insights para aproveitar ao máximo as informações capturadas e analisadas.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="130px" className="center" src={icon4} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Crie inteligência para que os dados trabalhem para a sua incorporadora.
                  </p>
                </div>
              </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Comercializacao