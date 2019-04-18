import React from 'react'
import PropTypes from 'prop-types'

import { HTMLContent } from './../../components/Content'
import { AboutPageTemplate } from './../../templates/about-page'

const AboutPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const { title, body } = data

  console.log(data)
  return (
    <div className="previewPanel">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={body}
      />
    </div>
  )
}

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPreview
