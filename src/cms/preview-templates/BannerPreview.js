import React from 'react'
import PropTypes from 'prop-types'

import { BannerTemplate } from './../../components/banner'

const BannerPreview = ({ PreviewStyle, entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div className="previewPanel">
      <BannerTemplate bannerData={data} />
    </div>
  )
}

BannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BannerPreview
