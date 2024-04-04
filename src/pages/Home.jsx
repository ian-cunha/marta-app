import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp';
import Clientes from "../components/Clientes";
import Numeros from "../components/Numeros";
import Sobre from "../components/Sobre";
import Beneficios from "../components/BeneficiosComp";
import ComoFunciona from "../components/ComoFunciona";
import InteligenciaImobiliaria from "../components/InteligenciaImobiliaria";
import Conhecimento from "../components/Conhecimento";
import Proposito from '../components/Proposito';
import Topo from '../components/Topo';

function Home() {

  return (
    <>
      <Nav />
      <Whatsapp />
      <Topo />
      <Sobre />
      <Proposito />
      <Numeros />
      <Clientes />
      <Footer />
    </>
  )
}

export default Home