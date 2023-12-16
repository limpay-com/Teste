import Player1 from '../../../assets/images/cursosProfissionalizantes/Player-1.png'
import Player2 from '../../../assets/images/cursosProfissionalizantes/Player-2.png'
import "./FazendoALimpa.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'video-react/dist/video-react.css';
import {
    Player,
    PosterImage ,
    BigPlayButton,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';






function FazendoLimpa() {
    // const [cor, setCor] = useState({"1":"","2":"","3":"","4":"","5":"","6":""})
    // var concluido = false

    // const mudarCor = () => {

    //         if(concluido == false){
    //             const novaCor = '#3FC978';
    //             setCor({"1": novaCor});
    //             concluido = true
    //         } else {
    //             const novaCor ='#000';
    //             setCor({"1": novaCor});
    //             concluido = false
    //         }


    //   }
    


    return (
        <>
            <h1 className='m-2 text-center'>Aprendendo sobre a Plataforma</h1>

            <div className='d-flex justify-content-center'>
            <button class=" btn-filtro m-4 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Andamento</button>
            </div>
            
            

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Concluidas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div classNa="offcanvas-body">
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

                    </div>

                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center gap-4 flex-wrap c-fazendolimpa'>
                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 01</p>
                </div>
                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 02</p>
                </div>

                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 03</p>
                </div>

                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 04</p>
                </div>

                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 05</p>
                </div>
                <div className=' largura-cursosprofissionalizantes'>
                    <Player poster={Player2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />

                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                    <p className='d-inline fs-6 p-aula form-check-label' id='p-aula1'>Aula - 06</p>
                </div>



            </div>

            <div className='d-flex justify-content-between'>
                <button className=" btn btn-primary m-4" ><Link to="/educacional/opcoes" className="p-branco text-decoration-none"> voltar</Link></button>

            </div>

        </>
    )
}


export default FazendoLimpa