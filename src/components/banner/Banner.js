import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../Content'

const Banner = ({ bannerTitle, bannerText }) => {
  console.log(bannerTitle + ' found in Banner.js')

  console.log(bannerText + ' found in Banner.js')

  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>{bannerTitle}</h1>
        </header>
        <div className="content">
          <p>{bannerText}</p>
          <ul className="actions">
            <li>
              <a href="#one" className="button next scrolly">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Banner }
