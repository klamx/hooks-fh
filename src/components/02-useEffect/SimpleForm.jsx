import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' })
  const { name, email } = formState

  const handleInputChange = ({ target }) => {
    // console.log(target.name)
    // console.log(target.value)
    // computando lo que viene del target
    setFormState({ ...formState, [target.name]: target.value })
  }

  useEffect(() => {
    console.log('hey')
  }, [])

  useEffect(() => {
    // console.log('formState cambió')
  }, [formState])

  useEffect(() => {
    // console.log('email cambió')
  }, [email])

  return (
    <>
      <h1>useEffect</h1>
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

      {name === '123' && <Message />}
    </>
  )
}

export default SimpleForm
