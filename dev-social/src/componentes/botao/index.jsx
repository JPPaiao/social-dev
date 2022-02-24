import React from 'react'
import './index.css'

function Botao({ children, onClick }) {
    return (
        <div className='btn-div'>
            <button onClick={onClick} className='btn' >{children}</button>
        </div>
    )
}

export default Botao