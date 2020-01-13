import React, { useState } from 'react'

import { useStage } from '../hooks/useStage'

// components
import Stage from './Stage'
import Display from './Display'
import GameWrapper from '../styles/GameWrapper'

const Game = () => {  
  const [stage, updateStage, winner, reset] = useStage()
  const [isOn, setIsOn] = useState(false)
 
  const playerMove = (pos) => () => {
    console.log('player move')
    
    if (stage[pos][0] === '') {
      updateStage(pos)
      setIsOn(true)
    }
  }

  return (
    <GameWrapper>
      <Display
        isOn={isOn}
        winner={winner} 
        reset={reset}       
      />
      <Stage
        stage={stage}
        handlePlayerChoice={playerMove}
        winner={winner}
      />
    </GameWrapper>
  )
}

export default Game

