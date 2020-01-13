import { useState } from 'react'

import { initialize } from '../gameUtility'

export const useStage = () => {
  const [stage, setStage] = useState(initialize())
  const [winner, setWinner] = useState(0)

  const updateStage = (pos) => {

    let prevStage = [...stage]

    prevStage[pos] = ['X', 'black']

    if (availlableMoves(prevStage).length === 0) {
      setWinner(3)
    }

    if (checkWinner(prevStage)) {
      setWinner(1)
      setStage(prevStage)
      return
    }

    const aiStage = aiSelect(prevStage)

    if (checkWinner(aiStage)) {
      setWinner(2)
    }

    setStage(aiStage)
  }

  const reset = () => () => {
    setStage(initialize())
    setWinner(0)
  }

  const checkWinner = (prev) => {
    for (let i = 0; i < combos.length; i++) {

      const [one, two, three] = combos[i]

      if (equals(prev[one][0], prev[two][0], prev[three][0])) {
        // console.log('equals')

        prev[one][1] = 'red'
        prev[two][1] = 'red'
        prev[three][1] = 'red'

        return true
      }
    }
  }

  const availlableMoves = (stage) => {
    let availlable = []
    for (let i = 0; i < stage.length; i++) {
      if (stage[i][0] === '') {
        availlable.push(i)
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

  const aiSelect = (prev) => {

    for (let i = 0; i < combos.length; i++) {
      const [one, two, three] = combos[i]

      if (prev[one][0] === '' || prev[two][0] === '' || prev[three][0] === '') {
        if ((prev[one][0] === 'O' && prev[two][0] === 'O') ||
          (prev[one][0] === 'O' && prev[three][0] === 'O') ||
          (prev[two][0] === 'O' && prev[three][0] === 'O')) {
          // console.log('pos combos', combos[i])

          for (let ii = 0; ii < combos[i].length; ii++) {
            const index = combos[i][ii]
            if (prev[index][0] === '') {
              prev[index] = ['O', 'black']
              return prev
            }
          }
        }
      }
    }

    for (let i = 0; i < combos.length; i++) {
      const [one, two, three] = combos[i]

      if (prev[one][0] === '' || prev[two][0] === '' || prev[three][0] === '') {
        if ((prev[one][0] === 'X' && prev[two][0] === 'X') ||
          (prev[one][0] === 'X' && prev[three][0] === 'X') ||
          (prev[two][0] === 'X' && prev[three][0] === 'X')) {

          for (let ii = 0; ii < combos[i].length; ii++) {
            const index = combos[i][ii]
            if (prev[index][0] === '') {
              prev[index] = ['O', 'black']
              return prev
            }
          }
        }
      }
    }

    const possMoves = availlableMoves(prev)
    const index = Math.floor(Math.random() * possMoves.length)

    prev[possMoves[index]] = ['O', 'black']

    return prev
  }

  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  return [stage, updateStage, winner, reset]
}
