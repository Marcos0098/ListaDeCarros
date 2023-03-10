import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
        <footer>
            <p>Para utilizar esse app perfeitamente, baixe os arquivos do meu github e utilize sua chave API do <a target={'_blank'} href='https://crudcrud.com/'>CrudCrud</a> no arquivo Provider.jsx.</p>
            <Link target={'_blank'} to={'https://github.com/Marcos0098/ListaDeCarros'}><img src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt="" /></Link>
            
        </footer>
  )
}

export default Footer