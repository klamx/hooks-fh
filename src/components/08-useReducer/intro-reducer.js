const initialState = [
  {
    id: 1,
    todo: 'comprar pan',
    done: false,
  },
]

// las acciones son las que van a modificar el state
// siempre retorna el state
const todoReducer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.payload]
  }

  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'comprar leche',
  done: false,
}

const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos)
