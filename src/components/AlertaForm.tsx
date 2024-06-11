import { Alert } from "../types/types"
type AlertaProps = {
  alerta : Alert
}
export function Alerta({alerta} : AlertaProps ) {
  return (
    
    <div className={`${alerta.error ? "bg-red-500" : "bg-green-500" } p-3 text-center font-bold text-white rounded-xl`} >
      {alerta.message}
    </div>
  )
}