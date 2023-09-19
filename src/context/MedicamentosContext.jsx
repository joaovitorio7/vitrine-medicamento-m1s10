import { createContext, useState } from "react";

export const MedicamentosContext = createContext()

export const MedicamentosContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState([])

  const AdicionarMedicamento = (nome, laboratorio, preco) => {
    if(nome.length == "" || laboratorio.length == "" || preco == 0 || preco == ""){
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

    const novaLista = [...listaMedicamentos, novoMedicamento]
    console.log(novaLista)
    //novaLista.push(novoMedicamento)
    setListaMedicamentos(novaLista)
    alert("Medicamento cadastrado com sucesso!")
  } 

  const FavoritarMedicamento = (id) => {

  }

  return(
    <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento, FavoritarMedicamento}}>
      {children}
    </MedicamentosContext.Provider>
  )
}

