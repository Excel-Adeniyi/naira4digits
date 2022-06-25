import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faArrowLeft, faBank, faBars, faBarsStaggered, faBoltLightning, faCircleChevronLeft, faCircleDollarToSlot, faCircleInfo, faClockRotateLeft, faCreditCard, faHome, faInfo, faInfoCircle, faMoneyBillTransfer, faPerson, faRectangleAd, faThumbsUp, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

function sideBarComp(): JSX.Element {
  return (
    <div className='col-1'>
      <div>
        <button className="border-0 fs-1 align-self-center text-white bg-transparent  flex-start pt-2 justify-content-start d-lg-none d-xl-none d-xxl-none d-flex " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FontAwesomeIcon icon={faBarsStaggered} /></button>

        <div className="offcanvas offcanvas-start bg-dark text-white col-2 w-50" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">

            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">User 1265</h5>
            <button type="button" className="btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
          </div>
          <div className="offcanvas-body col-12">
            <ul className='navbar-item menu'>
              <li className='navbar mb-3 col-8'><FontAwesomeIcon icon={faUser} className="rounded-pill fs-3  " />Profile</li>

              <li className='navbar dropdown mb-3'>

                <div className='dropdown-toogle row' typeof='button' id="dropdownMenuButton" data-bs-toggle="dropdown">
                  <div className='col'><FontAwesomeIcon icon={faWallet} className="  fs-3 rounded-pill" /></div>
                  <div className='col'>Wallets</div>

                </div>

                <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>


              </li>
              <li className='navbar mb-3 col-9'>
                <FontAwesomeIcon icon={faCreditCard} className='fs-3 rounded-pill' />
                Deposit
              </li>

              <li>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />GiftsCards<span className="position-absolute top-2 translate-middle badge bg-danger">
                  New
                  <span className="visually-hidden">unread messages</span>
                </span>
              </li>

              <li className='navbar mb-3 col-9'>
                <FontAwesomeIcon icon={faBank} className='fs-3 rounded-pill' />
                Withdraw
              </li>
              <li className='navbar mb-3 text-center col-8'>
                <FontAwesomeIcon icon={faBank} className='fs-3 rounded-pill' />
                Instant
              </li>

              <li className='navbar mb-3 text-center col-9'>
                <FontAwesomeIcon icon={faInfoCircle} className='fs-3 rounded-pill' /><div></div>
                Support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DivNav>
        <button className="border-0 bg-transparent fs-1 text-white flex-start justify-content-start d-flex d-none d-lg-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offset" aria-controls="offcanvasWithBothOptions"><FontAwesomeIcon icon={faBarsStaggered} /></button>

        <div className="offcanvas offcanvas-start bg-dark text-white col-12 w-25" data-bs-scroll="true" tabIndex={-1} id="offset" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">User 1234</h5>
            <button type="button" className="btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
          </div>
          <div className="offcanvas-body col-12">
            <ul className='navbar-item menu'>
              <li className='navbar mb-3 col-7'><FontAwesomeIcon icon={faUser} className="rounded-pill fs-3 " />Profile</li>

              <li className='navbar dropdown mb-3'>

                <div className='dropdown-toogle row' typeof='button' id="dropdownMenuButton" data-bs-toggle="dropdown">
                  <div className='col'><FontAwesomeIcon icon={faWallet} className="  fs-3 rounded-pill" /></div>
                  <div className='col'>Wallets</div>

                </div>

                <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>


              </li>

              <li className='navbar mb-3 col-8'>
                <FontAwesomeIcon icon={faCreditCard} className='fs-3 rounded-pill' />Deposit
              </li>

              <li className='navbar mb-3 col-8'>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />GiftsCards<span className="position-absolute top-2 translate-middle badge bg-danger">
                  New
                  <span className="visually-hidden">unread messages</span>
                </span>
              </li>

              <li className='navbar mb-3 col-8'>
                <FontAwesomeIcon icon={faBank} className='fs-3 rounded-pill' />
                Withdraw
              </li>
              <li className='navbar mb-3 text-center col-8'>
                <FontAwesomeIcon icon={faBank} className='fs-3 rounded-pill' />
                Instant
              </li>

              <li className='navbar mb-3 text-center col-8'>
                <FontAwesomeIcon icon={faInfoCircle} className='fs-3 rounded-pill' /><div></div>
                Support
              </li>
            </ul>
          </div>
        </div>
      </DivNav>
    </div>
  )
}

export default sideBarComp
const DivNav = styled.div`
.w-25{
  width: 17%!important;
}
`