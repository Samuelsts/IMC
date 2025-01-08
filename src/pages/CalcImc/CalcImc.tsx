
import { useState } from "react"
import CompForm from "@/Components/CompForm"
import TabelaImc from "@/Components/TabelaImc"

export default function CalcImc(){
  const [peso,setPeso]=useState<number>(0)
  const [altura,setAltura]=useState<number>(0)
  const [imc,setImc]=useState<number>(0)

  function calcular(){
    const res = peso/(altura*altura)
    setImc(res)
  }
  return(
    <div>
      <CompForm label='peso' state={peso} funcState={setPeso}/>
      <CompForm label='altura' state={altura} funcState={setAltura}/>
      <button onClick={calcular}>Calcular</button>
      <div>Resultado:{imc}</div>
      <TabelaImc/>
    </div>
  )
}