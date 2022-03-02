import React from 'react'

import Botao from '../botao/index'
import './index.css'

function Configdevs({ id, setok, fun, add }) {
    function chamarFun() {
        if (fun === 'Adicionar') {
            return adicionar()
        } else {
            return editar()
        }
    }

    function valores() {
        let inp = document.getElementsByClassName('inp')
        let nome = ''
        let cargo = ''
        let foto = ''

        for (let i of inp) {
            if (i.id == 'nome') {
                nome += i.value
            } else if (i.id == 'cargo') {
                cargo += i.value
            } else if (i.id == 'foto') {
                foto += i.value
            }
        }

        (fun === 'Adicionar') ? add(nome, cargo, foto) : add()
    }

    const editar = () => {
        return (
            <>
                <div className="btns">
                    <div className="btn-cancel">
                        <Botao onClick={() => setok(false)}>Cancelar</Botao>
                    </div>
                    <div className="btn-edit">
                        <Botao onClick={() => {
                            valores()
                            setok(false)
                        }}>{fun}</Botao>
                    </div>
                </div>
            </>
        )
    }

    const adicionar = () => {
        return (
            <>
                <div className="btns">
                    <div className="btn-cancel">
                        <Botao onClick={() => setok(false)}>Cancelar</Botao>
                    </div>
                    <div className="btn-edit">
                        <Botao onClick={() => {
                            valores()
                            setok(false)
                        }}>{fun}</Botao>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='container-config'>
            <div className="container-conteudo">
                <div className="conteudo">
                    <h2>{fun === 'Editar' ? 'Editar desenvolvedor' : 'Adicionar desenvolvedor'}</h2>
                    <div className="inputs-div">
                        <div className="inp-add">
                            <h3>Nome:</h3>
                            <input type="text" className='inp' id='nome' />
                        </div>
                        <div className="inp-add">
                            <h3>Avatar:</h3>
                            <input type="text" className='inp' id='foto' />
                        </div>
                        <div className="inp-add">
                            <h3>Cargo:</h3>
                            <input type="text" className='inp' id='cargo' />
                        </div>
                        <div className="inp-add">
                            <h3>GitHub:</h3>
                            <input type="text" className='inp' />
                        </div>
                        <div className="inp-add">
                            <h3>Linkedin:</h3>
                            <input type="text" className='inp' />
                        </div>
                    </div>
                </div>
                {chamarFun()}
            </div>
        </div>
    )
}

export default Configdevs