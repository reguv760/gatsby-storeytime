import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { HTMLContent } from '../components/Content'

//this is the container for CMS data for About.
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent

  return (
    <div id="main" className="alt">
      <section
        className="section section--gradient"
        style={{ paddingTop: '2rem' }}
      >
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

// this is the page container for about
const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout contactEnabled={true}>
      <Helmet title={'About Us : ' + `${data.site.siteMetadata.title}`}>
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.aboutTitle}
        content={post.frontmatter.aboutBody}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        aboutTitle
        aboutBody
      }
    }
  }
`
