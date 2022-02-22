import React from 'react'

import Header from '../../componentes/header/index'
import programador from '../../assets/programador.png'
import blobs from '../../assets/blobs.png'
import Botao from '../../componentes/botao/index';
import './index.css';

function LadingPage() {
    return (
        <>
            <Header />
            <div className='blobs-div'>
                <img className='blobs' src={blobs} />
            </div>
            <main>
                <div className='texto'>
                    <h1>O maior banco de devs do Brasil</h1>
                    <p>Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                    <Botao>Entre agora</Botao>
                </div>
                <div className='programador-div'>
                    <img className='programador' src={programador} alt="programador" />
                </div>
            </main>
        </>
    )
}

export default LadingPage;