import React from 'react'

import Pesquisa from '../pesquisa/index';
import balleriniDevs from '../../assets/balleriniDevs.png'
import discord from '../../assets/discord.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import './index.css'

function Header() {
    return (
        <header>
            <div className='container-header'>
                <div className='flex-header'>
                    <div className='favicons'>
                        <div className='discord'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={discord} alt="discord" />
                            </a>
                        </div>
                        <div className='facebook'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebooke" />
                            </a>
                        </div>
                        <div className='linkedin'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className='logo'>
                        <img src={balleriniDevs} alt="logo" />
                        <h1>Ballerini Devs</h1>
                    </div>
                    <div className="pesquisar">
                        <Pesquisa />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header