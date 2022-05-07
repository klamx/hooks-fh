import { useState } from 'react'

const useCounter = (initialState = 10) => {
  const [counter, setState] = useState(initialState)
  const increment = (factor = 1) => {
    setState(counter + factor)
  }

  const decrement = (factor = 1) => {
    setState(counter - factor)
  }

  const reset = () => {
    setState(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default useCounter
