import React from 'react'

import { useStage } from './hooks/useStage'

// components
import Stage from './components/Stage'

const Game = () => {
  // const [gameOver, setGameOver] = useState(false)
  const [stage, updateStage, winner] = useStage()
  
   console.log('game stage', stage)

  // console.log('combos ', winCombos)
  
  

  const playerMove = (pos) => () => {
    if (stage[pos.y][pos.x] === '') {      
      updateStage(pos)    
    }
  }
  
  console.log('render')

  return (
    <div>
      {winner ? <h1>Winner</h1> :
        <Stage
          stage={stage}
          handlePlayerChoice={playerMove}
        />
      }

    </div>
  )
}


export default Game

