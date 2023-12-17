import Titulo from "../titulo/Titulo";
import './FiltroRápido.css'
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";



var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function showCheckboxes2() {
    var checkboxes = document.getElementById("checkboxes2");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function filtroRápido() {
    return (
        <div className=" p-2 c-pesquisarapida">
            <h2 className="pesquisa-rapida m-4">Pesquisa rápida</h2>
            <div className="d-flex justify-content-start w-100">
                <div className="select mx-lg-4" id="c-form-tiposLimpeza">
                    <form id="Tiposlimpeza">
                        <div className="multiselect ">
                            <div className="selectBox" onClick={showCheckboxes}>
                                <select className="form-select my-2 p-2 ">
                                    <option>Tipos de Limpeza</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes">
                                <label className="label-checkbox" for="one">
                                    <input type="checkbox" id="one" />limpeza residencial</label>
                                <label className="label-checkbox" for="two">
                                    <input type="checkbox" id="two" />limpeza interna</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />limpeza completa</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="select mx-lg-4" id="c-form-adicionais">
                    <form id="Adicionais">
                        <div className="multiselect ">
                            <div className="selectBox adicionais" onClick={showCheckboxes2}>
                                <select className="form-select my-2 p-2">
                                    <option >Adicionais</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes2">
                            <label className="label-checkbox" for="oneform2">
                                    <input type="checkbox" id="oneform2" />Lavar louça</label>
                                <label className="label-checkbox" for="twoform2">
                                    <input type="checkbox" id="twoform2" />Passar roupa</label>
                                <label className="label-checkbox" for="threeform2">
                                    <input type="checkbox" id="threeform2" />Limpar vidros</label>
                                <label className="label-checkbox" for="fourform2">
                                    <input type="checkbox" id="fourform2" />Limpeza de janelas</label>
                                <label className="label-checkbox" for="fiveform2">
                                    <input type="checkbox" id="fiveform2" />Limpeza de eletrônicos</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex mt-4 justify-content-end">
                <span id="outrosfiltros" className="link-secondary my-4 mx-2"><MdFilterList></MdFilterList> Outros filtros</span>
                <Link to="/procuradeprofissionais"><button className="btn btn-primary my-4 mx-4">Buscar opções</button></Link>

            </div>
        </div>
    )
}

export default filtroRápido