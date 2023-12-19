import Titulo from "../titulo/Titulo"
import BaldeAzulimg from "./Balde-azulimg"
import BaldeBrancoimg from "./Balde-brancoimg"
import BaldePretoimg from "./Balde-pretoimg"
import BaldeCinzaimg from "./Balde-cinzaimg"
import './Cores.css'


function Cores() {
    return(
        <>
            <div className="d-flex flex-column justify-content-center align-items-center gap-4 flex-wrap">
                <Titulo content={"As Cores"}></Titulo>
                <div className="d-flex justify-content-center gap-5 flex-wrap">
                <BaldeAzulimg></BaldeAzulimg>
                <BaldePretoimg></BaldePretoimg>
                <BaldeBrancoimg></BaldeBrancoimg>
                <BaldeCinzaimg></BaldeCinzaimg>
                </div>
            </div>    

        </>
    )
}

export default Cores