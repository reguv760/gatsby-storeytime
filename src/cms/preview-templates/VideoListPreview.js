import React from 'react'
import PropTypes from 'prop-types'

//this is the container used by the CMS:::

//grab template subcomponent from videolist
import { VideoListTemplate } from './../../components/videolist'

const VideoPageTemplate = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div className="previewPanel">
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
