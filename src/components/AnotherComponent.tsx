import React from 'react'
import useCounterStore from '../store/hooks/useCounterStore'

const AnotherComponent = () => {

  const counterStore = useCounterStore();
  
  return (
    <div>
      <h1>This is another component</h1>
      <h3>Value: {counterStore.getStoreValue()}</h3>
    </div>
  )
}

export default AnotherComponent