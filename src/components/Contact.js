import React from 'react'
import { navigateTo } from 'gatsby-link'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
// import Recaptcha from 'react-google-recaptcha'

import { FormErrors } from './FormError'

import { HTMLContent } from './Content'

//const RecaptchaKey = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/* contact template */
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
  state = {
    name: '',
    email: '',
    message: '',
    recaptchaChecked: null,
    formErrors: { name: '', email: '', message: '' },
    nameValid: false,
    emailValid: false,
    messageValid: false,
    formValid: false,
  }

  componentDidMount() {
    configureAnchors({ offset: -50, scrollDuration: 500 })
  }

  // handleRecaptcha = value => {
  //   this.setState({ 'g-recaptcha-response': value, recaptchaChecked: true })
  // }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    if (
      this.state.formValid &&
      this.state['g-recaptcha-response'] &&
      this.state.recaptchaChecked === true
    ) {
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
    } else {
      this.setState({ recaptchaChecked: false })
    }
  }

  /* validate form */

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let nameValid = this.state.nameValid
    let emailValid = this.state.emailValid
    let messageValid = this.state.messageValid

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'name':
        nameValid = value.length >= 1
        fieldValidationErrors.name = nameValid ? '' : ' cannot be blank'
        break

      case 'message':
        messageValid = value.length >= 1
        fieldValidationErrors.message = messageValid ? '' : ' cannot be blank'
      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        messageValid: messageValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.messageValid,
    })
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error'
  }

  render() {
    return (
      <section id="contact">
        <ScrollableAnchor id={'contact-form'}>
          <div className="inner">
            <section>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                action="/Success/"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div
                  className={`field half first ${this.errorClass(
                    this.state.formErrors.name
                  )}`}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                  />
                </div>
                <div
                  className={`field half ${this.errorClass(
                    this.state.formErrors.name
                  )}`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    onChange={this.handleChange}
                  />
                </div>

                {/* <div className="field"> */}
                {/*   <Recaptcha */}
                {/*     ref="recaptcha" */}
                {/*     sitekey={RecaptchaKey} */}
                {/*     onChange={this.handleRecaptcha} */}
                {/*   /> */}
                {/* </div> */}

                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="special"
                      disabled={!this.state.formValid}
                    />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form>

              <FormErrors formErrors={this.state.formErrors} />

              {/* {!this.state.recaptchaChecked && */}
              {/*   this.state.recaptchaChecked !== null && ( */}
              {/*     <p style={{ color: 'red', fontWeight: 'bold' }}> */}
              {/*       Please Check Captcha */}
              {/*     </p> */}
              {/*   )} */}
            </section>
            <ContactInfo contactInfoData={this.props} />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}

export default Contact
