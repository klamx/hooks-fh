import React, { useCallback, useState } from 'react'
import '../03-examples/multiple.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num)
  }, [setCounter])

  return (
    <div>
      <h1>CallbackHook hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallbackHook
