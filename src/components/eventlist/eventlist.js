import React from 'react'
import { HTMLContent } from './../Content'

import { Paypal } from './../paypal/'

// styles
import './eventlist.css'

export const EventListTemplate = ({ eventListData }) => {
  const eventItems = [eventListData.event][0]

  const paypalID = eventListData.paypalID

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
        <div className="col-3">
          <h2>Donate Today</h2>
          <p>
            Storeytime shares their story, music and message at autism events,
            schools and other public programs with no expectation of payment.
            Storeytime Inc. is currently in need of funding in order to help pay
            for travel expenses, musical equipment, musicians, website
            maintenance, recordings, and administrative needs. Thank you so much
            for your generous support!
          </p>
          <Paypal
            paypalID={paypalID}
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
        <div className="col-9">
          {eventItems.map((eventItem, index) => (
            <>
              <div className="card-media">
                {/* media container */}
                <div className="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage: `url(${eventItem.eventImage})`,
                    }}
                  />
                </div>
                {/* body container */}
                <div className="card-media-body">
                  <div className="card-media-body-top">
                    <span className="subtle">{eventItem.eventStartTime}</span>
                  </div>
                  <span className="card-media-body-heading">
                    {eventItem.eventName}
                  </span>
                  <div className="card-media-body-supporting-bottom">
                    <span className="card-media-body-supporting-bottom-text subtle">
                      {eventItem.eventStreet} {eventItem.eventCity}{' '}
                      {eventItem.eventState} {eventItem.eventZip}
                    </span>
                    <span className="card-media-body-supporting-bottom-text subtle u-float-right">
                      ${eventItem.eventFee}
                    </span>
                  </div>
                  <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <a
                      href="#/"
                      className="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      VIEW EVENT
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

const EventList = ({ eventListData }) => {
  return (
    <section>
      <EventListTemplate eventListData={eventListData} />
    </section>
  )
}

export { EventList }
