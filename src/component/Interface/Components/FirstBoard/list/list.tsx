import React from 'react'
import './list.scss'
function list() {
  return (
    <div className='container-fluid mt-3'>
      <div className='bg-white row row-cols-2 row-cols-xl-4 p-3'>
        <div className="col"> <button className='btn btn-purple mb-2 w-100'>Auto pay</button></div>
        <div className="col">  <button className='btn btn-purple mb-2 w-100'>Transactions</button></div>
        <div className="col">  <button className='btn btn-purple mb-2 w-100'>Account details</button></div>
        <div className="col"> <button className='btn btn-purple mb-2 w-100'>priceXchange</button></div>
        

      </div>
    </div>
  )
}

export default list