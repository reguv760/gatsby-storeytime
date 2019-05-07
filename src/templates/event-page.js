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
      <header className="major">
        <h1>Events</h1>
      </header>
      <EventList eventListData={eventListData} />
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
        title={'Events : ' + `${data.site.siteMetadata.title}`}
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>
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
        description
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
