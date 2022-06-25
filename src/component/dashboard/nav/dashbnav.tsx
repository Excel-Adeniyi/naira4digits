import React from 'react'
import SideBarComp from './sidebar'
import logo from '../../../img/N4D single Transpenrent.png'
function dashbnav() {
    return (
        <div> <div className='mb-5 row pt-2'>
            <div className='col'> <SideBarComp /></div>

            <div className='col pt-2 text-white'>
                <h3>NAIRA4DIGITS</h3>
            </div>

            <div className='col d-flex justify-content-end'>
                <img src={logo} alt="logo" width={'50px'} />
            </div>
        </div></div>
    )
}

export default dashbnav