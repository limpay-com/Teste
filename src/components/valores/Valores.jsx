import Style from './Valores.css'

function Valores() {
    return(
        <>
            <div className="container my-4 d-flex flex-column">
                <div className="bg-light w-50 d-block c-valores p-2">
                    <h3 className="t-azul mx-4">Missão</h3>
                    <p className='px-4'>Queremos facilitar a vida de profissionais de limpeza autônomos e contratantes. Para isso, criamos uma plataforma que conecta os dois lados, promovendo eficiência, flexibilidade e segurança.</p>
                </div>
                <div className="bg-light w-50 d-block align-self-end c-valores f-azul p-2">
                    <h3 className='t-cinza mx-4'>Visão</h3>
                    <p className='p-branco px-4'>Queremos ser a principal referência em conexão de prestadores de serviços de limpeza. Para isso, vamos expandir nossa atuação para outros setores além dos serviços domésticos.</p>
                </div>
                <div className="bg-light w-50 d-block c-valores p-2">
                    <h3 className="t-azul mx-4">Valores</h3>
                    <p className='px-4'>Acreditamos que a confiança, a inovação, o empoderamento, o respeito e a excelência são fundamentais para o sucesso da nossa plataforma.</p>
                </div>
            </div>
        </>
    )
}

export default Valores