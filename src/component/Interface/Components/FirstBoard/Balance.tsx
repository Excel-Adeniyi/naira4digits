import React from 'react'
import './balance.scss'
import List from './list/list'
function Balance() {
    return (
        <>
            <div className='balance mb-5'>
                <h5>Balance</h5>
                <h3>N 250,900.50</h3>
                <div className='justify-content-center'>
                    <div className='row row-cols-lg-4 justify-content-center row-cols-xl-5 row-cols-md-5 row-cols-sm-5'>
                        <div className="col">
                            <button className="btn btn-light">Deposit</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light">Withdraw</button>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <List />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Balance