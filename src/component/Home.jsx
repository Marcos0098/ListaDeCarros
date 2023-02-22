import React from 'react'
import hehe from '../assets/hehe.gif'
import '../css/styles.css'



const Home = () => {
  return (

    <div className='home'>
        <h2>Bem vindos a CarTable, um app simples para criar tabelas de carros utilizando React-Router, Axios e CrudCrud.</h2>
        
        <div className='p'>
          <img src={hehe} alt="gif" />
          <p>Para começar, vá para o menu de inserção ali na nossa barra de navegação.</p>
          
          <img src={hehe} alt="gif" style={{transform: 'scaleX(-1)'}} />
        </div>
        
    </div>
  )
}

export default Home