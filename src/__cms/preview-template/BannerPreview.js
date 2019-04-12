import React from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from './../../components/Content'

import { BannerTemplate } from './../../components/banner'

const BannerPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('banner preview!')
  return <BannerTemplate data={data} />
}

BannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BannerPreview
