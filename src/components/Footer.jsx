import logoMarta from "../assets/logoMarta.svg";

function Footer() {
  
  return (
    <footer className="bg-5 text-light p-5">
      <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center">
        <div>
          <img width="200px" className="center mt-2 mb-2" src={logoMarta} alt="Art by Marta" />
        </div>
        <div>
          <h5 className="text-center container fs-6 mt-2 mb-2">@ 2022 Marta Inteligência Imobiliária - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330 </h5>
        </div>
        <div>
          <a className="redes" target="_blank" href="https://www.instagram.com/martainteligenciaimobiliaria/"><i className="bi bi-instagram m-2 fs-1"></i></a>
          <a className="redes" target="_blank" href="https://www.linkedin.com/company/marta-inteligencia-imobiliaria"><i className="bi bi-linkedin m-2 fs-1"></i></a>
          <a className="redes" target="_blank" href="https://www.facebook.com/martainteligenciaimobiliaria"><i className="bi bi-facebook m-2 fs-1"></i></a>
        </div>
      </div>
      <p className="text-center fw-light container fs-7 mt-2 mb-2">"Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM."
        <a target="_blank" className="text-light" href="https://deixacommarta.com.br/privacidade.php"> Política de privacidade </a></p>
    </footer>
  )
}

export default Footer