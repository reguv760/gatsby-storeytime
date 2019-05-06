import React from 'react'
import { HTMLContent } from '../Content'

export const BannerTemplate = ({ bannerData }) => {
  const bannerTitle = bannerData.bannerTitle
  const bannerText = bannerData.bannerText

  const bannerSlogan = bannerData.bannerSlogan

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <header className="major">
        <h1>
          <PageContent className="bannerTitle" content={bannerTitle} />
        </h1>
      </header>
      <div className="content">
        <div className="grid-wrapper">
          <div className="col-12">
            <h2 style={{ width: '100%' }}>{bannerSlogan}</h2>
          </div>
          <div className="col-12">
            <PageContent className="bannerText" content={bannerText} />
          </div>
        </div>
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
