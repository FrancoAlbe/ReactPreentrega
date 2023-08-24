import { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import './App.css'

const Titulo = () => {
  return (
    <div>
      <h1>Venta de Hardware F.A</h1>
    </div>
  )
}



function App() {

  return (
    <div>
      <Titulo />
      <Navbar />
      <ItemListContainer texto= "Texto de prueba para probar probando"/>
      <Footer />
    </div>
  )
}


export default App
