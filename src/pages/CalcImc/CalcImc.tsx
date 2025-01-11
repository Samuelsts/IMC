
import { useState } from "react"
import CampForm from "@/Components/CampForm"
import TabelaImc from "@/Components/TabelaImc"
import Link from "next/link"

export default function CalcImc() {
  const [peso, setPeso] = useState<number>(0)
  const [altura, setAltura] = useState<number>(0)
  const [imc, setImc] = useState<number>(0)

  function calcular() {
    
    const res = peso/ (altura * altura)
    setImc(res)
  }
  return (
    <div className=" m-auto flex flex-col border border-black w-[300px] gap-5">
      <p className="w-full text-center bg-zinc-400 font-bold text-lg">Calculo IMC</p>
      <CampForm label='peso' state={peso} funcState={setPeso} />
      <CampForm label='altura' state={altura} funcState={setAltura} />
      <button className="bg-cyan-800 text-white mx-2 rounded-md p-2 cursor-pointer" onClick={calcular}>Calcular</button>
      <Link  href={{pathname:'/DadosImc/DadosImc',query:{p_peso:peso,p_altura:altura,p_imc:imc}}}className="bg-cyan-800 text-white mx-2 rounded-md p-2 cursor-pointer text-center">Gravar</Link>
      <p className="bg-zinc-100 p-1">Resultado:{imc.toFixed(2)}</p>
      <TabelaImc imc={imc}/>
    </div>
  )
}