import porto from "../assets/porto.svg";
import inovativa from "../assets/inovativa.svg";
import scaleup from "../assets/scaleup.svg";
import farm from "../assets/farm.svg";
import superjobs from "../assets/superjobs.svg";
import softex from "../assets/softex.svg";
import grafdesktop from "../assets/graf-desktop.svg";
import data from "../assets/data.svg";
import diretoria from "../assets/diretoria.svg";
import comercial from "../assets/comercial.svg";
import marketing from "../assets/marketing.svg";
import anos from "../assets/20anos.svg";
import cubo from "../assets/cubo.svg";
import beneficio1 from "../assets/beneficio1.svg";
import beneficio2 from "../assets/beneficio2.svg";
import beneficio3 from "../assets/beneficio3.svg";
import beneficio4 from "../assets/beneficio4.svg";
import benef1 from "../assets/benef1.svg";
import benef2 from "../assets/benef2.svg";
import benef3 from "../assets/benef3.svg";
import benef4 from "../assets/benef4.svg";
import benef5 from "../assets/benef5.svg";
import benef6 from "../assets/benef6.svg";
import expoimovel from "../assets/expoimovel.svg";
import ademipe from "../assets/ademi-pe.svg";
import uchoa from "../assets/uchoaemp.svg";
import harmony from "../assets/harmony.svg";
import valedoave from "../assets/valedoave.svg";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp';

