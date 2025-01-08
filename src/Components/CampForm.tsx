
interface CampFormProps{
  label:string,
  state:number,
  funcState:any
}



export default function CampForm(props:CampFormProps){
  return (
    <div className="flex mx-2">
      <label className="w-[60px]">{props.label}</label>
      <input className="border p-1 w-full rounded-md" value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
    </div>
  )
}