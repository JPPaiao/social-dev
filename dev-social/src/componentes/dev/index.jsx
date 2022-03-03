import React, { useEffect, useLayoutEffect, useState } from 'react';

import Botao from '../botao/index'
import iconeLinkedin from '../../assets/iconeLinkedin.png'
import iconeGithub from '../../assets/iconeGithub.png'
import Configdevs from '../configdevs/index'
import RemoveDev from '../removedevs/index'
import './index.css'

function Dev({ user, remove, add }) {
    const [ok, setOK] = useState(false)
    const [fun, setFun] = useState('')

    function config() {
        switch (fun) {
            case 'Deletar':
                return <RemoveDev id={user.id} remove={remove} setok={setOK}/>
            case 'Editar':
                return <Configdevs id={user.id} fun={fun} setok={setOK} add={add} />
        }
    }

    return (
        <div>
            <div className="dev">
                <div className="info-dev">
                    <div className="foto">
                        {user.foto}
                        <hr className='horizontal' />
                    </div>
                    <div className="descricao">
                        <h2>{user.nome}</h2>
                        <p>{user.profissão}</p>
                    </div>
                    <div className='links'>
                        <div className="github-user">
                            <a href="#">
                                <img src={iconeGithub} alt="github" />
                            </a>
                        </div>
                        <div className="linkdin-user">
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
                            setFun('Editar')
                            setOK(true)
                        }}>Editar</Botao>
                    </div>
                    <div className="deletar-btn">
                        <Botao onClick={() => {
                            setFun('Deletar')
                            setOK(true)
                        }}>Deletar</Botao>
                    </div>
                </div>
            </div>
            <div className="configs">
                {
                    ok ? config() : null
                }
            </div>
        </div>
    )
}

export default Dev
