import React from 'react'
import { Link } from 'gatsby'
//import Helmet from 'react-helmet'

import Layout from './../components/layout'

//this is my component:::
const Success = () => {
  //post.frontmatter to access data object:::
  return (
    <Layout contactEnabled={false}>
      <section>
        <div className="inner">
          <p>Your form has been sent.</p>
          <Link to="/">Return to Homepage</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
