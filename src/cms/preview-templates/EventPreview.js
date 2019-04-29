import React from 'react'
import PropTypes from 'prop-types'

import { EventPageTemplate } from './../../templates/event-page'

const EventPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const { event } = data
  console.log(event)
  return (
    <div className="previewPanel">
      {/* <EventPageTemplate eventListData={data} /> */}
    </div>
  )
}

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default EventPreview
