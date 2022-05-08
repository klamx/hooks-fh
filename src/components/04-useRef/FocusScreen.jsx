import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
  }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='su nombre'
      />
      <button onClick={handleClick} className='btn btn-outline-primary mt-5'>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
