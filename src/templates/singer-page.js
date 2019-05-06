import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'

import { SingerList } from './../components/singerlist'

//this is the container for CMS data for Singer.
export const SingerPageTemplate = ({ singerListData }) => {
  return (
    <>
      <header className="major">
        <h1>The Singers</h1>
      </header>
      <SingerList singerListData={singerListData} />
    </>
  )
}

SingerPageTemplate.propTypes = {
  singerListData: PropTypes.object,
}

// this is the page container for Singer
const SingerPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout contactEnabled={true}>
      <Helmet title={'Singers : ' + `${data.site.siteMetadata.title}`}>
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>
      <SingerPageTemplate singerListData={post.frontmatter} />
    </Layout>
  )
}

SingerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SingerPage

export const singerPageQuery = graphql`
  query SingerPage {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "singer-page" } }) {
      frontmatter {
        singer {
          name
          image
          body
        }
      }
    }
  }
`
