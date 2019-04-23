import React from 'react'
import { graphql } from 'gatsby'

const FooterTemplate = ({ socialIconData, designBy, designLink }) => {
  const socialIcons = socialIconData

  return (
    <div className="inner">
      <ul className="icons">
        {socialIcons[0].socialEnabled && (
          <li>
            <a
              href={`${socialIcons[0].socialLink}`}
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
        )}

        {socialIcons[1].socialEnabled && (
          <li>
            <a
              href={`${socialIcons[1].socialLink}`}
              className="icon alt fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        )}

        {socialIcons[2].socialEnabled && (
          <li>
            <a
              href={`${socialIcons[2].socialLink}`}
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
        )}

        {socialIcons[3].socialEnabled && (
          <li>
            <a
              href={`${socialIcons[3].socialLink}`}
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        )}

        {socialIcons[4].socialEnabled && (
          <li>
            <a
              href={`${socialIcons[4].socialLink}`}
              className="icon alt fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        )}
      </ul>
      <ul className="copyright">
        <li>&copy; Untitled</li>
        <li>
          Design: {''}
          <a href={`${designLink}`}>{`${designBy}`}</a>
        </li>
      </ul>
    </div>
  )
}

const Footer = ({ footerData, copyrightData }) => {
  const { socialIcons } = footerData
  const { designedBy, designLink } = copyrightData

  return (
    <footer id="footer">
      <FooterTemplate
        socialIconData={socialIcons}
        designBy={designedBy}
        designLink={designLink}
      />
    </footer>
  )
}

export { Footer }
