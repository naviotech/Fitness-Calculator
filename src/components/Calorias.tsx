import type { Food, Activity } from "../types/types"
type CaloriasProps ={
  dataFood: Food[],
  dataActivity: Activity[]
}
const Calorias = ({ dataFood, dataActivity }: CaloriasProps) => {
  const caloriasConsumidas = dataFood.reduce((total, item)=>{
    total =+ item.calorias
    return total
  },0)

  const caloriasGastadas = dataActivity.reduce((total, item)=>{
    total =+ item.calorias
    return total
  },0)
  return (
    <>
      <section className="max-w-screen-md flex justify-between w-full">
        <article className="flex flex-col">
          <h2 className="mb-6 font-bold">Calorias consumidas</h2>
          <p className="text-center text-lime-500 font-bold text-4xl">{caloriasConsumidas}</p>
        </article>

        <article className="flex flex-col">
          <h2 className="mb-6 font-bold">Calorias gastadas</h2>
          <p className="text-center text-lime-500 font-bold text-4xl">{caloriasGastadas}</p>
        </article>

        <article className="flex flex-col">
          <h2 className="mb-6 font-bold">Balance energético total</h2>
          <p className="text-center text-lime-500 font-bold text-4xl">{caloriasConsumidas-caloriasGastadas}</p>
        </article>
        
      </section>
    </>
  )
}

export default Calorias
