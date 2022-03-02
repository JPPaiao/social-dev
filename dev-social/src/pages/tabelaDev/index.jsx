import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Configdevs from '../../componentes/configdevs'
import Header from '../../componentes/header/index'
import Botao from '../../componentes/botao/index'
import Devs from '../../componentes/devs/index'
import seta from '../../assets/seta.png'
import './index.css'

function TabelaDev() {
    function img(url) {
        return (
            <div>
                <img src={url} style={{width: '170px', height: '170px'}} />
            </div>
        )
    }

    const [ok, setOK] = useState(false)
    const [ desenvolvedores, setDevs ] = useState([
        {
            id: 0,
            foto: img('https://t.ctcdn.com.br/46W0VeQazcmm2oopRE0Z2mGH34A=/400x400/smart/filters:format(webp)/i490793.jpeg'),
            nome: 'Tony Stark',
            profissão: 'Machine learning, IA',
        },
        {
            id: 1,
            foto: img('https://styles.redditmedia.com/t5_3gswo/styles/communityIcon_zgnztylq4br71.png'),
            nome: 'Peter Parker',
            profissão: 'Full-stack, Hacking',
        },
        {
            id: 2,
            foto: img('https://pm1.narvii.com/6833/13bc1221e726704836b5fbf83d3dc03cb71c6d09v2_128.jpg'),
            nome: 'Bruce Banner',
            profissão: 'Cientista de Dados',
        },
    ])

    function addDev(nome, cargo, foto) {
        let novoDevs = [
            ...desenvolvedores,
            {
                id: uuidv4(),
                foto: img(foto),
                nome: nome,
                profissão: cargo
            }
        ]

        setDevs(novoDevs)
    }

    function removeDev(id) {
        let removendo = desenvolvedores.filter(devId =>
            id != devId.id
        )

        setDevs(removendo)
    }

    function config() {
        return <Configdevs setok={setOK} fun={'Adicionar'} add={addDev} />
    }

    return (
        <div className='container'>
            <Header />
            <div className="btn-div-add">
                <div className="btn-add">
                    <Botao onClick={() => setOK(true)}>Adicionar desenvolvedor</Botao>
                </div>
            </div>
            <main className='main-tabela'>
                <div className="tabela-devs">
                    <Devs devs={desenvolvedores} remove={removeDev} add={addDev} />
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
            {ok ? config() : null}
        </div>
    )
}

export default TabelaDev
