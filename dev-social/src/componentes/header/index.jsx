import React from 'react'

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
                            <img src={discord} alt="discord" />
                        </div>
                        <div className='facebook'>
                            <img src={facebook} alt="facebooke" />
                        </div>
                        <div className='linkedin'>
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div className='logo'>
                        <img src={balleriniDevs} alt="logo" />
                        <h1>Ballerini Devs</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header