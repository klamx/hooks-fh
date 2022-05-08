import React from 'react'

const Small = React.memo(({ value }) => {
  console.log('me voli a llamar :(')
  return <small>{value}</small>
})

export default Small
