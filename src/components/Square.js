import React from 'react'

import { StyledSquare } from '../styles/StyledSquare'


const Square = (props) => {
  const { mark, handlePlayerChoice, pos } = props
// console.log('mark in square', mark)

  return (
    <StyledSquare onClick={handlePlayerChoice(pos)}>
      {mark}
    </StyledSquare>
  )
}

export default Square