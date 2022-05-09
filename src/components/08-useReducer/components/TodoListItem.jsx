import React from 'react'
import PropTypes from 'prop-types'

function TodoListItem(props) {
  return (
    <li className='list-group-item'>
      <p
        onClick={() => props.handelToggle(props.todo.id)}
        className={`${props.todo.done && 'complete'}`}
      >
        {props.i + 1}. {props.todo.desc}
      </p>
      <button
        onClick={() => props.handleDelete(props.todo.id)}
        className='btn btn-danger'
      >
        borrar
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  handelToggle: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default TodoListItem
