import React from 'react'


// styles
import { StyledGrid } from '../styles/StyledGrid'

import Square from './Square'

const Stage = ({ stage, handlePlayerChoice, winner }) => {
  
  return (
    <StyledGrid>
      {
        stage.map((row, y) => {
          // console.log('row', row) 
          // console.log('index ', y)
                   
         return row.map((square, x) =>
            <Square
              key={'' + y + x}
              square={square}
              pos={{ y: y, x: x }}
              handlePlayerChoice={handlePlayerChoice}
              winner={winner}
            />
          )
        })
      }
    </StyledGrid>

  )
}
export default Stage