import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../componentes/header/index'
import Botao from '../../componentes/botao/index'
import programador from '../../assets/programador.png'
import blobs from '../../assets/blobs.png'
import './index.css'

function LadingPage() {
    return (
        <>
            <Header condicao='false' />
            <main className='main-lading'>
                <div className='texto'>
                    <h1>O maior banco de devs do Brasil</h1>
                    <p>Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                    <div className="btn-div-lading">
                        <Link to={'/tabela-devs'}>
                            <Botao>Entre agora</Botao>
                        </Link>
                    </div>
                    <hr />
                </div>
                <div className='programador-div'>
                    <img className='programador' src={programador} alt="programador" />
                </div>
            </main>
            <div className='blobs-div'>
                <img className='blobs' src={blobs} />
            </div>
        </>
    )
}

export default LadingPage