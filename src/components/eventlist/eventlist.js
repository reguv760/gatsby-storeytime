import React from 'react'
import { HTMLContent } from './../Content'

import { Paypal } from './../paypal/'

export const EventListTemplate = ({ eventListData }) => {
  const eventItems = [eventListData.event][0]

  const paypalID = eventListData.paypalID

  console.log(paypalID)

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
        <div className="col-3">
          <p>
            Ex est eiusmod fugiat tempor incididunt voluptate aliqua veniam
            cupidatat incididunt minim do aute. Minim anim deserunt adipisicing
            esse aliquip dolor veniam quis consequat Lorem excepteur cillum
            deserunt. Quis sunt tempor ex aute consectetur laborum eu excepteur
            duis exercitation sunt cillum. Sunt consequat qui consectetur
            adipisicing. Est nostrud qui labore deserunt. Pariatur officia
            dolore occaecat consectetur. Do ipsum nisi nisi do nostrud amet
            officia ipsum fugiat laborum. Est cillum commodo duis reprehenderit
            voluptate occaecat tempor aute irure proident sunt. Culpa ea in
            adipisicing cupidatat occaecat. Ut sit qui consequat ut cupidatat
            deserunt tempor cillum aute consectetur exercitation anim. Aliqua ad
            consectetur adipisicing ullamco ea eiusmod mollit enim exercitation
            labore.
          </p>
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
