import { useContext, useState } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext";

function FormularioNovoMedicamento() {

  const {AdicionarMedicamento} = useContext(MedicamentosContext)

  const [nome, setNome] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [preco, setPreco] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    // chamada função de cadastro
    AdicionarMedicamento(nome, laboratorio, preco)
    setNome("")
    setLaboratorio("")
    setPreco(0)
  }
  
  return(
    <>
      <h2>Formulário de cadastro de medicamento</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Nome' 
          value={nome} 
          onChange={(e) => setNome(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Laboratório' 
          value={laboratorio} 
          onChange={(e) => setLaboratorio(e.target.value)}
        />
        <input 
          type="number" 
          placeholder='Preço' 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)}
        />
        <button>
          Cadastrar Novo
        </button>
      </form>
    </>
  )
}

export default FormularioNovoMedicamento