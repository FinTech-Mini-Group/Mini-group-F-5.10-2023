import React from 'react'

function PhotoVideo(props) {
  return (
    <div className={props.title === 'Фото и видео' ? 'block' : 'hidden'}>PhotoVideo</div>
  )
}

export default PhotoVideo