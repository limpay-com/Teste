import "./agendaContrato.css"

var frameContainer3 = document.getElementById("frameContainer3");
if (frameContainer3) {
	frameContainer3.addEventListener("click", function (e) {
		// Add your code here
	});
}

var frameContainer4 = document.getElementById("frameContainer4");
if (frameContainer4) {
	frameContainer4.addEventListener("click", function (e) {
		// Add your code here
	});
}

function agendaContrato() {
	return (


		<div class="agenda">
			{/* <div class="navbar">
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
						<img class="solaruser-circle-outline-icon" alt="" src="solar:user-circle-outline.svg" />

						<div class="ol-alexandre-meu-perfil-parent">
							<div class="ol-alexandre-meu-container">
								<p class="ol-alexandre">olá, Alexandre</p>
								<p class="ol-alexandre">Meu perfil</p>
							</div>
							<img class="vector-icon" alt="" src="Vector.svg" />

						</div>
					</div>
				</div>
				<img class="group-icon" alt="" src="Group.svg" />

			</div> */}
			<div class="contratos-em-espera">Contratos em espera</div>
			<div class="diaristas-parent">
				<div class="diaristas">
					<div class="diaristas">
						<img class="pacotes-icon" alt="" src="Pacotes.svg" />

						<div class="visitar-perfil">Visitar perfil</div>
						<img class="foto-icon" alt="" src="Foto.svg" />

						<div class="lapa-sp">Lapa Sp</div>
						<div class="joo-carlos">João Carlos</div>
					</div>
				</div>
				<div class="star-parent">
					<img class="group-child" alt="" src="Star 2.svg" />

					<div class="div">4.6</div>
				</div>
			</div>
			<div class="diaristas-group">
				<div class="diaristas">
					<div class="diaristas">
						<img class="pacotes-icon" alt="" src="Pacotes.svg" />

						<div class="visitar-perfil">Visitar perfil</div>
						<img class="foto-icon" alt="" src="Foto.svg" />

						<div class="lapa-sp">Lapa Sp</div>
						<div class="joo-carlos">Kleber</div>
					</div>
				</div>
				<div class="star-parent">
					<img class="group-child" alt="" src="Star 2.svg" />

					<div class="div">4.6</div>
				</div>
			</div>
			<div class="ver-contrato-wrapper" id="frameContainer3">
				<button class="button button2">Blue</button>
			</div>
			<div class="ver-contrato-wrapper" id="frameContainer3">
				<button class="button button2">Blue</button>
			</div>
			<div class="cancela-wrapper">
				<div class="ver-contrato">Cancela</div>
			</div>
			<div class="cancela-container">
				<div class="ver-contrato">Cancela</div>
			</div>
			<div class="voltar-wrapper">
				<div class="ver-contrato">Voltar</div>
			</div>
		</div>
	)
}

export default agendaContrato
