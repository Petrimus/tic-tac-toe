import React from 'react'

import { StyledDisplay, DisplayText, Button } from '../styles/StyledDisplay'

const Display = ({ isOn, winner, reset }) => {

  //console.log('winner ', winner)
  let playText = ''
  if (isOn) {
    if (winner === 0) {
      playText = <DisplayText>Your move</DisplayText>
    } else {
      if (winner === 1) {
        playText = <DisplayText>You WON!!</DisplayText>
      } else if (winner === 2) {
        playText = <DisplayText>Computer WON!!</DisplayText>
      } else if (winner === 3) {
       playText = <DisplayText>DEUCE!!</DisplayText>
      }
    }
  } else {   
    playText = <DisplayText>Play Tic Tac Toe</DisplayText>
  }

  return (
    <StyledDisplay>
      {playText}      
      <Button 
      visibility={ winner === 0 ? 'hidden' : 'undefined' }
      onClick={reset()}
      >
        Play again?
      </Button>
    </StyledDisplay>
  )
}

export default Display