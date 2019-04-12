import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './../components/layout'
import { Banner } from './../components/banner'
import HomeNav from './../components/HomeNav'
import HomeContent from './../components/HomeContent'

//this is my template for CMS:::
export const HomePageTemplate = ({ bannerData }) => {
  return (
    <>
      <div>
        <Banner bannerData={bannerData} />
        <div id="main">
          <HomeNav />
          <HomeContent />
        </div>
      </div>
    </>
  )
}

HomePageTemplate.propTypes = {
  bannerData: PropTypes.object,
}

//this is my component:::
const HomeIndex = ({ data }) => {
  //store data as markdownRemarks: post
  const { markdownRemark: post } = data

  //post.frontmatter to access data object:::
  return (
    <Layout>
      <Helmet
        title="Gatsby Starter - Forty"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <HomePageTemplate bannerData={post.frontmatter} />
    </Layout>
  )
}

//assign frontmatter content as a data prop
HomeIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomeIndex

export const homeQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        bannerTitle
        bannerText
      }
    }
  }
`
