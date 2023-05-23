import { Dispatch, SetStateAction } from 'react'

export const Alternativa = ({text, isCorrect, isContest, setIsContest, setCorrect}: {text: string, isCorrect: boolean, isContest: boolean, setIsContest: (value: boolean) => void, setCorrect: Dispatch<SetStateAction<number>>}) => {

  return(
    <button
      disabled={isContest}
      style={{background: !isContest ? "black" : isCorrect ? "blue" : "red" }}
      onClick={()=>{
        setIsContest(true)
        if(isCorrect){
          setCorrect((value)=>value+1)
        }
      }}
    >
      <h3> {text} </h3>
    </button>
  )
}