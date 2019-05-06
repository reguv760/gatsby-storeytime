import React from 'react'

import styled from 'styled-components'

import amexIcon from './../../assets/images/icons/american-express-96.png'
import discoverIcon from './../../assets/images/icons/discover-96.png'
import mastercardIcon from './../../assets/images/icons/mastercard-96.png'
import paypalIcon from './../../assets/images/icons/paypal-96.png'
import visaIcon from './../../assets/images/icons/visa-96.png'

import donateButton from './../../assets/images/icons/donate-button_small.png'

import donateIcon from './../../assets/images/icons/receive-cash-96.png'

const DonateContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 325px;
`

const DonateStyles = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;

  li {
    input {
      width: 100%;
    }
  }
`

const DonateIcons = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`

const DonateButton = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  margin: 0 auto;
  padding: 0;
`

const Paypal = props => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        margin: '1rem 0',
      }}
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <br />
      <input name="hosted_button_id" type="hidden" value={props.paypalID} />
      <br />

      <div>
        <DonateButton>We accept donations through Paypal</DonateButton>
      </div>
      <br />
      <DonateContainer>
        <DonateIcons>
          <input type="image" src={donateIcon} />
        </DonateIcons>

        <DonateIcons>
          <input type="image" src={donateButton} />
        </DonateIcons>

        <DonateStyles>
          <li>
            <input type="image" src={visaIcon} alt="Visa Icon" />
          </li>
          <li>
            <input type="image" src={mastercardIcon} alt="Mastercard Icon" />
          </li>
          <li>
            <input type="image" src={paypalIcon} alt="Paypal Icon" />
          </li>
          <li>
            <input type="image" src={discoverIcon} alt="Discover Icon" />
          </li>
          <li>
            <input type="image" src={amexIcon} alt="American Express Icon" />
          </li>
        </DonateStyles>
      </DonateContainer>
    </form>
  )
}

export { Paypal }
