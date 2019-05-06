import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './../components/layout'
import { Banner } from './../components/banner'
import { HomeNav } from './../components/homeNav/'
import HomeContent from './../components/HomeContent'

//this is my template for CMS:::
//to access child component, parent component
//has to be accessible.
export const HomePageTemplate = ({ bannerData, homeNavImages }) => {
  const bannerEnabled = bannerData.bannerEnabled

  return (
    <section className="pageSection">
      {bannerEnabled && <Banner bannerData={bannerData} />}
      <HomeNav homeNavImages={homeNavImages} />
      <HomeContent />
    </section>
  )
}

//define custom data object from graphQL
HomePageTemplate.propTypes = {
  bannerData: PropTypes.object,
}

//this is my component:::
const HomeIndex = ({ data }) => {
  //store data as markdownRemarks: post
  const { markdownRemark: post } = data

  return (
    <Layout contactEnabled={true}>
      <Helmet title={data.site.siteMetadata.title}>
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>
      <HomePageTemplate
        bannerData={post.frontmatter}
        homeNavImages={post.frontmatter.homeNavImages}
      />
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

//find the data for child component
//query for layout component to pass down to footer
export const homeQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        bannerEnabled
        bannerTitle
        bannerText
        bannerSlogan
        homeNavImages {
          bgImage
          imageTitle
          imageText
          pagePath
        }
      }
    }
  }
`
