import React from 'react'
import { HTMLContent } from './../Content'

import './singerlist.css'

export const SingerListTemplate = ({ singerListData }) => {
  //this is my video array data location
  const singerItems = [singerListData.singer][0]

  const PageContent = HTMLContent

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
        {singerItems.map((singers, index) => (
          <div
            className="col-12"
            key={singers.name + index}
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              margin: '2rem 0',
            }}
          >
            <div className="singers-left">
              {singers.image.length > 0 && <img src={`${singers.image}`} />}
            </div>
            <div className="singers-right">
              <h2>{singers.name}</h2>
              <PageContent className="singerDesc" content={singers.body} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SingerList = ({ singerListData }) => {
  return (
    <section>
      <SingerListTemplate singerListData={singerListData} />
    </section>
  )
}

export { SingerList }
