import Form from "./components/Form"
import { useState, useEffect } from "react"
import type { Food, Activity } from "./types/types"
import FoodList from "./components/FoodList"
import ActivityList from "./components/ActivityList"
import Calorias from "./components/Calorias"

function App() {
  const [ dataFood, setDataFood ] = useState<Food[]>(() => {
    const food = localStorage.getItem('Food');
    return food ? JSON.parse(food) : [];
  })
  const [ dataActivity, setDataActivity ] = useState<Activity[]>(() => {
    const activity = localStorage.getItem('Activities');
    return activity ? JSON.parse(activity) : [];
  })

  const [ newActivity, setNewActivity ] = useState<Activity[]>([])
  const [ newFood, setNewFood ] = useState<Food[]>([])
  
  const deleteItemFood = ( id : string ) =>{ 
    const deleteFood = dataFood.filter(item => item.id !== id)
    setDataFood(deleteFood)
  }
  const deleteItemActivity = ( id : string ) =>{ 
    const deleteActivity = dataActivity.filter(item => item.id !== id)
    setDataActivity(deleteActivity)
  }

  const editFood = (id : string) => {
    const newFood = dataFood.filter(item => item.id === id)
    setNewFood(newFood)
  }

  const editActivity = (id : string) => {
    const newActivity = dataActivity.filter(item => item.id === id)
    setNewActivity(newActivity)
  }
  useEffect(()=>{
    localStorage.setItem('Food', JSON.stringify(dataFood))
  },[dataFood])

  useEffect(()=>{
    localStorage.setItem('Activities', JSON.stringify(dataActivity))
  },[dataActivity])
  return (
    <>
      <header className="bg-lime-600 py-3 px-5 md:py-10 flex flex-col justify-center items-center ">
        <section className="max-w-screen-md mx-auto flex justify-between w-full items-center ">
          <h1 className="text-center font-bold text-lg uppercase text-white">My Fitness Calculator</h1>
          <button className="uppercase text-white bg-red-500 font bold py-2 px-4 rounded-2xl hover:bg-white hover:text-red-500 transition-colors"
          onClick={() => {setDataActivity([]), setDataFood([])}}>Reiniciar app</button>
        </section>
      </header>
      <main className="flex flex-col justify-center items-center w-full">
        <section className="bg-lime-500 py-20 px-5 flex justify-center w-full">
          <article className="max-w-screen-lg min-w-[80%] lg:min-w-[40%]">
              <Form
              setDataFood={setDataFood}
              dataFood={dataFood}
              setDataActivity={setDataActivity}
              dataActivity={dataActivity}
              newActivity={newActivity}
              setNewActivity={setNewActivity}
              newFood={newFood}
              setNewFood={setNewFood}
              />
          </article>
        </section>
        <section className="bg-gray-800 py-20 px-5 flex flex-col justify-center items-center w-full text-white">
          <h2 className="text-center text-2xl font-bold mb-10 uppercase">Balance Calórico</h2>
          <Calorias
          dataFood={dataFood}
          dataActivity={dataActivity}
          />
        </section>
        <section className="max-w-screen-lg mt-10 w-full flex flex-col justify-center items-center gap-16">
          <article className="w-[70%]">
            <h2 className="text-center text-2xl font-bold mb-10 uppercase">Comidas 🍔</h2>
            {dataFood.length>0 ? <FoodList dataFood={dataFood} deleteItemFood={deleteItemFood} editFood={editFood}/> : <p className="text-gray-500 text-center">No tienes comidas registradas</p>}
          </article>

          <article className="w-[70%]">
            <h2 className="text-center text-2xl font-bold mb-10 uppercase">Ejercicios 🏋🏼</h2>
            {dataActivity.length>0 ? <ActivityList dataActivity={dataActivity} deleteItemActivity={deleteItemActivity} editActivity={editActivity}/> : <p className="text-gray-500 text-center">No tienes ejercicios registrados</p>}
          </article>
        </section>
      </main>
      <footer className="bg-lime-600 py-3 px-5 md:py-10  flex flex-col justify-center items-center mt-16">
        <h1 className="text-center font-bold text-lg uppercase text-white">My Fitness Calculator</h1>
      </footer>
    </>
  )
}

export default App
