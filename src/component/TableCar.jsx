import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../provider'
import {AiFillDelete} from 'react-icons/ai'
const TableCar = () => {

  const [carData, setCarData] = useState([])

  const fetchData = () => {
    api.get('/carros').then((response) => setCarData(response.data))
  }

  useEffect(() =>{
    fetchData();
  }, [])
  
  const handleDelete = (index, id) => {
    const newArr = Array.from(carData)
    api.delete(`/carros/${id}`).then((response) => setCarData(response.data._id == id))

  }
  console.log(carData)
  return (
    <>
    <div className='tableCar'>
      <table>
        <thead>
          <tr>
            <td>Modelo</td>
            <td>Ano</td>
            <td>Preço</td>
            <td>-</td>
          </tr>
        </thead>

        <tbody>
          {carData && carData.map((obj,index) => { 
          return(
            <tr key={obj._id}>
              <td>{obj.modelo}</td>
              <td>{obj.ano}</td>
              <td>R$ {obj.preco}</td>
              <td><button onClick={()=>handleDelete(index, obj._id)}><AiFillDelete/></button></td>
              
            </tr>
          )})}

        </tbody>
      </table>

    </div>
    </>
  )
}

export default TableCar