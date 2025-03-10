import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem({newItem,setNewItem,handleSubmit}) {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
        autoFocus
        id='additem'
        type='text'
        placeholder='addItem'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit'
        aria-label='Add item'>
            <FaPlus/> 
        </button>
    </form>
  )
}

export default AddItem