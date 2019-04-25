import React from 'react'
import PropTypes from 'prop-types'

import { BannerTemplate } from './../../components/banner'
import { ContactInfo } from './../../components/Contact'
import { FooterTemplate } from './../../components/footer'

const BannerPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const { socialIcons, designedBy, designLink } = data

  console.log(socialIcons)
  return (
    <div className="previewPanel">
      <BannerTemplate bannerData={data} />

      <br />
      <FooterTemplate
        socialIconData={socialIcons}
        designedBy={designedBy}
        designLink={designLink}
      />

      <br />

      <ContactInfo contactInfoData={data} />
    </div>
  )
}

BannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BannerPreview
