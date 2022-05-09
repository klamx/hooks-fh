import React, { useEffect, useReducer } from 'react'
import './styles.css'
import todoReducer from './todoReducer'
import useForm from '../../hooks/useForm'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ]
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // console.log(description)

  const handleDelete = (todoId) => {
    // console.log(todoId)

    const deleteTodo = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(deleteTodo)
  }

  const handelToggle = (todoId) => {
    const toggleTodo = {
      type: 'toggle',
      payload: todoId,
    }

    dispatch(toggleTodo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action)
    reset()
  }

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handelToggle={handelToggle}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr />
          <TodoForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            description={description}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
