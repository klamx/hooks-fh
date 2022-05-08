import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
import './layout.css'

const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

  const { quote } = !!data && data[0]

  return (
    <div>
      <div>Layout Effect</div>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-0'>{quote}</p>
      </blockquote>

      <button onClick={() => increment()} className='btn btn-primary'>
        Siguiente quote
      </button>
    </div>
  )
}

export default Layout
