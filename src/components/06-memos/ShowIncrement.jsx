import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
  console.log('me volvia a generar :(')
  return (
    <button onClick={() => increment(5)} className='btn btn-primary'>
      incrementar
    </button>
  )
})

export default ShowIncrement
