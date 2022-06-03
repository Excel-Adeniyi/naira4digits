import React from 'react'
import styled from 'styled-components'
import trade from '../img/trade.jpg'

function content() {
  return (
    <DaveDiv>
        <div>
            <h3>Welcome to <span>Naira4Digits</span></h3>
            
        </div>
    </DaveDiv>
  )
}

export default content

const DaveDiv = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.709), rgba(0, 0, 0, 0.709), rgba(0, 0, 0, 0.709), rgba(242, 15, 178, 0.504)),url(${trade});
color: white
`