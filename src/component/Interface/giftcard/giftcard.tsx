import React from 'react'
import { Balance, Dashbnav, Footer, Selectgift } from '..'
import './giftcard.scss'
function giftcard() {
    return (
        <>
            <div className='giftcard'>
                <main className=''>
                    <Dashbnav />
                    <Balance />
                    <Selectgift />
                </main>
                <footer className="footer sticky-bottom"><Footer /></footer>

            </div>
        </>
    )
}

export default giftcard