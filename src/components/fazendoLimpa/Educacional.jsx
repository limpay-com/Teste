import "./Educacional.css"
import Banner from "../banner/Banner"
import Livros from "../../assets/images/Front view of stacked books and ladders with copy space for education day.svg"
import LivrosDaPagina from "../../assets/images/_836fae15-14a0-49b2-b6e7-db5b8101bda6 2.svg"
import { Link } from "react-router-dom"


function Educacional() {
	return (
		<>
			<Banner title="Bem-vindo(a) à nossa área educacional, Fazendo a Limpa!" imagesrc={Livros}></Banner>
			<div className="m-2 my-4">
				<div class="container c-texto-educacional">
					<p className="fs-5">Estamos empolgados em apresentar a você um espaço dedicado ao aprimoramento profissional e ao conhecimento dentro do universo da limpeza. Aqui na nossa plataforma, não apenas conectamos profissionais de limpeza a contratantes, mas também nos preocupamos com o crescimento e a capacitação da comunidade que faz a diferença nos ambientes que frequentamos.</p>
				</div>
				<div className="d-flex container">
					<div class="container c-texto-educacional w-50 ">
						<p class="fs-5">Abraçando o compromisso de proporcionar a todos os envolvidos uma experiência enriquecedora. A área educacional "Fazendo a Limpa" é o nosso ponto de encontro para aprender, compartilhar e evoluir juntos.
							Nós da Limpay, acreditamos que a educação é a chave para o sucesso. Ao investir no seu aprendizado, estamos construindo não apenas profissionais de limpeza mais capacitados, mas também promovendo ambientes mais seguros, saudáveis e produtivos.
							Explore, aprenda e cresça conosco. Seja bem-vindo(a) à sua jornada educacional aqui no Fazendo a Limpa!
						</p>
					</div>
					<div className="w-50">
						<img src={LivrosDaPagina} alt="" />
					</div>
				</div>

				<div className="d-flex justify-content-end ">
					<div>
						<button className="btn btn-primary align-self-end"> <Link className="p-branco text-decoration-none" to="/educacional/opcoes"> Avançar</Link></button>
					</div>

				</div>



			</div>
		</>
	)
}



export default Educacional