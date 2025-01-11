
import { useRouter } from "next/router"
import { useState, useEffect } from "react";

export default function DadosImc() {
  const [peso,setPeso]=useState<any>('')
  const [altura,setAltura]=useState<any>('')
  const [imc,setImc]=useState<any>('')
  const [data,setData]=useState<any>('')
  const [nome,setNome]=useState<any>('')
  const router = useRouter();
  const { p_peso, p_altura, p_imc } = router.query

  useEffect(()=>{
    setPeso(p_peso)
    setAltura(p_altura)
    setAltura(p_imc)
    setData('10/01/25')
  },[])


  return (
    <>
      <div>
        <div>
          <label>Nome</label>
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </div>
        <div>
          <label>Peso</label>
          <input type="number" value={peso} readOnly/>
        </div>
        <div>
          <label>Altura</label>
          <input type="text" value={altura} readOnly/>
        </div>
        <div>
          <label>IMC</label>
          <input type="text" value={imc} readOnly/>
        </div>
        <div>
          <label>Data</label>
          <input type="text" value={data} readOnly/>
        </div>
        <div>
          <button>Gravar</button>
        </div>
      </div>
      <div>
        grid
      </div>
    </>
  )
}