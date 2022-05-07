import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [formValues, SetformValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    SetformValues({ ...formValues, [target.name]: target.value })
  }

  return [formValues, handleInputChange]
}

export default useForm
