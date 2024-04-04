import Nav from "../components/Nav"
import Whatsapp from "../components/Whatsapp"
import Footer from "../components/Footer"
import data from '../assets/frames/data.svg'

function Mercado() {

    return (
        <>
            <Nav />
            <Whatsapp />
            <div className="marta-block container d-flex flex-column justify-content-center align-items-center mb-5">
                <h2>COMPORTAMENTO DO MERCADO</h2>
                <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center mt-4">
                    <div className="row align-mercado">
                        <h4>Como as construtoras e incorporadoras capturam dados do mercado (oferta e demanda) para auxiliar as suas:
                            <br/><b className="color-2 fs-2">TOMADAS DE DECISÃO?</b>
                        </h4>
                    </div>
                    <div className="row bg-mercado pt-3">
                        <p className="fw-bold">FORÇA BRUTA.</p>
                        <p className="fw-bold">AGENTES DO MERCADO.</p>
                        <p className="fw-bold">PESQUISAS DE MERCADO.</p>
                    </div>
                </div>
                <img className="img-data" src={data} />
            </div>
            <Footer />
        </>
    )
}

export default Mercado