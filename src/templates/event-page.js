import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
//import Content, { HTMLContent } from '../components/Content'

import { EventList } from './../components/eventlist'

//this is the container for CMS data for Event.
export const EventPageTemplate = ({ eventListData }) => {
  return (
    <>
      <section
        className="section section--gradient"
        style={{ paddingTop: '2rem' }}
      >
        <EventList eventListData={eventListData} />
      </section>
    </>
  )
}

EventPageTemplate.propTypes = {
  eventListData: PropTypes.object,
}

// this is the page container for Singer
const EventPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout contactEnabled={true}>
      <Helmet
        title={`Events : ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <EventPageTemplate eventListData={post.frontmatter} />
    </Layout>
  )
}

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventPage

export const eventPageQuery = graphql`
  query eventPage {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "event-page" } }) {
      frontmatter {
        paypalID
        event {
          eventName
          eventStatus
          eventDate
          eventStartTime
          eventEndTime
          eventImage
          eventFee
          eventStreet
          eventCity
          eventState
          eventZip
          eventContactName
          eventContactPhone
          eventDesc
          eventSpecialNotes
        }
      }
    }
  }
`
