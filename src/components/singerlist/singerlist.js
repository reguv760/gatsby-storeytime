import React from 'react'
import { HTMLContent } from './../Content'

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
              justifyContent: 'center',
              margin: '1rem 0',
            }}
          >
            <div className="col-6" style={{ padding: '0 1rem' }}>
              {singers.image.length > 0 && <img src={`${singers.image}`} />}
            </div>
            <div className="col-6" style={{ padding: '0 1rem' }}>
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
