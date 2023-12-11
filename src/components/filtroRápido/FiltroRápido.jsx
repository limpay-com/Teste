import Titulo from "../titulo/Titulo";
import './FiltroRápido.css'
import { MdFilterList } from "react-icons/md";



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
        <div className="bg-light p-2 c-pesquisarapida">
            <h2 className="pesquisa-rapida">Pesquisa rápida</h2>
            <div className="d-flex justify-content-start gap-">
                <div className="select mx-2 mx-lg-4">
                    <label htmlFor="Tipos de Limpeza ">Tipos de Limpeza</label>
                    <form>
                        <div className="multiselect ">
                            <div className="selectBox" onClick={showCheckboxes}>
                                <select className="form-select my-2 p-2 ">
                                    <option>Tipos de Limpeza</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes">
                                <label className="label-checkbox" for="one">
                                    <input type="checkbox" id="one" />First checkbox</label>
                                <label className="label-checkbox" for="two">
                                    <input type="checkbox" id="two" />Second checkbox</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />Third checkbox</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="select mx-2 mx-lg-4">
                    <label htmlFor="Tipos de Limpeza" className="adicionais">Adicionais</label>
                    <form>
                        <div className="multiselect ">
                            <div className="selectBox adicionais" onClick={showCheckboxes2}>
                                <select className="form-select  my-2 p-2">
                                    <option >Adicionais</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes2">
                            <label className="label-checkbox" for="one">
                                    <input type="checkbox" id="one" />Lavar louça</label>
                                <label className="label-checkbox" for="two">
                                    <input type="checkbox" id="two" />Passar roupa</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />Limpar vidros</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />Limpeza de janelas</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />Limpeza de eletrônicos</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex mt-4 justify-content-end">
                <span id="outrosfiltros" className="link-secondary my-4 mx-2"><MdFilterList></MdFilterList> Outros filtros</span>
                <button className="btn btn-primary my-4 mx-4">Buscar opções</button>

            </div>
        </div>
    )
}

export default filtroRápido