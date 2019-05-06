import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class HomeContent extends Component {
  render() {
    return (
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>The Singers</h2>
          </header>
          <p>
            Storeytime is a 5-voice group centered around Patrick Storey, an
            autistic singer with an incredible musical gift. The group shows
            what is possible for people with autism and other learning
            differences. Audiences are treated to an incredible, interactive
            performance where they can experience how Patrick communicates and
            thrives through his love for music. Through their inspiring
            presentation, audiences learn about patience, acceptance, nurturing,
            gratitude and more. Storeytime shares their story, music and message
            at autism events, schools and more. Contact Us to book Storeytime
            for your school or event.
          </p>
          <ul className="actions">
            <li>
              <Link to="/singers" className="button next">
                Singers
              </Link>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
