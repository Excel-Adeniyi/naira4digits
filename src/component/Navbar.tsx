import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../img/new/N4D White.png';
import second from '../img/N4D single.png'
import { DivClass } from '../styled/navstyle';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
    return (
        <DivClass className='row'>
            <nav className='navbar navbar-expand-sm col'>
                <div className='container pt-3 pb-3 row center'>

                    <div className='col-lg-6 col-sm-10'>
                        <img src={logo} width="70%" alt='logo' />

                    </div>
                </div>
                <ul className='navbar-nav container  col-lg-6 d-flex text-center justify-content-start'>
                    <li className='nav-link nav-item d-none d-lg-block'>

                        Home
                    </li>
                    <li className='nav-link nav-item d-none d-lg-block'>About</li>
                    <li className='nav-link nav-item d-none d-lg-block'>News</li>
                    <li className='nav-link nav-item d-none d-lg-block'>FAQs</li>
                    <li className='nav-link nav-item d-none d-lg-block'>Contact</li>

                </ul>

                <ul className='navbar-nav px-3'>
                    <li className='nav-link nav-item d-none d-lg-block'><button className='rounded-pill'>Register</button></li>
                    <li className='nav-link nav-item d-none d-lg-block'><button className='rounded-pill'>Login</button></li>
                </ul>





            </nav>
            <div className='col-2 pt-4 d-block d-lg-none'>
                <button className='btn' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FontAwesomeIcon icon={faBars} /></button>
            </div>

            <div className="offcanvas offcanvas-start w-75 bg-dark text-white" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <div className="offcanvas-header pt-5 mt-5">
                    <h5 className="offcanvas-title justify-content-center ps-5 mt-5" id="offcanvasWithBothOptionsLabel"><img src={logo} alt="logo" width={"80%"} /></h5>
                </div>
                <div className="offcanvas-body">
                    <div className='text-center'>
                        <div className=''>Home</div>
                        <div className='mt-4'>About</div>
                        <div className='mt-4'>FAQs</div>
                        <div className='mt-4'>Contact</div>
                    </div>


                    <div className='row mt-4 ms-3'>
                        <div className='col'><button className='rounded-pill btn btn-light'>Register</button></div>
                        <div className='col'><button className='rounded-pill btn btn-light'>Login</button></div>
                    </div>

                    <div className='fixed-bottom d-flex justify-content-between w-50 ms-5 pb-3'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                </div>
            </div>
        </DivClass>
    )
}

export default Navbar


