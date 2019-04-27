import React from 'react'
import { navigateTo } from 'gatsby-link'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Recaptcha from 'react-google-recaptcha'

import { HTMLContent } from './Content'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const ContactInfo = ({ contactInfoData }) => {
  const { contactEmail, contactPhone, contactAddress } = contactInfoData
  const PageContent = HTMLContent

  return (
    <section className="split">
      <section>
        <div className="contact-method">
          <span className="icon alt fa-envelope" />
          <h3>Email</h3>
          <a href={`mailto:${contactEmail}`}>{`${contactEmail}`}</a>
        </div>
      </section>
      <section>
        <div className="contact-method">
          <span className="icon alt fa-phone" />
          <h3>Phone</h3>
          <span>{`${contactPhone}`}</span>
        </div>
      </section>
      <section>
        <div className="contact-method">
          <span className="icon alt fa-home" />
          <h3>Address</h3>
          <span>
            <PageContent content={`${contactAddress}`} />
          </span>
        </div>
      </section>
    </section>
  )
}

class Contact extends React.Component {
  state = {}

  componentDidMount() {
    configureAnchors({ offset: -50, scrollDuration: 500 })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section id="contact">
        <ScrollableAnchor id={'contact-form'}>
          <div className="inner">
            <section>
              <form
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                action="/Success"
                name="contact"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6" />
                </div>

                <div className="field">
                  <Recaptcha
                    ref="recaptcha"
                    sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                  />
                </div>

                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="special"
                      onSubmit={this.handleSubmit}
                    />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form>
            </section>
            <ContactInfo contactInfoData={this.props} />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}

export default Contact
