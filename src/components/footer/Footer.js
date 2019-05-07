import React from 'react'
import { graphql } from 'gatsby'

export const FooterTemplate = ({
  socialIconData,
  designedBy,
  designLink,
  companyName,
}) => {
  return (
    <div className="inner">
      <ul className="icons">
        {socialIconData[0].socialEnabled && (
          <li>
            <a
              href={`${socialIconData[0].socialLink}`}
              className="icon alt fa-twitter"
              target="_blank"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
        )}

        {socialIconData[1].socialEnabled && (
          <li>
            <a
              href={`${socialIconData[1].socialLink}`}
              className="icon alt fa-facebook"
              target="_blank"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        )}

        {socialIconData[2].socialEnabled && (
          <li>
            <a
              href={`${socialIconData[2].socialLink}`}
              className="icon alt fa-instagram"
              target="_blank"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
        )}

        {socialIconData[3].socialEnabled && (
          <li>
            <a
              href={`${socialIconData[3].socialLink}`}
              className="icon alt fa-github"
              target="_blank"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        )}

        {socialIconData[4].socialEnabled && (
          <li>
            <a
              href={`${socialIconData[4].socialLink}`}
              className="icon alt fa-linkedin"
              target="_blank"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        )}
      </ul>
      <ul className="copyright">
        <li>&copy; {`${companyName}`}</li>
        <li>
          Design: {''}
          <a href={`${designLink}`} target="_blank" rel="noopener noreferrer">
            {`${designedBy}`}
          </a>
        </li>
      </ul>
    </div>
  )
}

const Footer = ({ footerData, designedBy, designLink, companyName }) => {
  return (
    <footer id="footer">
      <FooterTemplate
        socialIconData={footerData}
        designedBy={designedBy}
        designLink={designLink}
        companyName={companyName}
      />
    </footer>
  )
}

export { Footer }
