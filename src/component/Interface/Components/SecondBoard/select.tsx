import React from 'react'
import Itunes from '../../../../img/new/Giftcards/itunes-340w.webp'
import Amazon from '../../../../img/new/Giftcards/amazon-340w.webp'
import Ebay from '../../../../img/new/Giftcards/ebay-340w.webp'
import Gamestop from '../../../../img/new/Giftcards/gamestop-340w.png'
import Hulu from '../../../../img/new/Giftcards/hulu-340w.png'
import netflix from '../../../../img/new/Giftcards/netflix-340w.png'
import './select.scss'
function selectgift() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='container bg-white p-1 col-lg-5 rounded-4'>
                    <h3 className='fst'>Select Your Giftcard</h3>
                </div>
            </div>

            <div className='bg-white rounded-top mt-5 '>
                <div className='container p-2'>
                    <div className='row d-flex'>
                        <div className='col rounded-5 border'>
                            <h6>Itunes</h6>
                            <img src={Itunes} alt='itunes' width={'100px'} />
                        </div>
                        <div className='col rounded-5 border'>
                            <h6>Amazon</h6>
                            <img src={Amazon} alt='itunes' width={'100px'} />
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col rounded-5 border'>
                            <h6>Ebay</h6>
                            <img src={Ebay} alt='itunes' width={'100px'} />
                        </div>
                        <div className='col rounded-5 border'>
                            <h6>Games Stop</h6>
                            <img src={Gamestop} alt='itunes' width={'100px'} />
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col rounded-5 border'>
                            <h6>Hulu</h6>
                            <img src={Hulu} alt='itunes' width={'100px'} />
                        </div>
                        <div className='col rounded-5 border'>
                            <h6>Netflix</h6>
                            <img src={netflix} alt='itunes' width={'100px'} />
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col rounded-5 border'>
                            <h6>Itunes</h6>
                            <img src={Itunes} alt='itunes' width={'100px'} />
                        </div>
                        <div className='col rounded-5 border'>
                            <h6>Amazon</h6>
                            <img src={Amazon} alt='itunes' width={'100px'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default selectgift