import React from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from './../../components/Content'
import styled from 'styled-components'

//this is the container used by the CMS:::

//grab template subcomponent from videolist
import { VideoListTemplate } from './../../components/videolist'

const PreviewStyle = styled.div`
  margin: 1rem;
`

const VideoPageTemplate = ({ PreviewStyle, entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div className="previewPanel" style={{ PreviewStyle }}>
      <VideoListTemplate videoListData={data} />
    </div>
  )
}

VideoPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default VideoPageTemplate
