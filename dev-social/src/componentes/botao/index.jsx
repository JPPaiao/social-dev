import React from 'react'
import './index.css'

function Botao({ children, onClick }) {
    return (
        <div className='btn-div'>
            <button onClick={onClick} className='btn' >{children}</button>
            {/* <hr /> */}
        </div>
    )
}

export default Botao