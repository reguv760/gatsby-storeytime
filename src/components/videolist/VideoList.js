import React from 'react'

export const VideoListTemplate = ({ videoListData }) => {
  //this is my video array data location
  const videoItems = [videoListData.videos][0]

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{ listStyle: 'none', margin: '1rem' }}
      >
        {videoItems.map((videos, index) => (
          <div className="col-4" key={videos.videoTitle + index}>
            <iframe
              title={`${videos.videoTitle}`}
              width="320"
              height="240"
              src={`${videos.videoLink}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
            <h4>{videos.videoTitle}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

const VideoList = ({ videoListData }) => {
  return (
    <section>
      <VideoListTemplate videoListData={videoListData} />
    </section>
  )
}

export { VideoList }
