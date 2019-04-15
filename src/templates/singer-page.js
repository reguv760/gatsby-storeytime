import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'

//this is the container for CMS data for About.
export const SingerPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div id="main" className="alt">
    <section className="section section--gradient">
        <div className="inner">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
        </div>
    </section>
    </div>
  )
}

SingerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

// this is the page container for Singer
const SingerPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SingerPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SingerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SingerPage

export const singerPageQuery = graphql`
  query SingerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
