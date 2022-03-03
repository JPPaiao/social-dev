import React from 'react'

import Botao from '../botao/index'
import './index.css'

function Configdevs({ user, setok, fun, add }) {
    let titulo = (fun === 'Editar') ? 'Editar desenvolvedor' : 'Adicionar desenvolvedor'

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
        let foto = 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146'

        for (let i of inp) {
            if (i.id == 'nome') {
                nome += i.value
            } else if (i.id == 'cargo') {
                cargo += i.value
            } else if (i.id == 'foto') {
                foto = i.value
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
                    <h2>{titulo}</h2>
                    <div className="inputs-div">
                        <div className="inp-add">
                            <h3>Nome:</h3>
                            <input type="text" className='inp' id='nome' placeholder={
                                (fun === 'Editar') ? user.nome : ''
                            } />
                        </div>
                        <div className="inp-add">
                            <h3>Avatar:</h3>
                            <input type="text" className='inp' id='foto' />
                        </div>
                        <div className="inp-add">
                            <h3>Cargo:</h3>
                            <input type="text" className='inp' id='cargo' placeholder={
                                (fun === 'Editar') ? user.profissão : ''
                            } />
                        </div>
                        <div className="inp-add">
                            <h3>GitHub:</h3>
                            <input type="text" className='inp' placeholder='https://github.com/'/>
                        </div>
                        <div className="inp-add">
                            <h3>Linkedin:</h3>
                            <input type="text" className='inp' placeholder='https://www.linkedin.com/in/' />
                        </div>
                    </div>
                </div>
                {chamarFun()}
            </div>
        </div>
    )
}

export default Configdevs