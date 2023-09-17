import { useState } from 'react'
import './App.css'

import  MedicamentoContextProvider  from "./context/MedicamentosContext";

import Header from "./components/Header";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento";

function App() {

  return (
    <>
      <MedicamentoContextProvider>
      <Header />
      <FormularioNovoMedicamento />
      </MedicamentoContextProvider>
    </>
  )
}

export default App
