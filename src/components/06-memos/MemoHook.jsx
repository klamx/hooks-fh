import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado'
import useCounter from '../../hooks/useCounter'
import '../03-examples/multiple.css'

const MemoHook = () => {
  const { counter, increment } = useCounter(1000)
  const [show, setShow] = useState(true)

  const handleToggle = () => {
    setShow(!show)
  }

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button onClick={() => increment()} className='btn btn-primary'>
        +1
      </button>
      <button onClick={handleToggle} className='btn btn-outline-primary ms-3'>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default MemoHook
