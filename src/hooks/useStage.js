import { useState } from 'react'

import { initialize } from '../gameUtility'

export const useStage = () => {
  const [stage, setStage] = useState(initialize())
  const [winner, setWinner] = useState(false)


  const updateStage = (pos) => {

    const newStage = (() => {
      let prev = [...stage]
      prev[pos.y][pos.x] = 'X'
      return prev
    })()
    
    const possibleMoves = availlableMoves(newStage)
    // console.log(possibleMoves)

    if (checkWinner(winCombos(newStage))) {
      setWinner(true)
      setStage(newStage)
      return
    }
    const aiStage = aiSelect(newStage, possibleMoves)
    if (checkWinner(winCombos(aiStage))) {
      setWinner(true)      
    }
    setStage(aiStage)
  }


  const winCombos = () => {
    // console.log('stage ', stage)

    let winningCombos = []
    for (let y = 0; y < stage.length; y++) {
      let temp = []
      for (let x = 0; x < stage[y].length; x++) {
        const value = [y, x, stage[y][x]]
        temp.push(value)
      }
      winningCombos.push(temp)
    }
    for (let x = 0; x < stage[0].length; x++) {
      let temp = []
      for (let y = 0; y < stage.length; y++) {
        const value = [y, x, stage[y][x]]
        temp.push(value)
      }
      winningCombos.push(temp)
    }
    winningCombos.push(
      [
        [0, 0, stage[0][0]], [1, 1, stage[1][1]], [2, 2, stage[2][2]]
      ]
    )
    winningCombos.push(
      [
        [0, 2, stage[0][2]], [1, 1, stage[1][1]], [2, 0, stage[2][0]]
      ]
    )
    return winningCombos
  }

  const availlableMoves = (currentStage) => {
    let availlable = []
    for (let y = 0; y < currentStage.length; y++) {
      for (let x = 0; x < currentStage[y].length; x++) {
        if (currentStage[y][x] === '') {
          const arr = [y, x]
          availlable.push(arr)
        }
      }
    }
    return availlable
  }
  const equals = (a, b, c) => {
    if (a !== '' && b !== '' && c !== '') {
      if (a === b && b === c) {
        return true
      }
    }
  }
  const checkWinner = (combos) => {
    console.log('combos', combos)
    
    for (let i = 0; i < combos.length; i++) {
      if (equals(combos[i][0][2], combos[i][1][2], combos[i][2][2])) {
        return true
      }
    }
    return false
  }

  const aiSelect = (newStage, possibleMoves) => {
    const y = possibleMoves[0][0]
    // console.log('y ', y)
    const x = possibleMoves[0][1]
    // console.log('x ', x)

    newStage[possibleMoves[0][0]][possibleMoves[0][1]] = 'O'
    return newStage
  }


  return [stage, updateStage, winner]  
}
