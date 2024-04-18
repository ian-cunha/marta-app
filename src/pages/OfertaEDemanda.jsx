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
                <div className="w-100 container d-flex flex-sm-row flex-column justify-content-center mt-4">
                    <div className="w-100">
                        <h2>+25 mil</h2>
                        <p>unidades a venda (mercado primário)</p>
                    </div>
                    <div className="w-100">
                        <h2>+14,0 bilhões</h2>
                        <p>VGV de unidade a venda.</p>
                    </div>
                </div>

                <div class="row w-100">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card bg-3">
                            <div class="card-body">
                                <h5 class="card-title fs-2">Serviços</h5>
                                <p class="card-text">Atualização e analise de dados</p>
                                <p class="card-text">Analise e entendimento dos comportamentos</p>
                                <p class="card-text">ㅤ</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card bg-3">
                            <div class="card-body">
                                <h5 class="card-title fs-2">Tecnologias</h5>
                                <p class="card-text">Plataforma de gestão</p>
                                <p class="card-text">Inteligência computacional</p>
                                <p class="card-text">Enriquecimento dos dados</p>
                            </div>
                        </div>
                    </div>
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