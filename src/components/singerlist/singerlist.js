import React from 'react'
import { HTMLContent } from './../Content'

export const SingerListTemplate = ({ singerListData }) => {
  //this is my video array data location
  const singerItems = [singerListData.singers][0]

  //console.log(singerItems)
  const PageContent = HTMLContent

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
        {singerItems.map((singers, index) => (
          <div className="col-12" key={singers.name + index}>
            <h2>{singers.name}</h2>

            {singers.image.length > 0 && <img src={`${singers.image}`} />}
            <PageContent className="singerDesc" content={singers.body} />
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
