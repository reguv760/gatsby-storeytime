import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../Content'

const Banner = ({ data }) => {
  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>Hi, my name is Forty</h1>
        </header>
        <div className="content">
          <p>
            A responsive site template designed by HTML5 UP
            <br />
            and released under the Creative Commons.
          </p>
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
