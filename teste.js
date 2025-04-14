// ver em que modo está a página quando inicia
let modo = localStorage.getItem("modo")

if(modo == null || modo == "claro"){  
    document.querySelector("body").classList.remove("modoEscuro")

}else{
    document.querySelector("body").classList.add("modoEscuro")

}

// mudar conforme clique
document.querySelector("#modo").addEventListener("click", function(){
    let modo = localStorage.getItem("modo")
    
    if(modo == null || modo == "claro"){
        document.querySelector("body").classList.add("modoEscuro")
        localStorage.setItem("modo", "escuro")
    }else{
        document.querySelector("body").classList.remove("modoEscuro")
        localStorage.setItem("modo", "claro")
    }
})

// usar esta página para os redirecionamentos
function mudarTamanho(tamanho){
    
    
    let tamanhoTexto = tamanho
    console.log(tamanhoTexto);

    if(tamanhoTexto == "pequeno"){
        console.log("pequeno");
        document.querySelector("body").id = "pequeno"
    }else if(tamanhoTexto == "normal"){
        console.log("normal");
        document.querySelector("body").id = "normal"
    }else{
        console.log("grande");
        document.querySelector("body").id = "grande"
    }
}