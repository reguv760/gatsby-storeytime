import React from 'react'
import PropTypes from 'prop-types'

import { BannerTemplate } from './../../components/banner'
import { HomeNavTemplate } from './../../components/homeNav'
import { ContactInfo } from './../../components/Contact'
import { FooterTemplate } from './../../components/footer'

const HomePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const {
    socialIcons,
    designedBy,
    designLink,
    companyName,
    homeNavImages,
  } = data

  return (
    <div className="previewPanel">
      <BannerTemplate bannerData={data} />

      <br />

      <HomeNavTemplate homeNavImages={homeNavImages} />

      <br />

      <FooterTemplate
        socialIconData={socialIcons}
        designedBy={designedBy}
        designLink={designLink}
        companyName={companyName}
      />

      <br />

      <ContactInfo contactInfoData={data} />
    </div>
  )
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default HomePreview
