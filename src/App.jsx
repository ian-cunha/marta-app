import './App.css'
import logoMarta from "./assets/logoMarta.svg";
import about from "./assets/about.svg";
import porto from "./assets/porto.svg";
import inovativa from "./assets/inovativa.svg";
import scaleup from "./assets/scaleup.svg";
import farm from "./assets/farm.svg";
import superjobs from "./assets/superjobs.svg";
import softex from "./assets/softex.svg";
import grafdesktop from "./assets/graf-desktop.svg";
import data from "./assets/data.svg";
import diretoria from "./assets/diretoria.svg";
import comercial from "./assets/comercial.svg";
import marketing from "./assets/marketing.svg";
import anos from "./assets/20anos.svg";
import cubo from "./assets/cubo.svg";
import trade from "./assets/trade.svg";
import beneficio1 from "./assets/beneficio1.svg";
import beneficio2 from "./assets/beneficio2.svg";
import beneficio3 from "./assets/beneficio3.svg";
import beneficio4 from "./assets/beneficio4.svg";
import benef1 from "./assets/benef1.svg";
import benef2 from "./assets/benef2.svg";
import benef3 from "./assets/benef3.svg";
import benef4 from "./assets/benef4.svg";
import benef5 from "./assets/benef5.svg";
import benef6 from "./assets/benef6.svg";
import expoimovel from "./assets/expoimovel.svg";
import ademiimoveis from "./assets/ademiimoveis.svg";
import ademipe from "./assets/ademi-pe.svg";

