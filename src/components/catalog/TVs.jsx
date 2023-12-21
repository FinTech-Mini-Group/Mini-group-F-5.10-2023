import React from 'react'

function TVs(props) {
  return (
    <div className={props.title === 'Телевизоры и телекарты' ? 'block' : 'hidden'}>TVs</div>
  )
}

export default TVs