import React from 'react'

function BeautyHealth(props) {
  return (
    <div className={props.title === 'Красота и здоровье' ? 'block' : 'hidden'}>BeautyHealth</div>
  )
}

export default BeautyHealth