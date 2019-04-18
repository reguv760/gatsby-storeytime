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
      <section className="section section--gradient">
        <SingerList singerListData={singerListData} />
      </section>
    </>
  )
}

SingerPageTemplate.propTypes = {
  singerListData: PropTypes.object,
}

// this is the page container for Singer
const SingerPage = ({ data }) => {
  const { markdownRemark: post } = data

  //console.log(post.frontmatter)
  return (
    <Layout>
      <Helmet
        title="Gatsby Starter - Forty"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
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
