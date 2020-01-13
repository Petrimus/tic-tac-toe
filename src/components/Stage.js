import React from 'react'


// styles
import { StyledGrid } from '../styles/StyledGrid'

import Square from './Square'

const Stage = ({ stage, handlePlayerChoice, winner }) => {
  
  return (
    <StyledGrid>
      {
        stage.map((cell, index) =>         
            <Square
              key={index}              
              pos={index}
              cell={cell}
              handlePlayerChoice={handlePlayerChoice}
              winner={winner}
            />
          )
        }     
    </StyledGrid>
  )
}
export default Stage