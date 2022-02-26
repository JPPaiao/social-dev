import React from 'react'

import Botao from '../botao/index'
import './index.css'

function Configdevs({ id, setok, fun, remove }) {

    
    const chamarFun = () => {
        switch (fun) {
            case 'Deletar':
                return deletar()
            case 'Editar':
                return editar()
        }
    }

    const deletar = () => {
        return (
            <div className="conteudo">
                <h2>Deletar Desenvolvedor</h2>
                <div className="p">
                    <p>Tem certeza que deseja deletar este desenvolvedor?</p>
                </div>
            </div>
        )
    }

    const editar = () => {
        return (
            <div className="conteudo">
                <h2>Editar Desenvolvedor</h2>
                <div className="inputs-div">
                    <div className="inp-add">
                        <h3>Nome:</h3>
                        <input type="text" className='inp' />
                    </div>
                    <div className="inp-add">
                        <h3>Avatar:</h3>
                        <input type="text" className='inp' />
                    </div>
                    <div className="inp-add">
                        <h3>Cargo:</h3>
                        <input type="text" className='inp' />
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
        )
    }

    return (
        <div className='container-config'>
            <div className="container-conteudo">
                <div className="conteudo">
                    {chamarFun()}
                </div>
                <div className="btns">
                    <div className="btn-cancel">
                        <Botao onClick={() => setok(false)}>Cancelar</Botao>
                    </div>
                    <div className="btn-edit">
                        <Botao onClick={() => {
                            remove(id)
                            setok(false)
                        }}>{fun}</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configdevs