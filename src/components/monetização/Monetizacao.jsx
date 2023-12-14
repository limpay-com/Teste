import Style from './Monetizacao.css'

function Monetizacao() {
    return(
        <>
        <div className="container d-flex flex-column justify-content-center align-items-center rounded" id="c-resultados">
            <div>
            <h2 className="m-2 my-4" style={{color:'#005dff'}}>Monetização</h2>
                <div className="d-inline-block p-2 d-flex">
                    <p className="p-1 d-inline-block w-50 p-monetizacao "> Monetização, cobramos uma taxa fixa do contratante durante a transação, e o valor acordado para o serviço vai totalmente para o profissional. Isso ajuda a manter a plataforma funcionando e oferecendo serviços de qualidade para todos.</p>
                    <p className="p-1 d-inline-block w-50 p-monetizacao">E futuramente pensamos em permitir que os profissionais 
                    consigam conquistar certificados após a finalização dos blocos de aula, 
                    deixando o perfil cada vez mais completo, 
                    além disso pensamos em criar sistemas de pacote, 
                    planos e por fim os vídeos  upados no YouTube explicando como a 
                    plataforma funciona e alguns outros tutoriais receberão um valor.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Monetizacao