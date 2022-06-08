import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Loginback from '../../img/new/N4D Purple.png'
import BottomNav from '../BottomNav'

function login() {
  return (

<Logindiv className="pt-5 pb-5 d-flex justify-content-center">
  <div className='col-11'>
    <div className='container  col-lg-3 col-sm-3 border pt-3 pb-3 bg-light'>
    <a href='/'><img src={Loginback} alt='set' width="100"/></a>
      <form className='pt-5 pb-5'>
        <div className='mb-3 pe-5 ps-5'>
          <label className='form-label text-start'>Email Address</label>
          <input className='form-control' style={{backgroundColor: "#9e949f"}}  aria-describedby='emailHelp' type={'email'} placeholder="Enter Email"/>
        </div>
        <div className='mb-3 pe-5 ps-5'>
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input className='form-control' type={'password'} style={{backgroundColor: "#9e949f"}} placeholder="Enter Password" />
          <div className='form-text'>forget password? <a href='/forget'>Click here</a></div>
        </div>
        <div className='mb-3'>
            <button className='btn' style={{background: '#835ba4', color: "white"}}>Login</button>
            <div className='form-text'>Don't have an account? <a>Register</a></div>
        </div>

      <div className='mb-3 row '><div className='col'><button className='btn btn-dark'>Continue with <FontAwesomeIcon icon={faFacebook}/></button></div>
      <div className='col'><button className='btn btn-danger'>Continue with <FontAwesomeIcon icon={faGoogle}/></button></div> </div>
      </form>
    </div>
    </div>
    </Logindiv>
  
    
  
  )
}

export default login

const Logindiv = styled.div`
background-color: black

`