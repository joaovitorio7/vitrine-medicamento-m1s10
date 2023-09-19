import { createContext, useState } from "react";

export const MedicamentoContext = createContext()

export const MedicamentoContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState([])

  const AdicionarMedicamento = (nome, laboratorio, preco) => {
    if(nome.length == "" || laboratorio.length == "" || preco == 0){
      alert("Preencha todas as informações!")
      return 
    }

    const novoMedicamento = {
      id: listaMedicamentos.length + 1,
      nome: nome,
      laboratorio: laboratorio,
      preco: preco,
      favorito: false
    } 

    const novaLista = [...listaMedicamentos]
    //novaLista.push(novoMedicamento)
    setListaMedicamentos(novaLista)
  } 

  return(
    <MedicamentoContext.Provider value={{listaMedicamentos, AdicionarMedicamento}}>
      {children}
    </MedicamentoContext.Provider>
  )
}

