import React from 'react'

import { StyledSquare } from '../styles/StyledSquare'


const Square = (props) => {
  const { square, handlePlayerChoice, pos, winner } = props
  // console.log('mark in square', mark)

  return (
    <StyledSquare    
      onClick={winner ? undefined : handlePlayerChoice(pos)}
      color={square[1]}    
      >
      {square[0]}
    </StyledSquare>
  )
}

export default Square