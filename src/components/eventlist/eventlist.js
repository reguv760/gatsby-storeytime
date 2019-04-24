import React from 'react'
import { HTMLContent } from './../Content'

export const EventListTemplate = ({ eventListData }) => {
  const eventItems = [eventListData.event][0]

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
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
