import React, { useState } from 'react'

import { useStage } from './hooks/useStage'

// components
import Stage from './components/Stage'
import Display from './components/Display'
import GameWrapper from './styles/GameWrapper'

const Game = () => {
  // const [gameOver, setGameOver] = useState(false)
  const [stage, updateStage, winner, player] = useStage()
  const [isOn, setIsOn] = useState(false)
 
  // console.log('game stage', stage)

  // console.log('combos ', winCombos)  

  const playerMove = (pos) => () => {
    if (stage[pos.y][pos.x][0] === '') {      
      updateStage(pos)
      setIsOn(true)    
    }
  }
  
  console.log('render')

  return (
    <GameWrapper>   
      <Display 
      isOn={isOn}
      winner={winner}
      player={player}
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

