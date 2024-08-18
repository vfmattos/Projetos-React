import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {

  const { counter } = useCounterContext()
  const {color, dispatch} = useTitleColorContext()

  const changeColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <button onClick={() => changeColor('RED')}>RED</button>
      <button onClick={() => changeColor('BLUE')}>BLUE</button>
      <h1 style={{color: color}}>Home</h1>
      <p><b>Produtos:</b> {counter}</p>
    </div>
  )
}

export default Home