function Home() {

  return (
    <div>

      <Nav />
      <Whatsapp />

      <div className="masthead">
        <div className="container d-flex w-100 h-100 align-items-center">
          <div className="mobile">
            <h1 className="fs-1 fw-bold p-2">Informação e inteligência para o mercado imobiliário acessível e em <strong className="color-2">tempo real</strong>.</h1>
            <h4 className="p-2">Nós criamos inteligência sobre o mercado imobiliário, utilizando dados de um ecossistema cada vez maior e mais conectado, para auxiliar na tomada de decisões mais acertadas pelas melhores incorporadoras e construtoras.</h4></div>
        </div>
        <div id="marta"></div>
      </div>

      <div className="about-section mt-5">
        <div className="d-flex justify-content-center container-fluid">
          <div>
            <p className="color-3 mb-3 fs-1 fw-semibold text-center">#MARTALEVELUP</p>
            <h6 className="justify container fs-5 mb-5">Nascida em 2018, Marta é uma startup em plena fase de crescimento que vem movimentando a era da inteligência imobiliária. Seus fundadores vem de mais de duas décadas de atuação em tecnologia para o mercado imobiliário, estando à frente de portal imobiliário, CRM e outros serviços digitais. Marta chega então já cheia de bagagem, por isso sua trajetória, embora curta, já apresenta uma curva acentuada de desenvolvimento. Em dois anos, a empresa passou por acelerações e rodadas de investimentos, resultando em números e parcerias cada vez mais promissoras.</h6>
          </div>
        </div>
        <div className="d-flex text-center justify-content-center align-items-center bg-2 w-100 pt-4 overflow-auto">
          <div className="row m-2">
            <div className="col-sm">
              <img width="100px" className="pb-4" src={porto} alt="Porto Digital" />
            </div>
            <div className="col-sm">
              <img width="100px" className="pb-4" src={inovativa} alt="Inovativa" />
            </div>
            <div className="col-sm">
              <img width="100px" className="pb-4" src={farm} alt="Startup Farm" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-sm">
              <img width="100px" className="pb-4" src={scaleup} alt="Scale UP" />
            </div>
            <div className="col-sm">
              <img width="100px" className="pb-4" src={superjobs} alt="Superjobs" />
            </div>
            <div className="col-sm">
              <img width="100px" className="pb-4" src={softex} alt="Softex" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="d-flex justify-content-center container-fluid">
          <div className="container">
            <img width="160px" className="center mt-5" src={anos} alt="Art by Marta" />
            <h5 className="text-center container text-light fs-5 mt-5 mb-5">Marta coleta e analisa dados de um ecossistema que tem mais de 20 anos de experiência construindo soluções para o mercado imobiliário. Durante todo esse tempo, monitoramos milhões de atividades de clientes interessados em imóveis, e informações detalhadas de centenas de milhares de empreendimentos e imóveis do mercado.
            </h5>
            <h3 className="text-center container color-2 fs-4 fw-bold mt-5 mb-5">Nosso propósito é transformar dados em conhecimento e inteligência para tomada de ação estratégica pelas incorporadoras e construtoras.
            </h3>
          </div>
        </div>
        <div id="como-funciona"></div>
      </div>

      <div className="section">
        <div className="pt-5 d-flex justify-content-center container-fluid">
          <div className="container">
            <h2 className="fw-bold fs-1 text-light text-center mb-5">Como funciona?</h2>
            <img width="100%" className="d-inline-block align-text-top" src={grafdesktop} alt="Art by Marta" />
            <h5 className="text-center container text-light fs-5 mt-5 mb-5">Acreditamos que o comportamento do mercado muda o tempo todo e por isso usamos a tecnologia para acompanhar a mudança em <strong className="color-2">TEMPO REAL</strong>.</h5>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="mt-5 d-flex justify-content-center container-fluid">
          <div className="container">
            <h2 className="fw-bold mb-4 text-center color-1">INTELIGÊNCIA<br />IMOBILIÁRIA</h2>
            <div className="d-flex justify-content-evenly align-items-center flex-sm-row flex-column mb-5">
              <div>
                <img width="250px" className="center" src={cubo} alt="Art by Marta" />
              </div>
              <div>
                <h2 className="fw-bold fs-4 mt-5 color-1">Agentes<br /><span className="color-3">Empreendimentos</span><br /><span className="color-2">Clientes e Jornada de Compra</span></h2>
                <ul className="list-group list-group-flush list-group-numbered fw-semibold mt-2 mb-5">
                  <li className="list-group-item">Sistêmica e completa</li>
                  <li className="list-group-item">Atualizada em tempo real</li>
                  <li className="list-group-item">Fortemente amparada em tecnologia e dados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="mt-5 d-flex justify-content-center container-fluid">
          <div className="container">
            <img width="200px" className="center" src={data} alt="Art by Marta" />
            <h2 className="fw-bold text-center mt-5 color-1">Conhecimento<br /><span className="color-2">Inteligência</span></h2>
            <h5 className="text-center container fs-5 mt-5 mb-5">Com o conhecimento extraído é possível planejar e executar as melhores estratégias para alcançar os melhores resultados em todas as áreas da sua incorporadora.</h5>
            <div className="container">
              <div className="row">
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={diretoria} alt="Art by Marta" />
                  <h6 className="fw-semibold mt-2">Diretoria</h6>
                  <p className="text-icon">Decisões baseadas em dados.<br />
                    Acesso às informações do mercado.<br />
                    Empreendimentos lançados no mercado<br /> com mais confiança.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={comercial} alt="Art by Marta" />
                  <h6 className="fw-semibold mt-2">Comercial</h6>
                  <p className="text-icon">Maior velocidade nas vendas.<br />
                    Time de vendas mais qualificado.<br />
                    Controle em toda a jornada do cliente.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={marketing} alt="Art by Marta" />
                  <h6 className="fw-semibold mt-2">Marketing</h6>
                  <p className="text-icon">Perfil do cliente-alvo da campanha conhecido.<br />
                    Campanhas baseadas em resultados atualizados.<br />
                    Menor custo e investimento mais direcionado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="d-flex justify-content-center container-fluid">
          <div className="container">
            <h2 className="fw-bold fs-1 text-center mt-5 color-1">Benefícios</h2>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio1} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Tenha uma visão completa de como os clientes acessam os seus empreendimentos.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio2} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Receba insights para aproveitar ao máximo as informações capturadas e analisadas.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio3} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Acompanhe e compare a performance dos seus empreendimentos com a concorrência no mercado.
                  </p>
                </div>
                <div className="col-sm text-center">
                  <img width="100px" className="center" src={beneficio4} alt="Art by Marta" />
                  <p className="text-icon fs-6 mt-2">Crie inteligência para que os dados trabalhem para a sua incorporadora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="container">
          <h2 className="fw-bold text-center color-1 pt-5">Marta não é o destino. Marta é o caminho.</h2>
          <div className="container mt-5">
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef1} alt="Art by Marta" />
                <p className="text-icon m-2">Time de Marta responsável por manter os dados atualizados e trabalhar em conjunto com a equipe da incorporadora.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef2} alt="Art by Marta" />
                <p className="text-icon m-2">Gerar inteligência através da análise dos dados para auxiliar na tomada de decisão pela diretoria, marketing, comercial e vendas.
                </p>
              </div>
            </div>
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef3} alt="Art by Marta" />
                <p className="text-icon m-2">Organização do conhecimento da incorporadora, mercado (oferta e demanda), clientes, jornada, e força de vendas.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef4} alt="Art by Marta" />
                <p className="text-icon m-2">Transparência e visibilidade total no acompanhamento do atendimento, e em toda a jornada de compra do cliente.
                </p>
              </div>
            </div>
            <div className="row m-3">
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef5} alt="Art by Marta" />
                <p className="text-icon m-2">Ferramentas para analisar todos os dados e entender o comportamento das informações coletadas e agrupadas.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-sm">
                <img width="100px" className="center" src={benef6} alt="Art by Marta" />
                <p className="text-icon m-2">Informação sobre os agentes imobiliários locais, construção dos parceiros comerciais e gestão da força de vendas just-in-time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 id="numeros" className="fs-1 pb-5 fw-bold mt-5 text-center color-3">#deixacommarta</h2>
      </div>

      <div>
        <div className="d-flex justify-content-center container-fluid mb-5">
          <div className="container">
            <h2 className="fw-bold text-center mt-5 fs-1 color-2"><i className="bi bi-bar-chart-line"></i> Os números da Marta</h2>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm text-center">
                  <h2 className="text-icon fs-1 fw-bold color-1">+20 anos</h2>
                  <p className="text-icon fs-6 mt-2">dados coletados e analisados.</p>
                </div>
                <div className="col-sm text-center">
                  <h2 className="text-icon fs-1 fw-bold color-1">+100 milhões</h2>
                  <p className="text-icon fs-6 mt-2">atividades imobiliárias monitoradas.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm text-center">
                  <h2 className="text-icon fs-1 fw-bold color-1">+150 mil</h2>
                  <p className="text-icon fs-6 mt-2">Imóveis e empreendimentos cadastrados.</p>
                </div>
                <div className="col-sm text-center">
                  <h2 className="text-icon fs-1 fw-bold color-1">+10 mil</h2>
                  <p className="text-icon fs-6 mt-2">Incorporadoras, corretores e imobiliárias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div id="clientes" className="d-flex justify-content-center container-fluid">
          <div className="container">
            <h2 className="fw-bold text-center mt-5 fs-1 color-2">Clientes</h2>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm text-center">
                  <img width="130px" className="center mb-5" src={ademipe} alt="Ademi PE" />
                </div>
                <div className="col-sm text-center">
                  <img width="130px" className="center mb-5" src={valedoave} alt="Vale do Ave" />
                </div>
                <div className="col-sm text-center">
                  <img width="130px" height="60px" className="center mb-5" src={harmony} alt="Harmony Empreendimentos" />
                </div>
                <div className="col-sm text-center">
                  <img width="130px" className="center mb-5" src={uchoa} alt="Uchôa" />
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

export default Home