function App() {

  return (
    <div className="App">

      <main>
        <nav class="navbar fixed-top navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img width="120px" class="d-inline-block align-text-top" src={logoMarta} alt="Marta" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Página inicial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#marta">A Marta</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#como-funciona">Como funciona?</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#numeros">Números</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#parceiros">Parceiros</a>
                </li>
              </ul>
              <a class="login nav-link fw-bold" target="_blank" href="https://app.deixacommarta.com.br/">Login <i class="bi bi-box-arrow-in-right"></i></a>
            </div>
          </div>
        </nav>
      </main>

      <div class="masthead">
        <div class="container d-flex w-100 h-100 align-items-center">
          <div class="mobile">
            <h1 class="fs-1 fw-bold">Informação e inteligência Imobiliária <span>acessível e em <strong class="color-2">tempo real</strong>.</span></h1>
            <h4>Crie times espetaculares, atenda o cliente com excelência, aprenda com a jornada, e feche mais vendas.</h4></div>
        </div>
      </div>

      <div id="marta" class="about-section">
        <img width="100%" class="d-inline-block align-text-top" src={about} alt="Sobre Marta" />
        <div class="d-flex justify-content-center container-fluid">
          <div>
            <h2 class="fw-bold text-center mt-4">A Marta</h2>
            <p class="color-3 mb-3 fs-1 fw-semibold text-center">#MARTALEVELUP</p>
            <h6 class="justify container fs-5 mb-5">Nascida em 2018, Marta é uma startup em plena fase de crescimento que vem movimentando a era da inteligência imobiliária. Seus fundadores vem de mais de duas décadas de atuação em tecnologia para o mercado imobiliário, estando à frente de portal imobiliário, CRM e outros serviços digitais. Marta chega então já cheia de bagagem, por isso sua trajetória, embora curta, já apresenta uma curva acentuada de desenvolvimento. Em dois anos, a empresa passou por acelerações e rodadas de investimentos, resultando em números e parcerias cada vez mais promissoras.</h6>
          </div>
        </div>
        <div class="d-flex text-center justify-content-center align-items-center bg-2 w-100 pt-4 overflow-auto">
          <div class="row m-2">
            <div class="col-sm">
              <img width="100px" class="pb-4" src={porto} alt="Porto Digital" />
            </div>
            <div class="col-sm">
              <img width="100px" class="pb-4" src={inovativa} alt="Inovativa" />
            </div>
            <div class="col-sm">
              <img width="100px" class="pb-4" src={farm} alt="Startup Farm" />
            </div>
          </div>
          <div class="row m-2">
            <div class="col-sm">
              <img width="100px" class="pb-4" src={scaleup} alt="Scale UP" />
            </div>
            <div class="col-sm">
              <img width="100px" class="pb-4" src={superjobs} alt="Superjobs" />
            </div>
            <div class="col-sm">
              <img width="100px" class="pb-4" src={softex} alt="Softex" />
            </div>
          </div>
        </div>
      </div>

      <div class="how-section">
        <div class="d-flex justify-content-center container-fluid">
          <div class="container">
            <img width="200px" class="center mt-5" src={anos} alt="Art by Marta" />
            <h5 class="text-center container text-light fs-5 mt-5 mb-5">Marta coleta e analisa dados de um ecossistema que tem mais de 20 anos de experiência construindo soluções para o mercado imobiliário. Durante todo esse tempo, monitoramos milhões de atividades de clientes interessados em imóveis, e informações detalhadas de centenas de milhares de empreendimentos e imóveis do mercado.
            </h5>
            <h3 class="text-center container color-2 fs-4 fw-bold mt-5 mb-5">Nosso propósito é transformar dados em conhecimento e inteligência para tomada de ação estratégica pelas incorporadoras e construtoras.
            </h3>
          </div>
        </div>
        <div id="como-funciona"></div>
      </div>

      <div class="how-section">
        <div class="pt-5 d-flex justify-content-center container-fluid">
          <div class="container">
            <h2 class="fw-bold fs-1 text-light text-center mt-5 mb-5">Como funciona?</h2>
            <img width="100%" class="d-inline-block align-text-top" src={grafdesktop} alt="Art by Marta" />
            <h5 class="text-center container text-light fs-5 mt-5 mb-5">Acreditamos que o comportamento do mercado muda o tempo todo e por isso usamos a tecnologia para acompanhar a mudança em <strong class="color-2">TEMPO REAL</strong>.</h5>
          </div>
        </div>
      </div>

      <div class="how-section2">
        <div class="mt-5 d-flex justify-content-center container-fluid">
          <div class="container">
            <img width="200px" class="center" src={data} alt="Art by Marta" />
            <h2 class="fw-bold text-center mt-5 color-1">Conhecimento<br /><span class="color-2">Inteligência</span></h2>
            <h5 class="text-center container fs-5 mt-5 mb-5">Com o conhecimento extraído é possível planejar e executar as melhores estratégias para alcançar os melhores resultados em todas as áreas da sua incorporadora.</h5>
            <div class="container">
              <div class="row">
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={diretoria} alt="Art by Marta" />
                  <h6 class="fw-semibold mt-2">Diretoria</h6>
                  <p class="text-icon">Decisões baseadas em dados.<br />
                    Acesso às informações do mercado.<br />
                    Empreendimentos lançados no mercado<br /> com mais confiança.
                  </p>
                </div>
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={comercial} alt="Art by Marta" />
                  <h6 class="fw-semibold mt-2">Comercial</h6>
                  <p class="text-icon">Maior velocidade nas vendas.<br />
                    Time de vendas mais qualificado.<br />
                    Controle em toda a jornada do cliente.
                  </p>
                </div>
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={marketing} alt="Art by Marta" />
                  <h6 class="fw-semibold mt-2">Marketing</h6>
                  <p class="text-icon">Perfil do cliente-alvo da campanha conhecido.<br />
                    Campanhas baseadas em resultados atualizados.<br />
                    Menor custo e investimento mais direcionado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how-section2">
        <div class="mt-5 d-flex justify-content-center container-fluid">
          <div class="container">
            <h2 class="fw-bold mb-4 text-center mt-5 color-1">INTELIGÊNCIA<br />IMOBILIÁRIA</h2>
            <div class="d-flex justify-content-evenly align-items-center flex-sm-row flex-column mb-5">
              <div>
                <img width="250px" class="center" src={cubo} alt="Art by Marta" />
              </div>
              <div>
                <h2 class="fw-bold fs-4 mt-5 color-1">Agentes<br /><span class="color-3">Empreendimentos</span><br /><span class="color-2">Clientes e Jornada de Compra</span></h2>
                <ul class="list-group list-group-flush list-group-numbered fw-semibold mt-2 mb-5">
                  <li class="list-group-item">Sistêmica e completa</li>
                  <li class="list-group-item">Atualizada em tempo real</li>
                  <li class="list-group-item">Fortemente amparada em tecnologia e dados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how-section4">
        <div class="d-flex justify-content-center container-fluid">
          <div class="container">
            <h2 class="fw-bold fs-1 text-center mt-5 color-3">Benefícios</h2>
            <div class="container mt-5">
              <div class="row">
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={beneficio1} alt="Art by Marta" />
                  <p class="text-icon fs-6 mt-2">Tenha uma visão completa de como os clientes acessam os seus empreendimentos.
                  </p>
                </div>
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={beneficio2} alt="Art by Marta" />
                  <p class="text-icon fs-6 mt-2">Receba insights para aproveitar ao máximo as informações capturadas e analisadas.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={beneficio3} alt="Art by Marta" />
                  <p class="text-icon fs-6 mt-2">Acompanhe e compare a performance dos seus empreendimentos com a concorrência no mercado.
                  </p>
                </div>
                <div class="col-sm text-center">
                  <img width="100px" class="center" src={beneficio4} alt="Art by Marta" />
                  <p class="text-icon fs-6 mt-2">Crie inteligência para que os dados trabalhem para a sua incorporadora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2 class="fw-bold text-center mt-5 color-1">Marta não é o destino. Marta é o caminho.</h2>
          <div class="container mt-5">
            <div class="row m-3">
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef1} alt="Art by Marta" />
                <p class="text-icon m-2">Time de Marta responsável por manter os dados atualizados e trabalhar em conjunto com a equipe da incorporadora.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef2} alt="Art by Marta" />
                <p class="text-icon m-2">Gerar inteligência através da análise dos dados para auxiliar na tomada de decisão pela diretoria, marketing, comercial e vendas.
                </p>
              </div>
            </div>
            <div class="row m-3">
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef3} alt="Art by Marta" />
                <p class="text-icon m-2">Organização do conhecimento da incorporadora, mercado (oferta e demanda), clientes, jornada, e força de vendas.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef4} alt="Art by Marta" />
                <p class="text-icon m-2">Transparência e visibilidade total no acompanhamento do atendimento, e em toda a jornada de compra do cliente.
                </p>
              </div>
            </div>
            <div class="row m-3">
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef5} alt="Art by Marta" />
                <p class="text-icon m-2">Ferramentas para analisar todos os dados e entender o comportamento das informações coletadas e agrupadas.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" class="center" src={benef6} alt="Art by Marta" />
                <p class="text-icon m-2">Informação sobre os agentes imobiliários locais, construção dos parceiros comerciais e gestão da força de vendas just-in-time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 id="numeros" class="fs-1 pb-5 fw-bold mt-5 text-center color-3">#deixacommarta</h2>
      </div>

      <div>
        <div class="d-flex justify-content-center container-fluid mb-5">
          <div class="container">
            <h2 class="fw-bold text-center mt-5 fs-1 color-2"><i class="bi bi-bar-chart-line"></i> Os números da Marta</h2>
            <div class="container mt-5">
              <div class="row">
                <div class="col-sm text-center">
                  <h2 class="text-icon fs-1 fw-bold color-1">+62 milhões</h2>
                  <p class="text-icon fs-6 mt-2">Vendas realizadas em Marta</p>
                </div>
                <div class="col-sm text-center">
                  <h2 class="text-icon fs-1 fw-bold color-1">+150 mil</h2>
                  <p class="text-icon fs-6 mt-2">Clientes interessados em comprar imóveis</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm text-center">
                  <h2 class="text-icon fs-1 fw-bold color-1">+150</h2>
                  <p class="text-icon fs-6 mt-2">Imobiliárias e corretores realizando atendimento</p>
                </div>
                <div class="col-sm text-center">
                  <h2 class="text-icon fs-1 fw-bold color-1">+45 milhões</h2>
                  <p class="text-icon fs-6 mt-2">Atividades imobiliárias monitoradas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how-section">
        <div id="parceiros" class="d-flex justify-content-center container-fluid">
          <div class="container">
            <h2 class="fw-bold text-center mt-5 fs-1 color-2">Parceiros</h2>
            <div class="container mt-5">
              <div class="row">
                <div class="col-sm text-center">
                  <img width="130px" class="center mb-5" src={expoimovel} alt="Expo Imovel" />
                </div>
                <div class="col-sm text-center">
                  <img width="130px" class="center mb-5" src={ademiimoveis} alt="Ademi Imoveis" />
                </div>
                <div class="col-sm text-center">
                  <img width="130px" class="center mb-5" src={ademipe} alt="Ademi PE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-dark text-light p-5">
        <div class="d-flex flex-sm-row flex-column justify-content-around align-items-center">
          <div>
            <img width="200px" class="center mt-2 mb-2" src={logoMarta} alt="Art by Marta" />
          </div>
          <div>
            <h5 class="text-center container fs-6 mt-2 mb-2">@ 2022 Marta Inteligência Imobiliária - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330 </h5>
          </div>
          <div>
            <a class="redes" target="_blank" href="https://www.instagram.com/martainteligenciaimobiliaria/"><i class="bi bi-instagram m-2 fs-1"></i></a>
            <a class="redes" target="_blank" href="https://www.linkedin.com/company/marta-inteligencia-imobiliaria"><i class="bi bi-linkedin m-2 fs-1"></i></a>
            <a class="redes" target="_blank" href="https://www.facebook.com/martainteligenciaimobiliaria"><i class="bi bi-facebook m-2 fs-1"></i></a>
          </div>
        </div>
        <p class="text-center fw-light container fs-7 mt-2 mb-2">"Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM."
          <a target="_blank" class="text-light" href="https://deixacommarta.com.br/privacidade.php"> Política de privacidade </a></p>
      </footer>

    </div>
  )
}

export default App
