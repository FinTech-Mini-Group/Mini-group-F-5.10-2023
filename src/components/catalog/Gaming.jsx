import React from 'react'

function Gaming(props) {
  return (
    <div className={props.title === 'Игровые приставки' ? 'block' : 'hidden'}>Gaming</div>
  )
}

export default Gaming