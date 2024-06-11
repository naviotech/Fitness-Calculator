import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { Alerta } from "./AlertaForm";
import type { Food, Activity } from "../types/types";

type FormProps={
  setDataFood: React.Dispatch<React.SetStateAction<Food[]>>,
  setDataActivity: React.Dispatch<React.SetStateAction<Activity[]>>,
  newActivity: Activity[],
  setNewActivity: React.Dispatch<React.SetStateAction<Activity[]>>,
  dataFood: Food[],
  dataActivity: Activity[],
  newFood: Food[],
  setNewFood: React.Dispatch<React.SetStateAction<Food[]>>
}
const Form = ({ setDataFood, setDataActivity, newActivity, setNewActivity, dataActivity, dataFood, newFood ,setNewFood }:FormProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const [ edit, setEdit ] = useState(false)
  const [ clase, setClase ] = useState('')
  const [ gramos, setGramos ] = useState <number | null> (null)
  const [ calorias, setCalorias ] = useState <number | null> (null)
  const [ claseEj, setClaseEj ] = useState('')
  const [ duracion, setDuracion ] = useState('')
  const [ calGastadas, setCalGastadas ]= useState <number | null> (null)

  const [ alerta, setAlerta ] = useState({message:'', error:false})
  const [ visible, setVisible ] = useState(false)
  
  const handleSubmit = ( e: { preventDefault: () => void } )=>{
    e.preventDefault()
    if(!edit){
      if (selectedValue === "comida") {
        if (clase.trim() === '') {
          setAlerta({ message: "Clase de comida requerido", error: true });
          setVisible(true);
          return;
        }
        if (gramos === null || gramos === 0) {
          setAlerta({ message: "Gramos requeridos", error: true });
          setVisible(true);
          return;
        }
        if (gramos < 0) {
          setAlerta({ message: "Gramos requeridos no pueden ser negativos", error: true });
          setVisible(true);
          return;
        }
        if (calorias === null || calorias === 0) {
          setAlerta({ message: "Calorías requeridas", error: true });
          setVisible(true);
          return;
        }
        if (calorias < 0) {
          setAlerta({ message: "Calorías requeridas no pueden ser negativas", error: true });
          setVisible(true);
          return;
        }
        setDataFood((prevData: Food[]) => [
          ...prevData,
          {
            id: uuidv4(),
            tipo: clase,
            gramos: gramos,
            calorias: calorias
          }
        ]);
        setClase('')
        setGramos(null)
        setCalorias(null)
        setSelectedValue('')
      } else if (selectedValue === "ejercicio") {
        if (claseEj.trim() === '') {
          setAlerta({ message: "Tipo de ejercicio requerido", error: true });
          setVisible(true);
          return;
        }
        if (duracion.trim() === '') {
          setAlerta({ message: "Duración requerida", error: true });
          setVisible(true);
          return;
        }
        if (calGastadas === null || calGastadas === 0) {
          setAlerta({ message: "Calorías gastadas requeridas", error: true });
          setVisible(true);
          return;
        }
        if (calGastadas < 0) {
          setAlerta({ message: "Calorías gastadas no pueden ser negativas", error: true });
          setVisible(true);
          return;
        }
        setDataActivity((prevData: Activity[]) => [
          ...prevData,
          {
            id: uuidv4(),
            tipo: claseEj,
            duracion: duracion,
            calorias: calGastadas
          }
        ]);
        setClaseEj('')
        setDuracion('')
        setCalGastadas(null)
        setSelectedValue('')
        
      }
    }
    if(edit){
      if (selectedValue === "comida") {
        if (clase.trim() === '') {
          setAlerta({ message: "Clase de comida requerido", error: true });
          setVisible(true);
          return;
        }
        if (gramos === null || gramos === 0) {
          setAlerta({ message: "Gramos requeridos", error: true });
          setVisible(true);
          return;
        }
        if (gramos < 0) {
          setAlerta({ message: "Gramos requeridos no pueden ser negativos", error: true });
          setVisible(true);
          return;
        }
        if (calorias === null || calorias === 0) {
          setAlerta({ message: "Calorías requeridas", error: true });
          setVisible(true);
          return;
        }
        if (calorias < 0) {
          setAlerta({ message: "Calorías requeridas no pueden ser negativas", error: true });
          setVisible(true);
          return;
        }
        const updateFood = dataFood.map(item=>{
          if(item.id === newFood[0].id){
            item.tipo = clase
            item.calorias = calorias
            item.gramos = gramos
            return item
          }else{
            return item
          }
        })
        setDataFood([...updateFood]);
        setClase('')
        setGramos(null)
        setCalorias(null)
        setSelectedValue('')
        setNewFood([])
        setEdit(false)
      } else if (selectedValue === "ejercicio") {
        if (claseEj.trim() === '') {
          setAlerta({ message: "Tipo de ejercicio requerido", error: true });
          setVisible(true);
          return;
        }
        if (duracion.trim() === '') {
          setAlerta({ message: "Duración requerida", error: true });
          setVisible(true);
          return;
        }
        if (calGastadas === null || calGastadas === 0) {
          setAlerta({ message: "Calorías gastadas requeridas", error: true });
          setVisible(true);
          return;
        }
        if (calGastadas < 0) {
          setAlerta({ message: "Calorías gastadas no pueden ser negativas", error: true });
          setVisible(true);
          return;
        }
        const updateActivity = dataActivity.map(item=>{
          if(item.id === newActivity[0].id){
            item.tipo = claseEj
            item.calorias = calGastadas
            item.duracion = duracion
            return item
          }else{
            return item
          }
        })

        setDataActivity([...updateActivity]);
        setClaseEj('')
        setDuracion('')
        setCalGastadas(null)
        setSelectedValue('')
        setNewActivity([])
        setEdit(false)
      }
    }
    
  }

  useEffect(()=>{
    if(newActivity.length>0){
      setEdit(true)
      setSelectedValue('ejercicio')
      setClaseEj(newActivity[0].tipo)
      setDuracion(newActivity[0].duracion)
      setCalGastadas(newActivity[0].calorias)
    }
  },[newActivity])

  useEffect(()=>{
    if(newFood.length>0){
      setEdit(true)
      setSelectedValue('comida')
      setClase(newFood[0].tipo)
      setGramos(newFood[0].gramos)
      setCalorias(newFood[0].calorias)
    }
  },[newFood])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [visible])
  return (
    <>
      <form  className=" bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
        {visible &&(<Alerta alerta={alerta}/>)}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="categoria" className="font-bold">Categoría:</label>
          <select id="categoria" value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)} className="border-2 border-gray-500 p-1 rounded-xl cursor-pointer">
            <option value="" disabled >--</option>
            <option value="comida" >Comida</option>
            <option value="ejercicio" >Ejercicio</option>
          </select>
        </div>
        {selectedValue === "comida" && (
          <>
            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="clase" className="font-bold">Clase de comida:</label>
              <input id="clase" type="text" value={clase} onChange={(e)=> setClase(e.target.value)} className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="Manzana"></input>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="gramos" className="font-bold">Gramos:</label>
              <input value={gramos ?? ''}
                onChange={(e) => setGramos(e.target.value === '' ? null : +e.target.value)} type="number" id="gramos" className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="120"></input>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="calorias" className="font-bold">Calorías:</label>
              <input value={calorias ?? ''}
                onChange={(e) => setCalorias(e.target.value === '' ? null : +e.target.value)} type="number" id="calorias" className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="80"></input>
            </div>
            <button type="submit" className="bg-black w-full p-2 font-bold uppercase text-white hover:bg-black/50 mt-8">{edit ? "Actualizar Comida":"Registrar Comida"}</button>
          </>
        )}
        {selectedValue === "ejercicio" && (
          <>
            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="claseEj" className="font-bold">Tipo de Ejercicio:</label>
              <input value={claseEj} onChange={(e)=> setClaseEj(e.target.value)} id="claseEj" type="text" className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="Gym"></input>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="duracion" className="font-bold">Duración:</label>
              <input value={duracion} onChange={(e)=> setDuracion(e.target.value)} type="textr" id="duracion" className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="1 hora"></input>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="calGastadas" className="font-bold">Calorías Gastadas:</label>
              <input value={calGastadas ?? ''}
                onChange={(e) => setCalGastadas(e.target.value === '' ? null : +e.target.value)} type="number" id="calGastadas" className="border-2 border-gray-500 p-1 rounded-xl pl-4" placeholder="300"></input>
            </div>
            <button type="submit" className="bg-black w-full p-2 font-bold uppercase text-white hover:bg-black/50 mt-8">{edit ? "Actualizar Ejercicio":"Registrar Ejercicio"}</button>
          </>
          
        )}
      </form>
    </>
  )
}

export default Form
