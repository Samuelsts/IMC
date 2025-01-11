
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
        <div className="campoForm">
          <label>Nome</label>
          <input className="inputDados"  type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </div>
        <div className="campoForm">
          <label>Peso</label>
          <input className="inputDados" type="number" value={peso} readOnly/>
        </div>
        <div className="campoForm">
          <label>Altura</label>
          <input className="inputDados"  type="text" value={altura} readOnly/>
        </div>
        <div className="campoForm">
          <label>IMC</label>
          <input className="inputDados"  type="text" value={imc} readOnly/>
        </div>
        <div className="campoForm">
          <label>Data</label>
          <input className="inputDados"  type="text" value={data} readOnly/>
        </div>
        <div className="campoForm">
          <button className="botaoDados">Gravar</button>
        </div>
      </div>
      <div className="grid">
        <div className="gridLinhaTitulos">
          <div className="gridTitulos">Nome</div>
          <div className="gridTitulos">Peso</div>
          <div className="gridTitulos">Altura</div>
          <div className="gridTitulos">Imc</div>
          <div className="gridTitulos">Data</div>
        </div>
        <div>
          <div className="gridLinhaDados">
            <div className="gridLinhas">
              <div>Nome</div>
              <div>Peso</div>
              <div>Altura</div>
              <div>Imc</div>
              <div>Data</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}