let listaDeProdutos = document.getElementById('lista-produtos');
listaDeProdutos.innerHTML = '';
let TotalGeral = 0;
let total = document.getElementById('valor-total');
total.innerHTML = 'R$';

function adicionar() {
    let produtoEscolhido = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    let { preco, Produto } = PrecoEProduto(produtoEscolhido);
    preco = parseFloat(preco).toFixed(2);
    
    let precoXquantidade = preco * quantidade;

    listaDeProdutos.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${Produto} <span class="texto-azul">R$${preco}</span>
  </section>`;
  document.getElementById('quantidade').value= 0
  TotalGeral += precoXquantidade;
  total.textContent = TotalGeral;
  total.textContent = `R$ ${TotalGeral}`;
}

function limpar() {
    listaDeProdutos.innerHTML = '';
    TotalGeral = 0;
    total.textContent = ``;
}

function PrecoEProduto(produto) {
    let preco = '';
    let Produto = '';
    switch (produto) {
        case "Fone de ouvido - R$100":
            preco = '100';
            Produto = 'Fone de ouvido';
            break;

        case "Celular - R$1400":
            preco = '1400';
            Produto = 'Celular';
            break;

        case "Oculus VR - R$5000":
            preco = '5000';
            Produto = 'Oculus VR';
            break;

        default:
            break;
    }
    return { preco, Produto };
}
