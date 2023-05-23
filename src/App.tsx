import {useState} from 'react'
import { Outlet, useParams, useNavigate } from "react-router-dom";
import './App.css'
function App() {

  const [correct, setCorrect] = useState(0)
  const navigate = useNavigate()
  const current = Number(useParams().preguntaId)

  return (
    <>
      <header>
        <h2>
          { correct }
        </h2>
        <button
          onClick={()=>{
            if(current === 36) return navigate(`/pregunta/1`)
            return navigate(`/pregunta/${current+1}`)
          }}
        >
          <h2>
            Siguiente
          </h2>
        </button>
      </header>
      <Outlet context={{setCorrect}}/>
    </>
  )
}

export default App
