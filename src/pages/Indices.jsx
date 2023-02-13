import SubNav from '../components/SubNav'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

function Indices() {

  return (
    <div>
      <SubNav />
      <Whatsapp />

      <div className='indices'>
        <div className='container-fluid'>
          <div className="d-flex flex-column justify-content-center">
            <h2 className='text-light m-2'>Índices Marta</h2>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Ademi</h5>
                  <p className="card-text fs-2 fw-semibold">DEZ/22</p>
                  <a target="_blank" href="http://deixacommarta.com.br/download/Indice_Marta_Ademi_PE_DEZ22_v1.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Maceió</h5>
                  <p className="card-text fs-2 fw-semibold">DEZ/22</p>
                  <a target="_blank" href="http://deixacommarta.com.br/download/Indice_Marta_AL_DEZ22_v1.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Ademi</h5>
                  <p className="card-text fs-2 fw-semibold">SET/22</p>
                  <a target="_blank" href="http://deixacommarta.com.br/download/Indice_Marta_Ademi_SET2022_202209_v1.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Ademi</h5>
                  <p className="card-text fs-2 fw-semibold">AGO/22</p>
                  <a target="_blank" href="https://deixacommarta.com.br/download/Indice_Marta_Ademi_AGO2022.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Ademi</h5>
                  <p className="card-text fs-2 fw-semibold">JUL/22</p>
                  <a target="_blank" href="https://deixacommarta.com.br/download/Indice_Marta_Ademi_JUL2022_202208.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 m-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Índice Marta/Ademi</h5>
                  <p className="card-text fs-2 fw-semibold">JUN/22</p>
                  <a target="_blank" href="https://deixacommarta.com.br/download/Indice_Marta_Ademi_JUN2022_v1_202207.pdf" className="btn download">Visualizar / Baixar</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Indices
