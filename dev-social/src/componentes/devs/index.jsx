import React from 'react'

import Dev from '../dev/index'

function Devs({ devs, remove, add }) {
    return (
        <>
            {devs.map( dev => <Dev key={dev.id} user={dev} remove={remove} add={add} />)}
        </>
    )
}

export default Devs