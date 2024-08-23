const produto =  ["Tv"]

function carrinho(preço, quantidade){
    produto.push(preço = 50, quantidade = 2)
    if(preço <= 0){
        console.log("Preço e produto invalido!")
    }if(quantidade <= 0){
        console.log("Quantidade inválida!")
    }
}

carrinho()

function listar(){
    console.log(produto)
}
listar()

function preçototal(preço, quantidade){
    preço = 50
    quantidade = 2
    console.log(preço*quantidade + " real(s) é o Preço total!")
}

preçototal()
