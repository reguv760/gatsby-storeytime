import React, { Component } from 'react'
import { Link } from 'gatsby'

export const HomeNavTemplate = props => {
  const homeBGImage = props.homeNavImages

  return (
    <section id="one" className="tiles">
      {homeBGImage.map((img, index) => (
        <article
          key={'homeNavImage' + `${index}`}
          style={{ backgroundImage: `url(${img.bgImage})` }}
        >
          <header className="major">
            <h3>{`${img.imageTitle}`}</h3>
            <p>{`${img.imageText}`}</p>
          </header>

          {img.pagePath !== '#contact-form' ? (
            <Link to={`${img.pagePath}`} className="link primary" />
          ) : (
            <a href={`${img.pagePath}`} className="link primary" />
          )}
        </article>
      ))}
    </section>
  )
}

const HomeNav = props => {
  return <HomeNavTemplate homeNavImages={props.homeNavImages} />
}

export { HomeNav }
