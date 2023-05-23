import { useState, useEffect ,Dispatch, SetStateAction } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

import { Alternativa } from "./Alternativa"

import { useAlternativas } from '../hooks/useAlternativas'
import { preguntas } from '../data/preguntas'

export const Pregunta = () => {
 
  const [isContest, setIsContest] = useState<boolean>(false)
  const {setCorrect} = useOutletContext<{ setCorrect: Dispatch<SetStateAction<number>> }>()
  const id = Number(useParams().preguntaId)
  const [newAlternativas] = useAlternativas({id})
  const {pregunta, respuesta} = preguntas[id-1]

  
  useEffect(()=>{
    setIsContest(false)

    return ()=>{
      console.log('desmontando')
    }
  },[id])

  return(
    <div>
      <h1> {pregunta} </h1>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", width: "100%"}}>
      {
          newAlternativas.map( ({text, id}) => (
          <Alternativa
            key={id}
            text={text}
            isCorrect={respuesta === id}
            isContest={isContest}
            setIsContest={setIsContest}
            setCorrect={setCorrect}
          />
        ))
      }
      </div>
    </div>
  )
}