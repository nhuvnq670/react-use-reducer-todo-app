import React, { useState, useReducer } from 'react'
import Todo from './components/Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todoText)]
    case ACTIONS.TOGGLE_TODO:
      const updatedTodos = todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })

      return updatedTodos
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
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
    console.log('handleSubmit starts')
    e.preventDefault()

    dispatch({ type: ACTIONS.ADD_TODO, payload: { todoText: todoText } })
    setTodoText('')
  }

  console.log(todos)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todoText} onChange={e => setTodoText(e.target.value)} />
      </form>

      {
        todos.map(todo => <Todo key={todo.id} {...todo} dispatch={dispatch} />)
      }
    </>
  )
}
