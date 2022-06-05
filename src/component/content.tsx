import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import btc from '../img/bitcoin.png'
import eth from '../img/ethereum.png'
import lit from '../img/litecoin (1).png'
import ngn from '../img/nigeria.png'
import trade from '../img/trade.jpg'
import one from '../img/image/1.png'
import two from '../img/image/2.png'
import three from '../img/image/3.png'
import Backg from '../img/image/nairaM.png'
import Giftcard from '../img/image/m3.png'
import Mobile from '../img/image/1g.gif'

function content() {
  return (
    <div>
      <DaveDiv>
        <div className='pt-5 pb-3'>
          <h3><span style={{ color: 'purple', background: 'white', }}>Welcome to</span><span style={{ color: 'white', background: 'purple', }}>Naira4Digits</span></h3>
          <div className='pt-5'><p>Get the best</p></div>

        </div>
        <div className='row  d-flex justify-content-center pb-3'>
          <div className='col-3'>
            <button className='btn btn-light rounded-pill w-lg-50' >Register</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-light rounded-pill w-lg-50'> Login</button>
          </div>
        </div>

        <div className='container row '>
          <table className='w-sm-50'>
            <thead>
              <tr><th className='pe-5 text-center'>Country</th>
                <th className='pe-5 text-center'>Currency</th>
                <th className='pe-5 text-center' >Quantity</th>
                <th></th>
                <th className='pe-5 text-center'>Per USD</th></tr>
            </thead>

            <tbody>
              <tr>
                <th className='pe-5'><img src={btc} alt="btc logo" width="20px" /></th>
                <th className='pe-5'>NGN <img src={ngn} alt="btc logo" width="15px" /></th>
                <th className='pe-5'>1</th>
                <th className='pe-5'> <FontAwesomeIcon icon={faRightLeft} /></th>
                <th className='pe-5'>500</th>
              </tr>
              <tr>
                <th className='pe-5'><img src={eth} alt="eth logo" width="20px" /></th>
                <th className='pe-5'>NGN <img src={ngn} alt="btc logo" width="15px" /></th>
                <th className='pe-5'>1</th>
                <th className='pe-5'><FontAwesomeIcon icon={faRightLeft} /></th>
                <th className='pe-5'>500</th>
              </tr>
              <tr>
                <th className='pe-5'><img src={lit} alt="lit logo" width="20px" /></th>
                <th className='pe-5'>NGN <img src={ngn} alt="btc logo" width="10px" /></th>
                <th className='pe-5'>1</th>
                <th className='pe-5'> <FontAwesomeIcon icon={faRightLeft} /></th>
                <th className='pe-5'>500</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='container-fluid col-sm-12 col-lg-12 pt-4 d-flex justify-content-center'>
          <div className='card w-sm-100 w-lg-100 pb-2 rounded d-flex justify-content-center ' style={{ background: '#201c20', width: '69%' }}>
            <ul className="nav nav-tabs text-center  d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                <button className="nav-link active text-secondary " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Buy</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-secondary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sell</button>
              </li>

            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h2 className='text-light pt-4 pb-2' style={{ fontSize: '22px', fontWeight: 'bold' }}>Crypto Buy Calculator</h2>
                <p className='text-light' style={{ fontSize: '16px' }}>Select your coin</p>
                <select style={{ color: "purple" }}>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>LTC</option>
                </select>
                <p className='text-light pt-3' style={{ fontSize: "16px", fontWeight: 'bold' }}>Amount in USD</p>
                <div className='container w-75'><input placeholder='insert price' name='name' className='rounded border-1 form-control' /></div>

                <p className='text-light pt-3' style={{ fontSize: "16px", fontWeight: 'bold' }}>Amount in NGN</p>
                <div className='container w-75'><input placeholder='insert price' name='naira' className='rounded border-1 form-control ' /></div>
                <div className='col pt-3'><button className='btn btn-primary me-2' type='button'>Get Price</button>
                  <button className='btn btn-secondary ms-2' type='button'>Trade</button></div>
                <div>
                  <p className='text-light container pt-2' style={{ fontSize: '12px', fontStyle: "italic" }}>Note: this calculator works with Naira4Digits trading price</p>
                </div>
              </div>


              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h2 className='text-light pt-4 pb-2' style={{ fontSize: '22px', fontWeight: 'bold' }}>Crypto Sell Calculator</h2>
                <p className='text-light' style={{ fontSize: '12px' }}>Select your coin</p>
                <select style={{ color: "purple" }}>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>LTC</option>
                </select>
                <p className='text-light pt-3' style={{ fontSize: "16px" }}>Amount in USD</p>
                <div className='col-sm-10 container'><input placeholder='insert price' name='name' className='rounded border-1 form-control' /></div>


                <p className='text-light pt-3' style={{ fontSize: "16px" }}>Amount in NGN</p>
                <div className='col-sm-10 container'><input placeholder='insert price' name='naira' className='rounded border-1 form-control' /></div>
                <div className='col pt-3'><button className='btn btn-primary me-2' type='button'>Get Price</button>
                  <button className='btn btn-secondary ms-2' type='button'>Trade</button></div>
                <div>
                  <p className='text-light container pt-2' style={{ fontSize: '12px', fontStyle: "italic" }}>Note: this calculator works with Naira4Digits trading price</p>
                </div>
              </div>


            </div>
          </div></div>

        <div className='col pt-4 pb-3'>
          <button className='btn btn-dark me-5 ' ><FontAwesomeIcon icon={faGooglePlay} />PlayStore</button>
          <button className='btn btn-dark ms-5 '><FontAwesomeIcon icon={faApple} />Apple IOS</button>
        </div>


      </DaveDiv>
      <NumberDiv>
        <div className='pt-5 pb-5'>
          <div className='pb-3 container'>
            <h2 className='border border-5 pt-3 pb-3'><span style={{ color: 'purple', background: 'white', }}>Get Started</span> <span style={{ color: 'white', background: '#835ba4', }}> with few Steps</span></h2>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='container col-10 col-lg-4  ' style={{ background: '#835ba4' }}>
              <img src={one} alt='one' width={'100%'} />
              <h4 className='text-light pt-4 pb-4'>Step One</h4>
              <p className='text-light pb-5'>Dowload our mobile app or <br /> visit our website to get started</p>
            </div>

            <div className='container col-10 col-lg-4' style={{ background: '#835ba4' }}>
              <img src={two} alt='one' width={'100%'} />
              <h2 className='text-light pt-4 pb-4'>Step Two</h2>
              <p className='text-light'>Register a free account with us and<br />  get dedicated wallet’s for all type of trades</p>

            </div>

            <div className='container col-10 col-lg-4 ' style={{ background: '#835ba4' }}>
              <img src={three} alt='one' width={'100%'} />
              <h4 className='text-light pt-4 pb-4'>Step Three</h4>
              <p className='text-light'>Bitcoin, Ethereum, Litecoin,<br /> Giftcards & many more ease</p>

            </div>
          </div>
        </div>


      </NumberDiv>

      <div className='w-100'>
        <img src={Giftcard} alt="giftcard" width={"90%"} />
      </div>
      <div className='text-center pb-4'>
        <h2 className='col-12' style={{ color: '#835ba4' }}>BUY/SELL GIFTCARDS EASILY WITHOUT STRESS</h2>

        <p style={{ color: '#835ba4' }}>Enjoy The  Best of Our Services, Get Automated Exchange Today</p>

        <button className='btn' style={{ background: '#835ba4', fontSize: '22px', color: 'white' }}>Get Started Now</button>
      </div>
      <div className='container'>
        <img src={Mobile} alt="Mobile app" width={"80%"} />

        <div className='pb-4'>
          <p style={{ color: '#835ba4', fontWeight: 'bolder', fontSize: '20px' }}>Download our mobile app on your mobile phone easily </p>
          <div className='row d-flex  justify-content-center'>
            <div className='col-lg-2 col-5 col-sm-5'><button className='btn rounded' style={{ background: '#835ba4', fontSize: '12px', color: 'white' }}><FontAwesomeIcon icon={faApple}/> DOWNLOAD ON <br/> Apple Store</button></div>

            <div className='col-lg-2 col-5 col-sm-2'><button className='btn rounded' style={{ background: '#835ba4', fontSize: '12px', color: 'white' }}><FontAwesomeIcon icon={faGooglePlay}/> DOWNLOAD ON <br/> PlayStore</button></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default content

const DaveDiv = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.709), rgba(0, 0, 0, 0.709), rgba(0, 0, 0, 0.709), rgba(141 104 171)), url(${trade});
color: white;


`

const NumberDiv = styled.div`
background-image: linear-gradient(rgb(4 4 4 / 65%)), rgb(4 4 4 / 65%))),url(${Backg});
background-size: 100rem; 
background-repeat: no-repeat

`



