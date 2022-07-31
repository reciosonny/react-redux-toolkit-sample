import React from 'react'
import ChildNestComponent from './ChildNestComponent'

const NestedComponent = () => {
  return (
    <div>
      <h2>Nested component sample</h2>
      <ChildNestComponent />
    </div>
  )
}

export default NestedComponent