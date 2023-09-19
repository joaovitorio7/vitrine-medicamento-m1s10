// import { useState } from 'react'
import './App.css'

import { MedicamentosContext } from "./context/MedicamentosContext";

import Header from "./components/Header";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento";
import CardMedicamento from './components/CardMedicamento';
import { useContext } from 'react';

function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return (
    <>
      <Header />
      <FormularioNovoMedicamento />
        {listaMedicamentos.map(medicamento => (
          <CardMedicamento medicamento={medicamento} />
        ))}
    </>
  )
}

export default App
