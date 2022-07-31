import React from 'react'
import useCounterStore from '../../store/hooks/useCounterStore';

const ChildNestComponent2 = () => {
  const counterStore = useCounterStore();

  return (
    <div>
      <h3>ChildNestComponent2</h3>
      {counterStore.getStoreValue()}
    </div>
  )
}

export default ChildNestComponent2