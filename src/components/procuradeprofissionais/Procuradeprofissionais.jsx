import './procuradeprofissionais.css'
import Banner from '../banner/Banner'
import { motion } from 'framer-motion'
import CardPerfil from '../cardPerfil/CardPerfil'
import HomemLimpeza from '../../assets/images/procuradeprofissionais/homem-segurando-produtos-de-limpeza.png'
import React, { useState } from 'react';
import mulherLimpando from '../../assets/images/inicio/mulher-limpando-a-tela.png'
// import SearchBar from './barrapesquisa/SearchBar';
// import SearchResults from './barrapesquisa/SearchResults';

function Procuradeprofissionais() {

    var expanded = false;

    // abrindo aba dentro do offcanvas
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

    // abrindo aba dentro do offcanvas
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

    const usuarios = [
    <CardPerfil habilidade1="" />,
    <CardPerfil habilidade1=""/>,
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>, 
    <CardPerfil habilidade1=""/>
]

function filtrar() {
    var input,
    filter,
    ul,
    li,
    a,
    i,
    textValue,
    count = 0

    //pega os elementos html 
    input = document.getElementById("input-pesquisa")
    ul = document.getElementById("lista-usuarios")

    //fazer o filtro
    filter = input.value.toUppercase()

    li = ul.getElementsByTagName("motion.div ")
    console.log(li)

    //percorrer os li
    for( i = 0 ; i < li.length; i++ ){
        //PEGAR A TAG A DO ELEMENTO PERCORRIDO
        a = li[i].getElementsByTagName("a")[0];
        //PEGAR O TEXTO DENTRO DO NOSSA TAG A
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //VALOR BATEU
            li[i].style.display = "";
            //INCREMENTAR O CONTADOR
            count++
            //PEGAR A TAG SPAN DO ITEM
            span = li[i].querySelector(".item-name");
            //SE EXISTIR
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                })
            }
        } else {
            //NÃO MOSTRA O ITEM DA LISTA
            li[i].style.display = "none";
        }
    }
    
    //VERIFICANDO SE TEM ITENS NA LISTA
     if(filter ===""){ 
     ul.style.display = "none";
     }else{ 
     ul.style.display = "block";
     }

}

return (
    <>
        <Banner title="Encontre o profissional ideal" p="Encontre profissionais que tenham disponibilidade e que suas habilidades batam com suas necessidades" imagesrc={mulherLimpando}></Banner>
        <form class="d-flex container p-4">
            <div className='d-flex justify-content-start'>
                <button class=" btn-filtro px-4 mx-4 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtros</button>
            </div>

            <input id='input-pesquisa' class="form-control mx-2" type="search" placeholder="Pesquisar" aria-label="Search" />
            <button onClick={filtrar} class="btn btn-primary p-2" type="submit">Pesquisar</button>
        </form>

        {/* <div>
            <h1>Busca de Perfil e Habilidades</h1>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} />
        </div> */}



        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Concluidas</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className='d-flex flex-column form-check'>

                    <label className='aula-checkbox' htmlFor="aula1"  >
                        <input className='m-1 form-check-input' type="checkbox" name="aula1" id="aula1" />
                        <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 01</p>
                    </label>
                    <label className='aula-checkbox' htmlFor="aula2 " >
                        <input className='m-1 form-check-input' type="checkbox" name="aula2" id="aula2" />
                        <p className='d-inline fs-6 p-aula form-check-label'></p>Aula - 02
                    </label>
                    <label className='aula-checkbox' htmlFor="aula3" >
                        <input className='m-1 form-check-input' type="checkbox" name="aula3" id="aula3" />
                        <p className='d-inline fs-6 p-aula form-check-label'></p>Aula - 03
                    </label>
                    <label className='aula-checkbox' htmlFor="aula4" >
                        <input className='m-1 form-check-input' type="checkbox" name="aula4" id="aula4" />
                        <p className='d-inline fs-6 p-aula form-check-label'></p>Aula - 04
                    </label>
                    <label className='aula-checkbox' htmlFor="aula5" >
                        <input className='m-1 form-check-input' type="checkbox" name="aula5" id="aula5" />
                        <p className='d-inline fs-6 p-aula form-check-label'></p>Aula - 05
                    </label>
                    <label className='aula-checkbox' htmlFor="aula6">
                        <input className='m-1 form-check-input' type="checkbox" name="aula6" id="aula6" />
                        <p className='d-inline fs-6 p-aula form-check-label'>Aula - 06</p>
                    </label>

                    <form id="Tiposlimpeza">
                        <div className="multiselect ">
                            <div className="selectBox" onClick={showCheckboxes}>
                                <select className="form-select my-2 p-2 ">
                                    <option>Tipos de Limpeza</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes">
                                <label className="label-checkbox" htmlFor="one">
                                    <input type="checkbox" id="one" />limpeza residencial</label>
                                <label className="label-checkbox" htmlFor="two">
                                    <input type="checkbox" id="two" />limpeza interna</label>
                                <label className="label-checkbox" for="three">
                                    <input type="checkbox" id="three" />limpeza completa</label>
                            </div>
                        </div>
                    </form>

                    <form id="Tiposlimpeza">
                        <div className="multiselect ">
                            <div className="selectBox" onClick={showCheckboxes2}>
                                <select className="form-select my-2 p-2 ">
                                    <option>Tipos de Limpeza</option>
                                </select>
                                <div className="overSelect"></div>
                            </div>
                            <div id="checkboxes2">
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

            </div>
        </div>

        <div id='lista-usuarios' className='d-flex flex-wrap w-100 p-4'>
            {usuarios.map(usuarios => (
                <motion.div className="cards-wrapper m-2" key={usuarios}>
                    {usuarios}
                </motion.div>
            ))}
        </div>
    </>
)

    }



   

export default Procuradeprofissionais