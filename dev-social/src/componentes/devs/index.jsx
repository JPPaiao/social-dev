import React, { useEffect, useLayoutEffect, useState } from 'react';

import Botao from '../botao/index'
import imagemDesenvolvedor from '../../assets/imagemDesenvolvedor.png'
import iconeLinkedin from '../../assets/iconeLinkedin.png'
import iconeGithub from '../../assets/iconeGithub.png'
import Configdevs from '../configdevs/index'
import './index.css'

function Devs({ users, remove }) {
    const [ok, setOK] = useState(false)
    const [fun, setFun] = useState('')

    return (
        <div>
            <div className="dev">
                <div className="info-dev">
                    <div className="foto">
                        <img src={imagemDesenvolvedor} alt="dev" />
                        {/* {users.foto} */}
                        {/* <hr /> */}
                    </div>
                    <div className="descricao">
                        <h2>{users.nome}</h2>
                        <p>{users.profissão}</p>
                    </div>
                    <div className='links'>
                        <div className="github">
                            <a href="#">
                                <img src={iconeGithub} alt="github" />
                            </a>
                        </div>
                        <div className="linkdin">
                            <a href="#">
                                <img src={iconeLinkedin} alt="linkedin" />
                            </a>
                        </div>
                        <div className="btn-div-detalhes">
                            <Botao>Ver mais</Botao>
                        </div>
                    </div>
                </div>
                <div className="btn-div-devs">
                    <div className="editar-btn">
                        <Botao onClick={() => {
                            setOK(true)
                            setFun('Editar')
                        }}>Editar</Botao>
                    </div>
                    <div className="deletar-btn">
                        <Botao onClick={() => {
                            setOK(true)
                            setFun('Deletar')
                        }}>Deletar</Botao>
                    </div>
                </div>
            </div>
            <div className="configs">
                {ok ? <Configdevs id={users.id} setok={setOK} remove={remove} fun={fun} /> : null}
            </div>
        </div>
    )
}

export default Devs
