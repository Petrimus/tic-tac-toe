import React from 'react'

import { StyledDisplay, DisplayText, AgainLink } from '../styles/StyledDisplay'

const Display = ({ isOn, winner, player }) => {

  //console.log('winner ', winner)
  let playText = ''
  if (!winner) {
    playText = isOn ? <DisplayText>Your move</DisplayText> : 
    <DisplayText>Play Tic Tac Toe</DisplayText>
  }

  return (
    <StyledDisplay>
      {playText}
      {winner && <DisplayText>{player} won!!</DisplayText>}
      {winner && <AgainLink href="#">Play again?</AgainLink>}
    </StyledDisplay>
  )
}

export default Display