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

function abrirMenu(element){
    console.log("cliquei");
    
    let botao = element    
    let li = botao.closest("li")
    let submenu = li.querySelector(".listaSubcategorias")

    let todosBotoes = document.querySelectorAll("nav .listaDetalhe > button")
    let todosSubmenus = document.querySelectorAll("nav .listaSubcategorias")
    // let todosSvg = document.querySelectorAll(".listaDetalhe > svg")
    // let todosPath = todosBotoes.querySelectorAll("path")
    let estavaAberto = submenu.classList.contains("aberto")

    for(let btn of todosBotoes){
        btn.setAttribute("aria-expanded", false)
        btn.setAttribute("aria-label", "Abrir o menu expansível")
        let seta = btn.querySelector("path")
        seta.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
    }

    for(let menu of todosSubmenus){
        menu.classList.remove("aberto")
        menu.setAttribute("aria-hidden", true)
    }

    if(!estavaAberto){
        let aberto = submenu.classList.toggle("aberto")
        botao.setAttribute("aria-expanded", aberto? true: false)
        submenu.setAttribute("aria-hidden", aberto?true:false)
        botao.setAttribute("aria-label", aberto? "Fechar o menu expansível":"Abrir o menu espansível")

        let svg = botao.querySelector("svg")
        let path = svg.querySelector("path")            

        path.setAttribute("d", aberto? "M4.5 15.75l7.5-7.5 7.5 7.5":"M19.5 8.25l-7.5 7.5-7.5-7.5")  
        
        setTimeout(function(){
            submenu.classList.remove("aberto")
            botao.setAttribute("aria-expanded", false)
            submenu.setAttribute("aria-hidden",true)
            botao.setAttribute("aria-label","Abrir o menu espansível")
            path.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
        },20000)
    }

     


    
}