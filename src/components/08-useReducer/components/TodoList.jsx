import React from 'react'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

function TodoList(props) {
  return (
    <ul className='list-group list-group-flush'>
      {props.todos.map((todo, i) => {
        return (
          <TodoListItem
            key={todo.id}
            handelToggle={props.handelToggle}
            handleDelete={props.handleDelete}
            todo={todo}
            i={i}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  id: PropTypes.string,
  handelToggle: PropTypes.func,
  handleDelete: PropTypes.func
}

export default TodoList
