import React from 'react'
import './videolist.css'

export const VideoListTemplate = ({ videoListData }) => {
  //this is my video array data location
  const videoItems = [videoListData.videos][0]

  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{
          listStyle: 'none',
          margin: '2rem 0 1rem 0',
        }}
      >
        {videoItems.map((videos, index) => (
          <div className="col-6">
            <div className="video-media" key={videos.videoTitle + index}>
              <div className="video-media-object-container">
                <iframe
                  title={`${videos.videoTitle}`}
                  src={`${videos.videoLink}`}
                  className="video-media-object"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="video-media-body">
                <h3>
                  <span className="video-media-body-heading">
                    {videos.videoTitle}
                  </span>
                </h3>
              </div>
            </div>
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
