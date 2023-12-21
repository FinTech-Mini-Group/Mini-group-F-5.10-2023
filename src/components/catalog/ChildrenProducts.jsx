import React from 'react'

function ChildrenProducts(props) {
  return (
    <div className={props.title === 'Товары для детей' ? 'block' : 'hidden'}>ChildrenProducts</div>
  )
}

export default ChildrenProducts