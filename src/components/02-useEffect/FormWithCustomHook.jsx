import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import './effects.css'

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  useEffect(() => {
    console.log('email cambió')
  }, [email])

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom hook</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='emai@email.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='******'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Enviar</button>
    </form>
  )
}

export default FormWithCustomHook
