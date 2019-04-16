import React from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from './../../components/Content'
import styled from 'styled-components'

import { BannerTemplate } from './../../components/banner'

const PreviewStyle = styled.div`
  margin: 1rem;
`

const BannerPreview = ({ PreviewStyle, entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div className="previewPanel" style={{ PreviewStyle }}>
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
