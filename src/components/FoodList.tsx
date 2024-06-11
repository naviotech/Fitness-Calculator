import { PencilSquareIcon, XMarkIcon} from "@heroicons/react/24/outline"
import { Food } from "../types/types"
type FoodProps = {
  dataFood:Food[],
  deleteItemFood: (id: string) => void,
  editFood: (id: string) => void
}

const FoodList = ({ dataFood, deleteItemFood, editFood } : FoodProps) => {
  return (
    <>
      {dataFood.map(item => (
        <article key={item.id} className="px-10 py-10 bg-white mt-5 flex justify-between w-full">
          <div className="relative">
            <p className="py-2 px-4 max-w-32 min-w-32 bg-orange-500 text-white font-bold uppercase text-center relative -top-6 right-16">Comida</p>
            <p className="text-2xl font-bold pt-5 uppercase">{item.tipo}</p>
            <p className="text-2xl text-lime-500 font-bold">{item.calorias} kcal</p>
            <p className="text-xl text-gray-600">{item.gramos} gr</p>
          </div>

          <div className="flex gap-6">
            <button className="flex gap-5 items-center"
              onClick={() => editFood(item.id)}
            >
              <PencilSquareIcon
              className="h-8 w-8 text-gray-800 hover:scale-105 transition-all"
              />
            </button>

            <button className="flex gap-5 items-center"
              onClick={() => deleteItemFood(item.id)}
            >
              <XMarkIcon
              className="h-8 w-8  text-red-500  hover:scale-125 transition-all"
              />
            </button> 
          </div>
        </article>
      ))}
    </>
  )
}

export default FoodList
