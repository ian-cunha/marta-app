import uchoa from "../assets/uchoaemp.svg";
import harmony from "../assets/harmony.svg";
import valedoave from "../assets/valedoave.svg";
import asla from "../assets/aslaengenharia.svg";
import ironhouse from "../assets/ironhouse.svg";
import tolive from "../assets/tolive.svg";
import albatroz from "../assets/albatroz.svg";
import malus from "../assets/malus.svg";
import gptropical from "../assets/gptropical.svg";
import torreao from "../assets/torreaoVillarim.svg";
import grupogp from "../assets/grupogp.svg";
import fck from "../assets/fck.svg";
import ciel from "../assets/ciel.svg";
import eco from "../assets/eco.svg";

function Clientes() {

  return (
    <div className="section">
      <div id="clientes" className="d-flex justify-content-center container-fluid">
        <div className="container">
          <h2 className="fw-bold text-center mt-5 fs-1 color-2">Clientes</h2>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm text-center d-flex justify-content-center container-fluid">
                <img width="130px" className="center mb-5" src={valedoave} alt="Vale do Ave" />
              </div>
              <div className="col-sm text-center">
                <img width="130px" height="60px" className="center mb-5" src={harmony} alt="Harmony Empreendimentos" />
              </div>
              <div className="col-sm text-center">
                <img width="130px" className="center mb-5" src={uchoa} alt="Uchôa Construções" />
              </div>
              <div className="col-sm text-center">
                <img width="150px" className="center mb-5" src={asla} alt="Asla Engenharia" />
              </div>
              <div className="col-sm text-center">
                <img width="130px" className="center mb-5" src={malus} alt="Malus Construções e Incorporações" />
              </div>
              <div className="col-sm text-center">
                <img width="100px" className="center mb-5" src={ironhouse} alt="Iron House Grupo Conêlio Brennand" />
              </div>
              <div className="col-sm text-center">
                <img width="150px" className="center mb-5" src={tolive} alt="Tolive Incorporadora" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center">
                <img width="130px" className="center mb-5" src={albatroz} alt="Construtora Albatroz" />
              </div>
              <div className="col-sm text-center">
                <img width="200px" className="center mb-5" src={gptropical} alt="Grupo Tropical" />
              </div>
              <div className="col-sm text-center">
                <img width="200px" className="center mb-5" src={torreao} alt="Torreão Villarim" />
              </div>
              <div className="col-sm text-center">
                <img width="150px" className="center mb-5" src={grupogp} alt="Grupo GP" />
              </div>
              <div className="col-sm text-center">
                <img width="150px" className="center mb-5" src={fck} alt="FCK Engenharia" />
              </div>
              <div className="col-sm text-center">
                <img width="150px" className="center mb-5" src={ciel} alt="Ciel Engenharia" />
              </div>
              <div className="col-sm text-center">
                <img width="100px" className="center mb-5" src={eco} alt="Eco Construções" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clientes