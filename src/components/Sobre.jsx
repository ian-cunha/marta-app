
import porto from "../assets/porto.svg";
import inovativa from "../assets/inovativa.svg";
import scaleup from "../assets/scaleup.svg";
import farm from "../assets/farm.svg";
import superjobs from "../assets/superjobs.svg";
import softex from "../assets/softex.svg";

function Sobre() {

  return (
    <div className="about-section mt-5">
      <div className="d-flex justify-content-center container-fluid">
        <div>
          <p className="color-3 mb-3 fs-1 fw-semibold text-center">#MARTALEVELUP</p>
          <h6 className="justify container fs-5 mb-5">Nascida em 2018, Marta é uma startup em plena fase de crescimento que vem movimentando a era da inteligência imobiliária. Seus fundadores vem de mais de duas décadas de atuação em tecnologia para o mercado imobiliário, estando à frente de portal imobiliário, CRM e outros serviços digitais. Marta chega então já cheia de bagagem, por isso sua trajetória, embora curta, já apresenta uma curva acentuada de desenvolvimento. Em dois anos, a empresa passou por acelerações e rodadas de investimentos, resultando em números e parcerias cada vez mais promissoras.</h6>
        </div>
      </div>
      <div className="d-flex text-center justify-content-center align-items-center bg-2 w-100 pt-4 overflow-auto">
        <div className="row m-2">
          <div className="col-sm">
            <img width="100px" className="pb-4" src={porto} alt="Porto Digital" />
          </div>
          <div className="col-sm">
            <img width="100px" className="pb-4" src={inovativa} alt="Inovativa" />
          </div>
          <div className="col-sm">
            <img width="100px" className="pb-4" src={farm} alt="Startup Farm" />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-sm">
            <img width="100px" className="pb-4" src={scaleup} alt="Scale UP" />
          </div>
          <div className="col-sm">
            <img width="100px" className="pb-4" src={superjobs} alt="Superjobs" />
          </div>
          <div className="col-sm">
            <img width="100px" className="pb-4" src={softex} alt="Softex" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre