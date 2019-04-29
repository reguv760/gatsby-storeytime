import React from 'react'
import PropTypes from 'prop-types'

import { EventListTemplate } from './../../components/eventlist'

const EventPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  //console.log(data)
  return (
    <div className="previewPanel">
      <EventListTemplate eventListData={data} />
    </div>
  )
}

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default EventPreview
