import React from 'react'
import useCounterStore from '../../store/hooks/useCounterStore'
import ChildNestComponent2 from './ChildNestComponent2';

const ChildNestComponent = () => {
  const counterStore = useCounterStore();

  return (
    <div>
      <h3>Child nested component 1</h3>
      {counterStore.getStoreValue()}

      <ChildNestComponent2 />      
    </div>
  )
}

export default ChildNestComponent