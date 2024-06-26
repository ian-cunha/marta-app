import search from '../assets/frames/search.svg'
import whitelogo from '../assets/white-logo.svg'

function Topo() {

  return (
    <div className="masthead">
      <div className="container d-flex flex-sm-row flex-column w-100 h-100 align-items-center">
        <h1 className="p-2 text-light text-h1">Informação e inteligência Imobiliária, acessível e em  <strong className="color-2">tempo real</strong>.</h1>
        <img className='icon-search' src={search} />
      </div>
      <div id="marta"></div>
    </div>
  )
}

export default Topo