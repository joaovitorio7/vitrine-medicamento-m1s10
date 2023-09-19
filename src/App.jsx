// import { useState } from 'react'
import './App.css'

import { MedicamentosContextProvider }  from "./context/MedicamentosContext";

import Header from "./components/Header";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento";
import CardMedicamento from './components/CardMedicamento';

function App() {

  return (
    <>
      <Header />
      <MedicamentosContextProvider>
      <FormularioNovoMedicamento />
      <CardMedicamento medicamento={{
        nome:'Dorflex', 
        laboratorio:'Clamed', 
        preco: 5, 
        favorito: false, 
        id: 1}} 
      />
      </MedicamentosContextProvider>
    </>
  )
}

export default App
