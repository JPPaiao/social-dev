import React, { Link } from 'react'

import Pesquisa from '../pesquisa/index';
import balleriniDevs from '../../assets/balleriniDevs.png'
import intagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.svg'
import './index.css'

function Header({ condicao }) {
    return (
        <header>
            <div className='container-header'>
                <div className='flex-header'>
                    <div className='favicons'>
                        <div className='github'>
                            <a href="https://github.com/JPPaiao" target="_blank">
                                <img className='git' src="https://img.icons8.com/metro/26/26e07f/github.png"/>
                            </a>
                        </div>
                        <div className='instagram'>
                            <a href="https://www.instagram.com/jotape_paiao/" target="_blank">
                                <img src={intagram} alt="instagram" />
                            </a>
                        </div>
                        <div className='linkedin'>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-pai%C3%A3o-b63225214/" target="_blank">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className='logo'>
                        <a href="/">
                            <img src={balleriniDevs} alt="logo" />
                            <h1>Ballerini Devs</h1>
                        </a>
                    </div>
                    <div className="pesquisar" style={ (!condicao) ? {display: "flex"} : {display: "none"} }>
                        <Pesquisa />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header