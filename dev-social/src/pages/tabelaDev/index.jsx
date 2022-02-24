import React, { useState } from 'react'

import Header from '../../componentes/header/index'
import Botao from '../../componentes/botao/index'
import Devs from '../../componentes/devs/index'
import seta from '../../assets/seta.png'
import './index.css'

function TabelaDev() {
    const [ desenvolvedores, setDevs ] = useState([
        {
            id: 1,
            foto: '',
            nome: 'Tony Stark',
            profissão: 'Machine learning, IA',
        },
        {
            id: 2,
            foto: '',
            nome: 'Peter Parker',
            profissão: 'Full-stack',
        },
        {
            id: 3,
            foto: '',
            nome: 'Bruce Banner',
            profissão: 'Cientista de Dados',
        },
    ])

    return (
        <div className='container'>
            <Header />
            <div className="btn-div-add">
                <div className="btn-add">
                    <Botao>Adicionar desenvolvedor</Botao>
                </div>
            </div>
            <main className='main-tabela'>
                <div className="tabela-devs">
                    {desenvolvedores.map( dev => <Devs users={dev} />)}
                </div>
            </main>
            <div className="div-setas">
                <div className="seta-direita">
                    <img src={seta} />
                </div>
                <div className="seta-esquerda">
                    <img src={seta} />
                </div>
            </div>
        </div>
    )
}

export default TabelaDev