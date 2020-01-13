import React from 'react'

import { StyledSquare } from '../styles/StyledSquare'


const Square = (props) => {
  const { cell, handlePlayerChoice, pos, winner } = props
  // console.log('mark in square', mark)

  return (
    <StyledSquare    
      onClick={winner !== 0 ? undefined : handlePlayerChoice(pos)}
      color={cell[1]}    
      >
      {cell[0]}
    </StyledSquare>
  )
}

export default Square