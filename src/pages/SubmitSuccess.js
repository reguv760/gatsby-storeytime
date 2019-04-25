import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from './../components/layout'

//this is my component:::
const SubmitSuccess = () => {
  //post.frontmatter to access data object:::
  return (
    <div className="grid-wrapper">
      <div className="col-6">
        <p>Your form has been sent.</p>
      </div>
      <div className="col-6">
        <Link to="/">Return to Homepage</Link>
      </div>
    </div>
  )
}

export default SubmitSuccess
