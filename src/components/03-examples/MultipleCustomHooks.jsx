import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
import './multiple.css'

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  )

  // console.log(state)
  const { author, quote } = !!data && data[0]
  // console.log(quote, author)

  return (
    <div>
      <div>Breaking Bad Quotes</div>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loadin...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <button onClick={() => increment()} className='btn btn-primary'>
        Siguiente quote
      </button>
    </div>
  )
}

export default MultipleCustomHooks
