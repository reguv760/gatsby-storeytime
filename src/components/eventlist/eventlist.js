import React from 'react'
import { HTMLContent } from './../Content'

import { Paypal } from './../paypal/'

// styles
// import './eventlist.css'
import { Card } from '../elements/Card'

export const EventListTemplate = ({ eventListData }) => {
  const eventItems = [eventListData.event][0]

  const paypalID = eventListData.paypalID

  const PageContent = HTMLContent

  return (
    <div className="grid-wrapper">
      <div className="col-4">
        <h2>Donate Today</h2>
        <p>
          Storeytime shares their story, music and message at autism events,
          schools and other public programs with no expectation of payment.
          Storeytime Inc. is currently in need of funding in order to help pay
          for travel expenses, musical equipment, musicians, website
          maintenance, recordings, and administrative needs. Thank you so much
          for your generous support!
        </p>
        <Paypal paypalID={paypalID} />
      </div>
      <div className="col-8">
        {eventItems.map((eventItem, index) => (
          <>
            <Card>
              {/* media container */}
              <div className="card-object-container">
                <div
                  className="card-object"
                  style={{
                    backgroundImage: `url(${eventItem.eventImage})`,
                  }}
                />
              </div>
              {/* body container */}
              <div className="card-body">
                <div className="card-body-top">
                  <span className="subtle">{eventItem.eventStartTime}</span>
                </div>
                <span className="card-body-heading">{eventItem.eventName}</span>
                <div className="card-body-supporting-bottom">
                  <span className="card-body-supporting-bottom-text subtle">
                    {eventItem.eventStreet} {eventItem.eventCity}{' '}
                    {eventItem.eventState} {eventItem.eventZip}
                  </span>
                  <span className="card-body-supporting-bottom-text subtle u-float-right">
                    ${eventItem.eventFee}
                  </span>
                </div>
                <div className="card-body-supporting-bottom card-body-supporting-bottom-reveal">
                  <a
                    href="#/"
                    className="card-body-supporting-bottom-text card-media-link u-float-right"
                  >
                    VIEW EVENT
                  </a>
                </div>
              </div>
            </Card>
          </>
        ))}
      </div>
    </div>
  )
}

const EventList = ({ eventListData }) => {
  return <EventListTemplate eventListData={eventListData} />
}

export { EventList }
