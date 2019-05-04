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
          <div className="card-media">
            {/* media container */}
            <div className="card-media-object-container">
              <div
                className="card-media-object"
                style={{
                  backgroundImage: 'url(/assets/patrick-on-mic.png)',
                }}
              />
              <span className="card-media-object-tag subtle">Selling Fast</span>
            </div>
            {/* body container */}
            <div className="card-media-body">
              <div className="card-media-body-top">
                <span className="subtle">Mon, APR 09, 7:00 PM</span>
              </div>
              <span className="card-media-body-heading">
                This Thing Called Life: A Celebration of Prince and His Legacy
                at MEZZANINE SF
              </span>
              <div className="card-media-body-supporting-bottom">
                <span className="card-media-body-supporting-bottom-text subtle">
                  Mezzanine, San Francisco, CA
                </span>
                <span className="card-media-body-supporting-bottom-text subtle u-float-right">
                  Free &ndash; $30
                </span>
              </div>
              <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                <span className="card-media-body-supporting-bottom-text subtle">
                  #Music #Party
                </span>
                <a
                  href="#/"
                  className="card-media-body-supporting-bottom-text card-media-link u-float-right"
                >
                  VIEW TICKETS
                </a>
              </div>
            </div>
          </div>

          <div className="card-media">
            {/* media container */}
            <div className="card-media-object-container">
              <div
                className="card-media-object"
                style={{
                  backgroundImage:
                    'url(https://s16.postimg.cc/x8m99xtgl/tyco_f.jpg)',
                }}
              />
              <ul className="card-media-object-social-list">
                <li>
                  <img src="https://s13.postimg.cc/c5aoiq1w7/stock3_f.jpg" />
                </li>
              </ul>
            </div>
            {/* body container */}
            <div className="card-media-body">
              <div className="card-media-body-top">
                <span className="subtle">Mon, APR 09, 7:00 PM</span>
                <div className="card-media-body-top-icons u-float-right">
                  <svg
                    fill="#888888"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                  <svg
                    fill="#888888"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              <span className="card-media-body-heading">
                DAY // NIGHT - Tycho (Live) w/ Gold Panda, Com Truise + More at
                1015 Folsom
              </span>
              <div className="card-media-body-supporting-bottom">
                <span className="card-media-body-supporting-bottom-text subtle">
                  1015 Folsom, San Francisco, CA
                </span>
                <span className="card-media-body-supporting-bottom-text subtle u-float-right">
                  $25 &ndash; $80
                </span>
              </div>
              <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                <span className="card-media-body-supporting-bottom-text subtle">
                  #Music #Performance
                </span>
                <a
                  href="#/"
                  className="card-media-body-supporting-bottom-text card-media-link u-float-right"
                >
                  VIEW TICKETS
                </a>
              </div>
            </div>
          </div>
          {eventItems.map((events, index) => (
            <>
              <div className="card-media">
                {/* media container */}
                <div className="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        'url(https://s9.postimg.cc/y0sfm95gv/prince_f.jpg)',
                    }}
                  />
                  <span className="card-media-object-tag subtle">
                    Selling Fast
                  </span>
                  <ul className="card-media-object-social-list">
                    <li>
                      <img src="https://s10.postimg.cc/3rjjbzcvd/profile_f.jpg" />
                    </li>
                    <li>
                      <img src="https://s16.postimg.cc/b0j0djh79/profile_0_f.jpg" />
                    </li>
                    <li className="card-media-object-social-list-item-additional">
                      <span>+2</span>
                    </li>
                  </ul>
                </div>
                {/* body container */}
                <div className="card-media-body">
                  <div className="card-media-body-top">
                    <span className="subtle">{events.starttime}</span>
                    <div className="card-media-body-top-icons u-float-right">
                      <svg
                        fill="#888888"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                      </svg>
                      <svg
                        fill="#888888"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <span className="card-media-body-heading">
                    This Thing Called Life: A Celebration of Prince and His
                    Legacy at MEZZANINE SF
                  </span>
                  <div className="card-media-body-supporting-bottom">
                    <span className="card-media-body-supporting-bottom-text subtle">
                      Mezzanine, San Francisco, CA
                    </span>
                    <span className="card-media-body-supporting-bottom-text subtle u-float-right">
                      Free &ndash; $30
                    </span>
                  </div>
                  <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <span className="card-media-body-supporting-bottom-text subtle">
                      #Music #Party
                    </span>
                    <a
                      href="#/"
                      className="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      VIEW TICKETS
                    </a>
                  </div>
                </div>
              </div>
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
