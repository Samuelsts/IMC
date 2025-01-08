
interface CompFormProps{
  label:string,
  state:number,
  funcState:any
}



export default function CompForm(props:CompFormProps){
  return (
    <div>
      <label>{props.label}</label>
      <input value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
    </div>
  )
}