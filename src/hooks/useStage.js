import { useState } from 'react'

import { initialize } from '../gameUtility'

export const useStage = () => {
  const [stage, setStage] = useState(initialize())
  const [winner, setWinner] = useState(false)
  const [player, setPlayer] = useState('player')


  const updateStage = (pos) => {

    const newStage = (() => {
      let prev = [...stage]
      prev[pos.y][pos.x] = ['X', 'black']
      return prev
    })()

    const possibleMoves = availlableMoves(newStage)
    // console.log(possibleMoves)

    if (checkWinner(newStage)) {
      setWinner(true)
      setStage(newStage)
      setPlayer('player')
      return
    }    
    const aiStage = aiSelect(newStage, possibleMoves)
    if (checkWinner(aiStage)) {
      setWinner(true)
      setPlayer('ai')      
    }   
      setStage(aiStage)    
  }

  const checkWinner = (stage) => {
    // console.log('stage ', stage)

    for (let y = 0; y < stage.length; y++) {
      let temp = []
      for (let x = 0; x < stage[y].length; x++) {
        const value = [y, x, stage[y][x]]
        temp.push(value)
      }
      if (equals(temp[0][2][0], temp[1][2][0], temp[2][2][0])) {
        temp[0][2][1] = 'red'
        temp[1][2][1] = 'red'
        temp[2][2][1] = 'red'
        return true
      }
    }
    for (let x = 0; x < stage[0].length; x++) {
      let temp = []
      for (let y = 0; y < stage.length; y++) {
        const value = [y, x, stage[y][x]]
        temp.push(value)
      }
      if (equals(temp[0][2][0], temp[1][2][0], temp[2][2][0])) {
        temp[0][2][1] = 'red'
        temp[1][2][1] = 'red'
        temp[2][2][1] = 'red'
        return true
      }
    }
    if (equals(stage[0][0][0], stage[1][1][0], stage[2][2][0])) {
      stage[0][0][1] = 'red'
      stage[1][1][1] = 'red'
      stage[2][2][1] = 'red'
      return true
    }
    if (equals(stage[0][2][0], stage[1][1][0], stage[2][0][0])) {
      stage[0][2][1] = 'red'
      stage[1][1][1] = 'red'
      stage[2][0][1] = 'red'
      return true
    }
  }

  const availlableMoves = (currentStage) => {
    let availlable = []
    for (let y = 0; y < currentStage.length; y++) {
      for (let x = 0; x < currentStage[y].length; x++) {
        if (currentStage[y][x][0] === '') {
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

  const aiSelect = (newStage, possibleMoves) => {    
    const y = possibleMoves[0][0]
    // console.log('y ', y)
    const x = possibleMoves[0][1]
    // console.log('x ', x)

    newStage[possibleMoves[0][0]][possibleMoves[0][1]] = ['O', 'black']
    return newStage  
  }

  const winCombos = () => {
    let combos = []

    
  }

  return [stage, updateStage, winner, player]
}
