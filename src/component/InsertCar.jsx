import React from 'react'
import { useState } from 'react'
import { api } from '../provider'

const InsertCar = () => {
  const [carObj, setCarObj] = useState({
    modelo: '',
    ano: '',
    preco: ''
  })

 /*IMPORTANTE: PARA REALIZAR O TESTE DO APP, ENTRE NO SITE https://crudcrud.com E TROQUE O LINK DA API NO ARQUIVO {provider.jsx} PARA O GERADO NO SEU NAVEGADOR
 FEITO ISSO O PROGRAMA FUNCIONARÁ CORRETAMENTE*/
  const fetchData = () =>{
    api.post('/carros',{
      modelo: carObj.modelo,
      ano: carObj.ano,
      preco: carObj.preco
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setCarObj({    
    modelo: '',
    ano: '',
    preco: ''
    })

  }

  const handleChange = (e) => {

    const {name, value} = e.target;

    setCarObj((prev) => {
      const newArr = {...prev, [name]: value}
      return newArr;
      })   
  }

  const activebutton = () => {

    let checkedButton = 0

    if(carObj.modelo){
      checkedButton += 1;
    }
    
    if(carObj.ano){
      checkedButton += 1;
    }
    
    if(carObj.preco){
      checkedButton += 1;
    }

    return checkedButton;
  }



  console.log(carObj)
  
  return (
    <>
    <div className='insertCar'>
      <h2>Formulario para inserção de carros na lista</h2>
        <div className="formulario">
            <div className="form-group">
              <label htmlFor="">Modelo do Carro </label>
              <input name='modelo' type="text" value={carObj.modelo} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Ano do veículo </label>
              <input name='ano' type="number" min={1886} value={carObj.ano} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Preço do veículo </label>
              <input name='preco' type="number" value={carObj.preco} onChange={handleChange}/>
            </div>
            <div className="save-data">
              <button onClick={fetchData} disabled={activebutton() !== 3}>Salvar Dados</button>
            </div>
            
            
        </div>
    </div>
    
    </>
    
  )
}

export default InsertCar