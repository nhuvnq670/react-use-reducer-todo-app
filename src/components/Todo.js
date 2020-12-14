import React from 'react'

export default function Todo({ todoText, completed }) {
  return (
    <>
      <div>
        <label style={{ color: completed ? '#dcdcdc' : '#000' }}>{todoText}</label>
        <button>Toggle</button>
        <button>Delete</button>
      </div>
    </>
  )
}
