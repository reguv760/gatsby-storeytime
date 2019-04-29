import React from 'react'
import PropTypes from 'prop-types'

import { HTMLContent } from './../../components/Content'
import { DonatePageTemplate } from './../../templates/donate-page'

const DonatePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const { title, body, paypalID } = data

  return (
    <div className="previewPanel">
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={body}
        paypalID={paypalID}
      />
    </div>
  )
}

DonatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default DonatePreview
