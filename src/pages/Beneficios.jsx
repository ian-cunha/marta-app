import Nav from "../components/Nav"
import Whatsapp from "../components/Whatsapp"
import Footer from "../components/Footer"
import BeneficiosComp from "../components/BeneficiosComp"

function Beneficios() {

    return (
        <>
            <Nav />
            <Whatsapp />
            <div className="mt-5">
                <BeneficiosComp />
            </div>
            <Footer />
        </>
    )
}

export default Beneficios