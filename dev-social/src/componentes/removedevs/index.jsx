import React from 'react'

import Botao from '../botao/index'
import './index.css'

function RemoveDev({id, remove, setok}) {
    return (
        <div className='container-config'>
            <div className="container-conteudo">
                <div className="conteudo">
                    <h2>Deletar Desenvolvedor</h2>
                    <div className="p">
                        <p>Tem certeza que deseja deletar este desenvolvedor?</p>
                    </div>
                </div>
                <div className="btns">
                    <div className="btn-cancel">
                        <Botao onClick={() => setok(false)}>Cancelar</Botao>
                    </div>
                    <div className="btn-edit">
                        <Botao onClick={() => {
                            setok(false)
                            remove(id)
                        }}>Deletar</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveDev
