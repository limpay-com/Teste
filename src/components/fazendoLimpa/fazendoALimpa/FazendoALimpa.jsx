import Player1 from '../../../assets/images/cursosProfissionalizantes/Player-1.png'

function FazendoLimpa() {
    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <div className=' m-4 largura-cursosprofissionalizantes'>
                    <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                    <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
                </div>
                <div className=' m-4 largura-cursosprofissionalizantes'>
                    <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                    <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
                </div>
                <div className=' m-4 largura-cursosprofissionalizantes'>
                    <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                    <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
                </div>
                <div className=' m-4 largura-cursosprofissionalizantes'>
                    <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                    <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
                </div>
                <div className=' m-4 largura-cursosprofissionalizantes'>
                    <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                    <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
                </div>
            </div>
        </>
    )
}

export default FazendoLimpa