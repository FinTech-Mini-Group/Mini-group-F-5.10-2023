import React from 'react'

function OfficeEquipment(props) {
  return (
    <div className={props.title === 'Офисная техника' ? 'block' : 'hidden'}>OfficeEquipment</div>
  )
}

export default OfficeEquipment