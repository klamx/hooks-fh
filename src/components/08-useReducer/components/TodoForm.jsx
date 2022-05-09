import React from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        name='description'
        placeholder='Aprender...'
        autoComplete='false'
        className='form-control'
        onChange={props.handleInputChange}
        value={props.description}
      />
      <button type='submit' className='btn btn-outline-primary mt-1 col-12'>
        Agregar
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  description: PropTypes.string,
}

export default TodoForm
