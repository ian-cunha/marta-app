import Nav from "../components/Nav"
import Whatsapp from "../components/Whatsapp"
import Footer from "../components/Footer"

function OfertaEDemanda() {

    return (
        <>
            <Nav />
            <Whatsapp />
            <div className="marta-block2 container d-flex flex-column justify-content-center align-items-center mb-5">
                <h2 className="fs-1 fw-bold">OFERTA & DEMANDA</h2>
                <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center mt-4">
                    <div>
                        <h2>+25 mil</h2>
                        <p>unidades a venda (mercado primário)</p>
                    </div>
                    <div>
                        <h2>+14,0 bilhões</h2>
                        <p>VGV de unidade a venda.</p>
                    </div>
                </div>
                <div>
                    <h2>Serviços</h2>
                    <ul>
                        <li>Atualização e analise de dados</li>
                        <li>Analise e entendimento dos comportamentos</li>
                    </ul>
                    <h2>Tecnologias</h2>
                    <ul>
                        <li>Plataforma de gestão</li>
                        <li>Inteligência computacional</li>
                        <li>Enriquecimento dos dados</li>
                    </ul>
                </div>
                <div className="bg-od">
                    <div className="container p-3 text-light">
                        <h2>Informação como serviço</h2>
                        <p>Tecnologia não é tudo</p>
                        <p>Informação entregue em todos os formatos que as pessoas fazem a incorporadora/construtora são acostumadas a consumir:</p>
                        <h2 className="h2-oed color-2 fw-bold">Plataforma<br />
                            Digital<br />
                            Físico</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OfertaEDemanda