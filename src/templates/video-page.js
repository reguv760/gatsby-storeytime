import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './../components/layout'
import { Banner } from './../components/banner'
import HomeNav from './../components/HomeNav'
import HomeContent from './../components/HomeContent'

//this is my template for CMS:::
//to access child component, parent component
//has to be accessible.
export const VideoPageTemplate = ({ videoPlaylist }) => {
  return (
    <>
      <div id="main">
        <HomeNav />
        <HomeContent />
      </div>
    </>
  )
}

//define custom data object from graphQL
VideoPageTemplate.propTypes = {
  videoPlaylist: PropTypes.object,
}

//this is my component:::
const Video = ({ data }) => {
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
      <VideoPageTemplate />
    </Layout>
  )
}

//assign frontmatter content as a data prop
Video.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Video

//find the data for child component
export const homeQuery = graphql`
  query VideoTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "video-page" } }) {
      frontmatter {
        videoPlaylist {
          videoTitle
          videoLink
        }
      }
    }
  }
`
