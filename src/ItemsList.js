import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ol className='ol'>
    {items.map((item) => (
        <LineItem
        item={item}
        key={item.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
    ))}
  </ol>
  )
}

export default ItemsList