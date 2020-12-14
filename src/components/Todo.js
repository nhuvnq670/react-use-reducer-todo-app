import React from 'react'
import { ACTIONS } from "../App.js";

export default function Todo({ id, todoText, completed, dispatch }) {
  return (
    <>
      <div>
        <label style={{ color: completed ? '#dcdcdc' : '#000' }}>{todoText}</label>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })}>Toggle</button>
        <button>Delete</button>
      </div>
    </>
  )
}
