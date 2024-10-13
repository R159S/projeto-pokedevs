const listaSelecaoPokedevs = document.querySelectorAll(".pokedev")
listaSelecaoPokedevs.forEach(pokedev =>{
    
    pokedev.addEventListener("click", () => {
        
        esconderCartaoPokedev()

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev)

        desativaPokedevNaListagem()

        ativaPokedevNaListagem(idPokedevSelecionado)

    })
})
function ativaPokedevNaListagem(idPokedevSelecionado) {
    const PokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado)
    PokedevSelecionadoNaListagem.classList.add("ativo")
}

function desativaPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo")
    pokedevAtivoNaListagem.classList.remove("ativo")
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir)
    cartaoPokedevParaAbrir.classList.add("aberto")
    return idPokedevSelecionado
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto")
    cartaoPokedevAberto.classList.remove("aberto")
}

