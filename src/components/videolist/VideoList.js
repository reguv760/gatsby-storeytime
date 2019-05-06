import React from 'react'
import styled from 'styled-components'

const VideoListStyle = styled.div`
  border: 2px dashed #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  height: 325px;
  margin-bottom: 25px;
  transition: all 300ms ease-out;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 980px) {
    height: calc(100% + 200px);
    margin-top: 25px;
  }

  .video-media-object-container {
    height: 100%;
    width: 60%;

    @media screen and (max-width: 980px) {
      width: 100%;
      height: 375px;
    }

    .video-media-object {
      background-position: 0 0;
      background-size: cover;
      height: 100%;
    }
  }

  .video-media-body {
    background-color: #fff;
    height: 100%;
    padding: 12px 15px;
    width: 40%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 980px) {
      width: 100%;
    }
  }

  .video-media-body-top {
    display: block;
  }

  .video-media-body-heading {
    display: block;
    margin-top: 10px;
    color: #000;
    line-height: 1.2em;
  }
`

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
            <VideoListStyle key={videos.videoTitle + index}>
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
            </VideoListStyle>
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
