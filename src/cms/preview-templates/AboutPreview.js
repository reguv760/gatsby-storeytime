import React from 'react'
import PropTypes from 'prop-types'

import { HTMLContent } from './../../components/Content'
import { AboutPageTemplate } from './../../templates/about-page'

const AboutPreview = ({ entry }) => {
  const aboutTitle = entry.getIn(['data', 'aboutTitle'])
  const aboutBody = entry.getIn(['data', 'aboutBody'])

  console.log(data)

  return (
    <div className="previewPanel">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={aboutTitle}
        content={aboutBody}
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
