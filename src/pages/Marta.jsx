import Nav from "../components/Nav"
import Whatsapp from "../components/Whatsapp"
import block from '../assets/frames/block.svg'
import data from '../assets/frames/data.svg'
import Footer from "../components/Footer"

function Marta() {

    return (
        <>
            <Nav />
            <Whatsapp />
            <div className="marta-block container d-flex flex-column justify-content-center align-items-center">
                <h2 className="fs-1 fw-bold">MARTA INTELIGÊNCIA</h2>
                <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center">
                    <img className="p-4" src={block} />
                    <div className="texts-marta">
                        <p>Sistêmica e completa<br/>
                        Atualizada em tempo real<br/>
                        Fortemente amparada em tecnologia e dados</p>

                        <div className="fw-semibold">
                            <p className="color-3 p-marta"><i className="bi bi-caret-left"></i> Inteligência de Mercado</p>
                            <p className="color-2 p-marta"><i className="bi bi-caret-left"></i> Inteligência para Comunicação</p>
                            <p className="color-1 p-marta"><i className="bi bi-caret-left"></i> Inteligência para a Comercialização</p>
                        </div>
                    </div>
                </div>
                <h2 className="color-3 fw-bold mt-5 mb-5">#DEIXACOMMARTA</h2>
            </div>
            <Footer />
        </>
    )
}

export default Marta