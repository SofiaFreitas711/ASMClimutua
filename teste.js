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

let tamanhoTexto = localStorage.getItem("tamanho")
if(tamanhoTexto == null || tamanhoTexto == "normal"){
    document.querySelector("body").id = "normal"
}else if(tamanhoTexto == "pequeno"){
    document.querySelector("body").id = "pequeno"
}else{
    document.querySelector("body").id = "grande"
}

function mudarTamanho(tamanho){
    let tamanhoTexto = tamanho

    if(tamanhoTexto == "pequeno"){
        document.querySelector("body").id = "pequeno"
        localStorage.setItem("tamanho", "pequeno")
    }else if(tamanhoTexto == "normal"){
        document.querySelector("body").id = "normal"
        localStorage.setItem("tamanho", "normal")
    }else{
        document.querySelector("body").id = "grande"
        localStorage.setItem("tamanho", "grande")
    }
}

// usar esta página para os redirecionamentos
console.log(window.env);
// function irPagina(tipo, detalhe){
//     let tipo = tipo
//     let detalhe = detalhe

//     console.log(tipo, detalhe);
    
// }

function irPagina(params1, params2){
    // console.log(params1,params2);
    switch(params1){
        case "servicos":
            // console.log("sou um servico");
            localStorage.setItem("detalhe", `${params2}`)
            window.location.href = 'detalhe.html'
            
            break
        case "associados":
            localStorage.setItem("detalheAssociados", `${params2}`)
            window.location.href = 'detalheAssociados.html'
            
            break
        case "atualidade":
            localStorage.setItem("detalheAtualidade", `${params2}`)
            window.location.href = 'detalheAtualidade.html'
            
            break

    }
    
}