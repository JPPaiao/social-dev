import React, { Link } from 'react'

import Pesquisa from '../pesquisa/index';
import balleriniDevs from '../../assets/balleriniDevs.png'
import discord from '../../assets/discord.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import './index.css'

function Header({ condicao }) {
    return (
        <header>
            <div className='container-header'>
                <div className='flex-header'>
                    <div className='favicons'>
                        <div className='discord'>
                            <a href="https://github.com/JPPaiao" target="_blank">
                                <img className='git' src="https://img.icons8.com/metro/26/26e07f/github.png"/>
                            </a>
                        </div>
                        <div className='facebook'>
                            <a href="https://www.facebook.com/jp.paiao.102" target="_blank">
                                <img src={facebook} alt="facebooke" />
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