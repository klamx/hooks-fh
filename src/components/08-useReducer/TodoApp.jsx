import React, { useEffect, useReducer } from 'react'
import './styles.css'
import todoReducer from './todoReducer'
import useForm from '../../hooks/useForm'

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
          <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => {
              return (
                <li className='list-group-item' key={todo.id}>
                  <p className='text-center'>
                    {i + 1}. {todo.desc}
                  </p>
                  <button className='btn btn-danger'>borrar</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              placeholder='Aprender...'
              autoComplete='false'
              className='form-control'
              onChange={handleInputChange}
              value={description}
            />
            <button
              type='submit'
              className='btn btn-outline-primary mt-1 col-12'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
