import React, { useContext, useState } from 'react'
import { BarraPesquisa } from '../../Components/BarraPesquisa/BarraPesquisa'
import { Fundo } from '../../Components/BarraPesquisa/Style'
import { CartContext } from '../../Contexts/CartContext'

export const CarrinhoCompras =()=> {

  let item = useContext(CartContext).addItem
  item({
      "nome":"The Last of Us",
      "preco":199.90,
      "quantidade":1,
      "categoria":"playstation"
  })
  const [carrinho, setCarrinho] = useState(useContext(CartContext).cart) 
  console.log(carrinho)
  

  return (

    <div>
      <Fundo>
        <BarraPesquisa/>

        <h1>{carrinho.nome}</h1>
        
      </Fundo>
    </div>
  )
}