import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm'

function TodoForm({ handleAdd }) {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })

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
    handleAdd(newTodo)
    reset()
  }

  return (
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
      <button type='submit' className='btn btn-outline-primary mt-1 col-12'>
        Agregar
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
}

export default TodoForm
