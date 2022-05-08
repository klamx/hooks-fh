import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../03-examples/multiple.css'
import Small from './Small'

const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />
      <button onClick={() => increment()} className='btn btn-primary'>
        +1
      </button>
      <button onClick={handleToggle} className='btn btn-outline-primary ms-3'>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default Memorize
