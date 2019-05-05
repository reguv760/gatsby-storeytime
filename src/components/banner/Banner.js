import React from 'react'
import { HTMLContent } from '../Content'

export const BannerTemplate = ({ bannerData }) => {
  const bannerTitle = bannerData.bannerTitle
  const bannerText = bannerData.bannerText

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <header className="major">
        <h1>
          <PageContent className="bannerTitle" content={bannerTitle} />
        </h1>
      </header>
      <div className="content">
        <PageContent className="bannerText" content={bannerText} />
      </div>
    </div>
  )
}

const Banner = ({ bannerData }) => {
  return (
    <section id="banner" className="major">
      <BannerTemplate bannerData={bannerData} />
    </section>
  )
}

export { Banner }
