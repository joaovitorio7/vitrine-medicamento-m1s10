import { createContext, useState } from "react";

export const MedicamentoContext = createContext()

export const MedicamentoContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState([])

  return(
    <MedicamentoContext.Provider value={{listaMedicamentos, setListaMedicamentos}}>
      {children}
    </MedicamentoContext.Provider>
  )
}

