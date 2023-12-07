import React from 'react'

function Description(props) {
   
  return (
    <div className={props.title === 'Описание' ? 'block' : 'hidden'}>
      <h2>salom</h2>
    </div>
  )
}

export default Description