import SubNav from '../components/SubNav'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import indiceJSON from "/public/indice.json"

function Indices() {

  $(document).ready(function () {
    $("#filterIndice").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#indices div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  return (
    <div>
      <SubNav />
      <Whatsapp />

      <div className='indices'>
        <div className='container-fluid'>
          <div className="d-flex flex-column justify-content-center">

            <div className='container' id='indices'>
              <div className='row'>

              <h2 className='text-light m-2'>Índices Marta</h2>
              <input className="form-control pt-3 pb-3 mb-2 mt-2" id="filterIndice" type="text" placeholder="Pesquise" />

                {indiceJSON && indiceJSON.map(({ nome, estado, data, url }) => (
                  <div className="col-sm-4 mt-2 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{nome} - {estado}</h5>
                        <p className="card-text fs-2 fw-semibold">{data}</p>
                        <a target="_blank" href={url} className="btn download">Visualizar / Baixar</a>
                      </div>
                    </div>
                  </div>
                ))}

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
