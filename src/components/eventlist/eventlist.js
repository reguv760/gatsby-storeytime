import React from 'react'
import { HTMLContent } from './../Content'

import { Paypal } from './../paypal/'

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
          {eventItems.map((events, index) => (
            <div
              className="col-12"
              key={events.name + index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0',
              }}
            >
              <div className="col-6" style={{ padding: '0 1rem' }}>
                {events.image.length > 0 && <img src={`${events.image}`} />}
              </div>
              <div className="col-6" style={{ padding: '0 1rem' }}>
                <h2>{events.name}</h2>
                <p>
                  <span>
                    <strong>Event Date:</strong> {events.eventdate}
                  </span>
                  <br />
                  <span>
                    <strong>Event Start Time:</strong> {events.starttime}
                  </span>
                </p>
                <PageContent className="singerDesc" content={events.body} />
              </div>
            </div>
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
