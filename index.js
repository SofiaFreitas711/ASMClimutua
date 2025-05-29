// ver em que modo está a página quando inicia
let todosBotoesNav = document.querySelectorAll(".botaoNav")
let modo = localStorage.getItem("modo")

if(modo == null || modo == "claro"){  
    document.querySelector("body").classList.remove("modoEscuro")
    todosBotoesNav[0].classList.add("claro")
    todosBotoesNav[4].classList.add("claro")
}else{
    document.querySelector("body").classList.add("modoEscuro")
    todosBotoesNav[0].classList.remove("claro")
    todosBotoesNav[4].classList.remove("claro")
}

// mudar conforme clique e trocar aria-label

function trocarModo(element){
    let botaoModo = element
    
    let modo = localStorage.getItem("modo")

    if(modo == null || modo == "claro"){
        document.querySelector("body").classList.add("modoEscuro")
        localStorage.setItem("modo", "escuro")  
        botaoModo.setAttribute("aria-label","Alterar para modo claro")
        todosBotoesNav[0].classList.remove("claro")
        todosBotoesNav[4].classList.remove("claro")
    }else{
        document.querySelector("body").classList.remove("modoEscuro")
        localStorage.setItem("modo", "claro")  
        botaoModo.setAttribute("aria-label", "Alterar para modo escuro")
        todosBotoesNav[0].classList.add("claro")
        todosBotoesNav[4].classList.add("claro")
    }
    
}

let tamanhoTexto = localStorage.getItem("tamanho")
let botaoTamanho = document.querySelectorAll(".botaoNav")
if(tamanhoTexto == null || tamanhoTexto == "normal"){
    document.querySelector("body").id = "normal"
    botaoTamanho[2].classList.add("selecionado")
    botaoTamanho[6].classList.add("selecionado")
}else if(tamanhoTexto == "pequeno"){
    document.querySelector("body").id = "pequeno"
    botaoTamanho[1].classList.add("selecionado")
    botaoTamanho[5].classList.add("selecionado")
}else{
    document.querySelector("body").id = "grande"
    botaoTamanho[3].classList.add("selecionado")
    botaoTamanho[7].classList.add("selecionado")
}

function mudarTamanho(tamanho, element){

    let tamanhoTexto = tamanho
    let botao = element
    let todosBotoes = document.querySelectorAll(".botaoNav")
    let estavaSelecionado = botao.classList.contains("selecionado")

    if(!estavaSelecionado){
        for(let botao of todosBotoes){
            botao.classList.remove("selecionado")
        }
        botao.classList.add("selecionado")
        
    }

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

function irPagina(params1, params2){
    switch(params1){
        case "servicos":
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

function abrirMenuMobile(params1, element){
    let botao = element    
    let li = botao.closest("li")
    let submenu = li.querySelector(".listaSubcategorias")
    let area = params1

    let todosBotoes = document.querySelectorAll(".listaDetalhe > button")
    let todosSubmenus = document.querySelectorAll(".listaSubcategorias")
    let estavaAberto = submenu.classList.contains("aberto")

    todosBotoes[0].setAttribute("aria-expanded", false)
    todosBotoes[0].setAttribute("aria-label", "Abrir o menu expansível serviços")

    todosBotoes[1].setAttribute("aria-expanded", false)
    todosBotoes[1].setAttribute("aria-label", "Abrir o menu expansível associados")

    for(let btn of todosBotoes){
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
        submenu.setAttribute("aria-hidden", aberto?false:true)
        botao.setAttribute("aria-label", aberto? `Fechar o menu expansível ${area}`:`Abrir o menu espansível ${area}`)

        let svg = botao.querySelector("svg")
        let path = svg.querySelector("path")            

        path.setAttribute("d", aberto? "M4.5 15.75l7.5-7.5 7.5 7.5":"M19.5 8.25l-7.5 7.5-7.5-7.5")  
        
        setTimeout(function(){
            submenu.classList.remove("aberto")
            botao.setAttribute("aria-expanded", false)
            submenu.setAttribute("aria-hidden",true)
            botao.setAttribute("aria-label",`Abrir o menu espansível ${area}`)
            path.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
        },20000)
    }   
}

function abrirMenuDesktop(params1, params2, params3){
    let id = params1
    let menu = document.querySelector(`#${id}`)
    let items = menu.querySelectorAll("a")
    // menu.classList.toggle("aberto")
    // menu.setAttribute("aria-hidden", false)
    let botao = params2
    let area = params3
  
    let todosBotoes = document.querySelectorAll(".btnMenuExp")
    let todosSubmenus = document.querySelectorAll(".listaSubcategorias")
    let estavaAberto = menu.classList.contains("aberto")

    todosBotoes[0].setAttribute("aria-expanded", false)
    todosBotoes[0].setAttribute("aria-label", "Abrir o menu expansível serviços")

    todosBotoes[1].setAttribute("aria-expanded", false)
    todosBotoes[1].setAttribute("aria-label", "Abrir o menu expansível associados")

    for(let btn of todosBotoes){
        let seta = btn.querySelector("path")
        seta.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
    }

    // for(let btn of todosBotoes){
    //     btn.setAttribute("aria-expanded", false)
    //     btn.setAttribute("aria-label", "Abrir o menu expansível")                
    //     let seta = btn.querySelector("path")
    //     seta.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
    // }

    for(let menu of todosSubmenus){       
        menu.classList.remove("aberto")
        menu.setAttribute("aria-hidden", true)
    }

    if(!estavaAberto){
        
        let aberto = menu.classList.toggle("aberto")
        botao.setAttribute("aria-expanded", aberto? true: false)
        items[0].focus()
        for(let item of items){
            item.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') {
                e.preventDefault();
                items[(i + 1) % items.length].focus();
                } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                items[(i - 1 + items.length) % items.length].focus();
                }
            });
        }
        
        console.log(botao);
        
        menu.setAttribute("aria-hidden", aberto?false:true)
        botao.setAttribute("aria-label", aberto? `Fechar o menu expansível ${area}`:`Abrir o menu espansível ${area}`)

        let svg = botao.querySelector("svg")
        let path = svg.querySelector("path")            

        path.setAttribute("d", aberto? "M4.5 15.75l7.5-7.5 7.5 7.5":"M19.5 8.25l-7.5 7.5-7.5-7.5")  
        
        setTimeout(function(){
            menu.classList.remove("aberto")
            botao.setAttribute("aria-expanded", false)
            menu.setAttribute("aria-hidden",true)
            botao.setAttribute("aria-label",`Abrir o menu espansível ${area}`)
            path.setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
        },20000)
    }   
}

function menu(){
    let menu = document.querySelector('#menu')   
    
    if(menu.style.display == ""){
        menu.style.display = "block"
        
    }else{
        menu.style.display = ""
    }
    
}