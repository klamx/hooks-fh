import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [formValues, SetformValues] = useState(initialState)

  const reset = () => {
    SetformValues(initialState)
  }

  const handleInputChange = ({ target }) => {
    SetformValues({ ...formValues, [target.name]: target.value })
  }

  return [formValues, handleInputChange, reset]
}

export default useForm
