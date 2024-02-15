import React from 'react'

function Sport(props) {
  return (
    <div className={props.title === 'Спорт и увлечение' ? 'block' : 'hidden'}>Sport</div>
  )
}

export default Sport