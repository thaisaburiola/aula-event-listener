const produtos = [
  {
    nome: 'Dom Casmurro',
    valor: 11.99
  }
]

//caputurar elementos html

const addButton = document.getElementById("btn-adicionar-produto-01")
const input = document.getElementById('quantidade-produto-01')
const subButton = document.getElementById('btn-subtrair-produto-01')
const valorSubtotal = document.getElementById('valor-subtotal')
const quantidadeSubtotal = document.getElementById('quantidade-subtotal')


function updateSubtotal(quantidadeItens) {
  const sufixo = quantidadeItens === 1 ? ' item' : ' itens '
  const valorTotal = produtos[0].valor * quantidadeItens

  valorSubtotal.innerText = valorTotal.toFixed(2)
  quantidadeSubtotal.innerText = quantidadeItens + sufixo
}


//ADICIONAR EVENT LISTENER AO ELEMENTO HTML
addButton.addEventListener('click', () => {
  input.value = Number(input.value) + 1
  updateSubtotal(Number(input.value))
})

subButton.addEventListener('click', () =>{
  if (input.value > 1) {
    input.value = Number(input.value) -1
    updateSubtotal(Number(input.value))
  }
})



