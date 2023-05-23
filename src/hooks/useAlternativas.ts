import { useMemo, useCallback } from 'react'

import { IAlternativa, alternativas } from '../data/alternativas'

export const useAlternativas = ({id}: {id: number}) : [IAlternativa[]]=> {
  const shuffleArray = (array: IAlternativa[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const shuffleArrayWithReturn = useCallback((array: IAlternativa[]) => {
    const newAlternativas = array.filter( item => item.id !== id)
    for (let i = newAlternativas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newAlternativas[i];
      newAlternativas[i] = newAlternativas[j];
      newAlternativas[j] = temp;
    }
    const response = newAlternativas.slice(0,3).concat(alternativas[id-1])
    shuffleArray(response)
    return response
  },[id])

  const newAlternativas = useMemo(()=>{
    return shuffleArrayWithReturn(alternativas)
  },[shuffleArrayWithReturn])

  return [newAlternativas]
}