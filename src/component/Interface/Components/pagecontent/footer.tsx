import { faCircleDollarToSlot, faHome, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div>
      <div className='card pt-3 pb-3'>
        <div className='row'>
          <div className='col'><FontAwesomeIcon icon={faHome} /> <div>Home</div> </div>
          <div className='col'>
            <Link to={'/GiftCard'} className="text-dark nav-link"><FontAwesomeIcon icon={faCircleDollarToSlot} /><div className='position-relative'>GiftsCards<span className="position-absolute top-2 translate-middle badge bg-danger">
              New
              <span className="visually-hidden">unread messages</span>
            </span></div></Link></div>
          <div className='col'><FontAwesomeIcon icon={faUser} /><div>Profile</div></div>
          <div className='col'><FontAwesomeIcon icon={faInfoCircle} /><div>Support</div></div>
        </div>
      </div>
    </div>
  )
}

export default footer