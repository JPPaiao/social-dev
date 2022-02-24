import React from 'react';

import Botao from '../botao/index'
import Configdevs from '../configdevs/index'
import imagemDesenvolvedor from '../../assets/imagemDesenvolvedor.png'
import iconeLinkedin from '../../assets/iconeLinkedin.png'
import iconeGithub from '../../assets/iconeGithub.png'
import './index.css'

function Devs({ users }) {
    const deleteDev = (devId) => {
        if (devId === users.id) {
            console.log(users.id)
            return users.id
        }
    }

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
                        <Botao>Editar</Botao>
                    </div>
                    <div className="deletar-btn">
                        <Botao onClick={() => deleteDev(users.id)} >Deletar</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devs
