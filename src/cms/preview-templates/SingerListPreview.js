import React from 'react'
import PropTypes from 'prop-types'

//this is the container used by the CMS:::

//grab template subcomponent from videolist
import { SingerListTemplate } from './../../components/singerlist'

const SingerPageTemplate = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <div className="previewPanel">
      <SingerListTemplate singerListData={data} />
    </div>
  )
}

SingerPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SingerPageTemplate
