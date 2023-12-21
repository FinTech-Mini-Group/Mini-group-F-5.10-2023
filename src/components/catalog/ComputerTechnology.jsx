import React from 'react'

function ComputerTechnology(props) {
  return (
    <div className={props.title === 'Компьютерная техника' ? 'block' : 'hidden'}>ComputerTechnology</div>
  )
}

export default ComputerTechnology