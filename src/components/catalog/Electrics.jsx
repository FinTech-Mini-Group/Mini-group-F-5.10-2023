import React from 'react'

function Electrics(props) {
  return (
    <div className={props.title === 'Электроника' ? 'block' : 'hidden'}>Electrics</div>
  )
}

export default Electrics