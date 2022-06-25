import { faArrowAltCircleLeft, faBank, faBars, faBarsStaggered, faBoltLightning, faCircleInfo, faClockRotateLeft, faCreditCard, faHome, faMoneyBillTransfer, faRectangleAd, faThumbsUp, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashback from '../../img/nairaba.png'
import barcode from '../../img/barc.png'
import btc from '../../img/bitcoin.png'
import ltc from '../../img/litecoin (1).png'
import { LineChart, Line } from 'recharts'
import { curveCardinal } from "d3-shape";



import React from 'react'
import styled from 'styled-components';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import Dashbnav from './nav/dashbnav'
import Footer from './pagecontent/footer'


function dashboard() {
  return (

    <div >



      <Dashdiv className="pb-2 ">
        <Dashbnav />





        <div className='row'>
          <div className='text-white'>
            <h5>Balance</h5>
            <h2>N200,000</h2>
            <div className='justify-content-center d-flex'>
              <div className='row '>
                <div className='col'>
                  <button className='btn btn-light'>Deposite</button>
                </div>
                <div className='col'>
                  <button className='btn btn-light'>Withdraw</button>
                </div>
              </div>
            </div>
          </div>

          <div className='container pt-2'>
            <div className='d-flex justify-content-center'>
              <div className='col-10 '>
                <div className='card rounded-3 mb-3'>
                  <div className='card-body'>
                    <div className='row mb-3'>
                      <div className='col'><button className='btn btn-purple rounded-pill col-lg-4 col-12' data-bs-toggle="modal" data-bs-target="#Modalup">Account Details</button>

                        <div className="modal fade" id="Modalup" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="NModal" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5 className='modal-title' >Account Details</h5>
                                <button type='button' data-bs-dismiss="modal" aria-labe="Close"><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                              </div>
                              <div className='modal-body'>
                                <h3>Account Number</h3><p>22329849820</p>

                                <h3>Bank Name</h3>
                                <p>Zenith Bank</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className='col'>
                        <button className='btn btn-purple rounded-pill col-lg-4 col-12' data-bs-toggle="modal" data-bs-target="#NModalAuto">AutoPay</button>



                        <div className="modal fade" id="NModalAuto" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="NModalAuto" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5 className='modal-title' >Account Details</h5>
                                <button type='button' data-bs-dismiss="modal" aria-labe="Close"><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                              </div>
                              <div className='modal-body justify-content-center'>
                                <h3>Initiate Automated Payement</h3>
                                <div className='justify-content-center'>
                                  <h3 className='text-center'>
                                    <div className="justify-content-center d-flex form-check form-switch">
                                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckDefault" />
                                    </div>
                                  </h3>
                                </div>
                              </div>
                              <div className='modal-footer'>
                                <div className='row'>
                                  <div className='col'><button className='btn btn-danger' >Save</button></div>
                                  <div className='col'><button className='btn btn-info' data-bs-dismiss="modal">Close</button></div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                      </div>

                    </div >
                    <div className='row'>
                      <div className='col'><button className='btn btn-purple rounded-pill col-lg-4 col-12' data-bs-toggle="modal" data-bs-target="#History">Transaction</button>

                      
                        <div className="modal fade" id="History" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="NModalAuto" aria-hidden="true">
                          <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                            <div className='modal-content'>
                              <div className='modal-body'>
                                <div>
                                  <h6>History</h6>
                                </div>
                                <div className='card'>
                                  <div className='card-body table-responsive'>

                                    <table className='table table-borderless'>
                                      <thead>
                                        <tr>
                                          <th></th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Address</td>
                                          <td>asdlid12092304ulnskh093nedw</td>
                                        </tr>
                                        <tr>
                                          <td>Coin</td>
                                          <td>BTC</td>
                                        </tr>
                                        <tr>
                                          <td>Address</td>
                                          <td>asdlid12092304ulnskh093nedw</td>
                                        </tr>
                                        <tr>
                                          <td>Coin</td>
                                          <td>BTC</td>
                                        </tr><tr>
                                          <td>Address</td>
                                          <td>asdlid12092304ulnskh093nedw</td>
                                        </tr>
                                        <tr>
                                          <td>Coin</td>
                                          <td>BTC</td>
                                        </tr>

                                      </tbody>
                                    </table>

                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                      <div className='col'><button className='btn btn-purple rounded-pill col-lg-4 col-12'>Price Exchange</button></div>
                    </div>
                  </div>
                </div>

                <div className='card rounded-3 mb-3'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <div className='col'>
                          <img src={btc} alt="btc" width={'50px'} />
                        </div>
                        <div className='col purple '>
                          <h4>BITCOIN</h4>
                        </div>
                      </div>

                      <div className='col purple'>
                        <div className='col pt-3'>
                          <h5>N15,000,000</h5>
                        </div>
                        <div className='col'>
                          <h5>$12,000</h5>
                        </div>

                      </div>

                      <div className='col'>
                        <div className='col'>
                          <button className='btn btn-purple rounded-pill col-lg-3 col-12 mb-2'>BUY</button>
                        </div>
                        <div className='col'>
                          <button className='btn btn-purple rounded-pill col-lg-3 col-12'>SELL</button>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div className='card rounded-3 mb-3'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <div className='col'>
                          <img src={ltc} alt="btc" width={'50px'} />
                        </div>
                        <div className='col purple '>
                          <h4>LITECOIN</h4>
                        </div>
                      </div>

                      <div className='col purple'>
                        <div className='col pt-3'>
                          <h5>N15,000,000</h5>
                        </div>
                        <div className='col'>
                          <h5>$12,000</h5>
                        </div>

                      </div>

                      <div className='col'>
                        <div className='col'>
                          <button className='btn btn-purple rounded-pill col-lg-3 col-12 mb-2'>BUY</button>
                        </div>
                        <div className='col'>
                          <button className='btn btn-purple rounded-pill col-lg-3 col-12'>SELL</button>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div className='d-flex justify-content-end'>
                  <button className='btn btn-light purple'><span className='bolder'>Load More</span></button>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div className='container ms-3 me-3 col'>

            

          </div> */}

        </div>

        {/* <div className='container ms-5 me-5 mt-3'>
          <div className='card justify-content-center ms-lg-5 pt-4 me-5'>
            <div className='justify-content-center card-img'>
              <img src={barcode} width="200px" /></div>
            <div className='card-body'>
              <div className='card-title'>
                <h5> Wallet Address</h5>
              </div>
              <div className='card-text justify-content-center'>
                <p >asliud389sjd09q3e923j0909jdoiwsj</p>

              </div>
              <div className='card-footer'>
                <button className='btn btn-primary'>Click here for more wallets</button>
              </div>
            </div>

          </div>


        </div> */}

        <div className='bg-white mt-3' style={{ "borderTopRightRadius": "4rem", "borderTopLeftRadius": "4rem" }}>



          {/* Calculator */}


          <div className='container-fluid col-sm-12 pb-5 col-lg-12 bu pt-4 d-flex justify-content-center'>
            <div className='card w-sm-100 w-lg-100 pb-2 rounded-3  d-flex justify-content-center bg-dark ' style={{ width: '69%' }}>
              <ul className="nav nav-tabs text-center  d-flex justify-content-center" id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                  <button className="nav-link active text-danger " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Buy</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link text-danger" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sell</button>
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
        </div>
        <div className='fixed-bottom'><Footer /></div>

      </Dashdiv>


    </div>


  )
}

export default dashboard
const Dashdiv = styled.div`
background-color: #835ba4;
.history{
overflow-y: visible;

}
.table-responsive{
  overflow-y: visible;
  height: 200px
}
.btn-purple{
  background-color: #835ba4!important;
  color: white
}
.purple{
  color: #835ba4;

}

.bu{
  background-image: linear-gradient(177deg, transparent,white, #835ba4);
}

`