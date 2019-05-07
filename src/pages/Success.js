import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from './../components/layout'

//this is my component:::
const Success = ({ data }) => {
  //post.frontmatter to access data object:::
  return (
    <Layout contactEnabled={false}>
      <Helmet
        title={'Success : ' + `${data.site.siteMetadata.title}`}
        htmlAttributes={'en'}
      >
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>
      <section>
        <header className="major">
          <h1>Success</h1>
        </header>
        <div className="inner">
          <br />
          <p>Your form has been sent.</p>
          <Link to="/">Return to Home</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success

//find the data for child component
export const sucessQuery = graphql`
  query sucessTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
