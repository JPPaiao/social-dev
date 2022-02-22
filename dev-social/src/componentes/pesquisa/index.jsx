import React from 'react'

import Botao from '../botao/index';
// import { Container } from './styles';

function Pesquisa() {
    return (
        <div className="pesquisa">
            <input className='inp' type="text" />
            <div className="btn-div">
                <Botao>Adicionar desenvolvedor</Botao>
            </div>
        </div>
    )
}

export default Pesquisa