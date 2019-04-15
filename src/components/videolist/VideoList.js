import React from 'react'

export const VideoListTemplate = ({ videoListData }) => {
  //this is my video array data location
  const videoItems = [videoListData.videos][0]

  return (
    <div className="inner">
      <ul style={{ listStyle: 'none' }}>
        {videoItems.map((videos, index) => (
          <li key={videos.videoTitle + index}>
            <h4>{videos.videoTitle}</h4>
            <p>{videos.videoLink}</p>
          </li>
        ))}
      </ul>
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
