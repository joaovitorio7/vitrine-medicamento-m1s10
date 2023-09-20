import { useContext } from "react";
import { MedicamentosContext } from "../../context/MedicamentosContext";

function CardMedicamento({medicamento}) {
  const {FavoritarMedicamento} = useContext(MedicamentosContext)
  return(
    <div>
      <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>
      <img width={150} src="https://img.freepik.com/vetores-premium/frasco-de-medicamento-em-branco-embalagem-de-medicamentos-com-caixa-de-embalagem_134452-40.jpg" alt="Imagem remédio" />
      <h4>Medicamento: {medicamento.nome}</h4>
      <h4>Laboratório: {medicamento.laboratorio}</h4>
      <h4>Preço: {medicamento.preco}</h4>
    </div>
  )
}

export default CardMedicamento