import "agenda.css"

var text26 = document.getElementById("text26");
if (text26) {
    text26.addEventListener("click", function (e) {
        // Add your code here
    });
}

function agenda() {
    return(
        <div class="agenda">
        <div class="navbar">
            <div class="navbar-child">
            </div>
            <div class="frame-parent">
                <div class="incio-parent">
                    <div class="incio">Início</div>
                    <div class="educacional">Educacional</div>
                    <div class="quem-somos">Quem somos</div>
                    <div class="suporte">Suporte</div>
                </div>
                <div class="solaruser-circle-outline-parent">
                    <img class="solaruser-circle-outline-icon" alt="" src="solar:user-circle-outline.svg"/>
                    <div class="ol-alexandre-meu-perfil-parent">
                        <div class="ol-alexandre-meu-container">
                            <p class="ol-alexandre">olá, Alexandre</p>
                            <p class="ol-alexandre">Meu perfil</p>
                        </div>
                        <img class="vector-icon" alt="" src="Vector.svg"/>
                    </div>
                </div>
            </div>
            <img class="group-icon" alt="" src="Group.svg"/>
        </div>
        <b class="agenda1">
            <p class="agenda2">AGENDA </p>
            <p class="blank-line">
                <span>
                    <span>&nbsp;</span>
                </span>
            </p>
            <p class="agenda2">
                <span>
                    <span>&nbsp;</span>
                </span>
            </p>
            <p class="ol-alexandre">
                <span>
                    <span>&nbsp;</span>
                </span>
            </p>
        </b>
        <div class="ol-alexandre-aqui-container">
            <p class="aqui-voc-poder">Olá Alexandre,</p>
            <p class="aqui-voc-poder">Aqui você poderá configurar a sua agenda e a área onde deseja trabalhar.</p>
            <p class="ol-alexandre">&nbsp;</p>
        </div>
        <div class="selecione-seus-dias">Selecione seus dias de trabalho </div>
        <div class="calendrio">
            <div class="calendrio1">
                <div class="calendrio-child">
                </div>
            </div>
            <div class="dias">
                <div class="div">3</div>
                <div class="div1">
                    <p class="ol-alexandre">10</p>
                </div>
                <div class="div2">
                    <p class="ol-alexandre">17</p>
                </div>
                <div class="div3">
                    <p class="ol-alexandre">24</p>
                </div>
                <div class="div4">
                    <p class="ol-alexandre">31</p>
                </div>
                <div class="div5">4</div>
                <div class="div6">11</div>
                <div class="div7">18</div>
                <div class="div8">25</div>
                <div class="div9">
                    <p class="ol-alexandre">5</p>
                </div>
                <div class="div10">12</div>
                <div class="div11">19</div>
                <div class="div12">26</div>
                <div class="div13">
                    <p class="ol-alexandre">6</p>
                </div>
                <div class="div14">13</div>
                <div class="div15">20</div>
                <div class="div16">27</div>
                <div class="div17">
                    <p class="ol-alexandre">7</p>
                </div>
                <div class="div18">14</div>
                <div class="div19">21</div>
                <div class="div20">28</div>
                <div class="div21">
                    <p class="ol-alexandre">1</p>
                </div>
                <div class="div22">8</div>
                <div class="div23">15</div>
                <div class="div24">22</div>
                <div class="div25">29</div>
                <div class="div26" id="text26">2</div>
                <div class="div27">9</div>
                <div class="div28">16</div>
                <div class="div29">23</div>
                <div class="div30">30</div>
            </div>
            <div class="dias-da-semana">
                <div class="dom">DOM</div>
                <div class="seg">SEG</div>
                <div class="ter">TER</div>
                <div class="qua">QUA</div>
                <div class="qui">QUI</div>
                <div class="sex">SEX</div>
                <div class="sab">SAB</div>
            </div>
        </div>
        <div class="dezembro-2023-parent">
            <div class="dezembro-2023">DEZEMBRO 2023</div>
            <div class="div31">&gt;</div>
            <div class="div32">&gt;</div>
        </div>
        <div class="horrio-disponvel-wrapper">
            <div class="horrio-disponvel">HORÁRIO DISPONÍVEL</div>
        </div>
        <div class="distncia-wrapper">
            <div class="horrio-disponvel">DISTÂNCIA</div>
        </div>
        <div class="checks-parent">
            <div class="checks">
                <div class="label">Manhã - 06h às 12h </div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="checks-group">
            <div class="checks">
                <div class="label">Até 10km</div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="checks-container">
            <div class="checks">
                <div class="label">Tarde - 12h às 18h </div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="group-div">
            <div class="checks">
                <div class="label">Até 20km</div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="checks-parent1">
            <div class="checks4">
                <div class="label">Noite - 18h às 24h </div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="checks-parent2">
            <div class="checks4">
                <div class="label">Até 30km</div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="checks-parent3">
            <div class="checks">
                <div class="label">Madrugada - 24h às 06h </div>
            </div>
            <div class="group-child">
            </div>
        </div>
        <div class="input-default-wrapper">
            <div class="input-default">
                <div class="start-adornment">
                </div>
                <div class="insira-a-distncia">Insira a distância desejada</div>
                <div class="end-adornment">
                </div>
                <div class="start-adornment">
                </div>
            </div>
        </div>
        <div class="salvar-wrapper">
            <button>
                <div class="salvar">
                    Salvar</div>
            </button>
        </div>
        <div class="cancelar-alteraes-wrapper">
            <div class="salvar">Cancelar alterações</div>
        </div>
        <img class="agenda-child" alt="" src="Ellipse 109.svg"/>
    </div>
    )
}

export default agenda