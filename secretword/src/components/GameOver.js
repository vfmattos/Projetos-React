import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h2>GameOver</h2>

      <h2>A sua pontuação foi: <span>{score}</span></h2>

      <button onClick={retry}>resetar jogo</button>
    </div>
  )
}

export default GameOver