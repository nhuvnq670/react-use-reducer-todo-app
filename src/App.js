import React, { useState, useReducer } from 'react'
import Todo from './components/Todo'

const ACTIONS = {
  ADD_TODO: 'add-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todoText)]
    default:
      return todos
  }
}

function newTodo(todoText) {
  return { id: Date.now(), todoText: todoText, completed: false }
}

export default function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: ACTIONS.ADD_TODO, payload: { todoText: todoText } })
    setTodoText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todoText} onChange={e => setTodoText(e.target.value)} />
      </form>

      {
        todos.map(todo => <Todo key={todo.id} {...todo} />)
      }
    </>
  )
}
