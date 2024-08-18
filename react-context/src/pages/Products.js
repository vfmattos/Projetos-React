import React from 'react'
import {useCounterContext} from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Products = () => {

  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Produtos</h1>
      <p><b>Produtos:</b>{counter}</p>
      <ChangeCounter/>

    </div>
  )
}

export default Products