import React from 'react';
import { DivClass } from '../styled/navstyle';
import logo from '../img/N4D single.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components'


library.add(
    fab
)


function BottomNav() {
    return (
        <DivClass className='bg-white border-top row text-black justify-content-center'>
            <div className='container row ms-5'><div className='col-md-2 col-lg-10 col-sm-2 col-xl-5 pe-5 pt-3 container'>
                <h5 style={{ color: "black" }}><img src={logo} alt="logo" width={"40px"} />
                    aira4Digits
                </h5>
                <p style={{color:"black", fontSize: '12px'}}> Naira4Coin is a bitcoin buying platform. We have the potential of buying any amount of bitcoin and make payment instantly.</p>
               
                <div style={{ color: "black" }} className='row col-12 mt-3 mt-xl-4 mt-lg-4 '>
                    <div className='col-sm-3 col'> <FontAwesomeIcon icon={faFacebook} /></div>

                    <div className='col-sm-3 col'><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className='col-sm-3 col' ><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className='col-sm-3 col'> <FontAwesomeIcon icon={faWhatsapp} /></div>

                </div></div>
            <Linksdiv className='col-md-2 col-lg-2 col-sm-2 col-4 col-xl-4 pt-3' >
                <h5>Links</h5>

                <div className='navbar-item'>Home</div>
                <div>About</div>
                <div>News</div>
                <div>FAQs</div>
                <div>Contact</div>


            </Linksdiv>

            <Linksdiv className='col pt-3' >
                <h5>Contact</h5>

                <div className='navbar-item'>Address: 2, James estate, Lekki, Lagos.</div>
                <div>Email: email@gmail.com</div>
                <div> Phone:08012345676 </div>



            </Linksdiv></div>
            
            <Linksdiv className='col pt-3 d-flex container me-5 justify-content-end' >
                <p>© 2022 || Naira4Digits </p>


            </Linksdiv>

        </DivClass>
    )
}

export default BottomNav

const Linksdiv = styled.div`
color: black;
font-size: 12px;

`