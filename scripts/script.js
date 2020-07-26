// Constantes do elemento tabela periódica e de seus elementos filhos no HTML
const tabelaPeriodica = document.querySelector("main div#tabela_periodica");
const elementsHTML = [];

// Cria os elementos no HTML, posiciona-os na tabela, coloca as informações e a cor de cada um, e adiciona no array
for (let i=0; i<118; i++) {
    // cria o elemento com a classe element e coloca na tabela periódica
    let element = document.createElement("div");
    element.classList.add("element");
    tabelaPeriodica.appendChild(element);

    // posiciona o elemento na linha e na coluna da tabela
    element.style.gridColumn = `${elementsProperties[i].positionX}`;
    element.style.gridRow = `${elementsProperties[i].positionY}`;

    // cria e coloca o símbolo e o número atômico do elemento com suas respectivas classes
    var symbol = document.createElement("div");
    var number = document.createElement("div");
    symbol.classList.add("symbol");
    number.classList.add("number");
    symbol.textContent = `${elementsProperties[i].symbol}`;
    number.textContent = `${elementsProperties[i].number}`;
    element.appendChild(symbol);
    element.appendChild(number);

    // coloca a cor do elemento de acordo com o seu tipo
    element.style.backgroundColor = element_color(elementsProperties[i].group);
    
    // adiciona o elemento no array
    elementsHTML.push(element);
}

// Função que retorna a cor do elemento de acordo com o seu grupo
function element_color(group) {
    switch(group) {
        case 1:
            return "#A1D344";
        case 2:
            return "#F1B200";
        case 3:
            return "#4DB6AC";
        case 4:
            return "#A2C7D3";
        case 5:
            return "#90E3E9";
        case 6:
            return "#3D9EE3";
        case 7:
            return "#EADA00";
        case 8:
            return "#70CBEB";
        case 9:
            return "#EB8E8E";
        case 10:
            return "#DCADD6";
    }
}

// Constantes dos inputs do nome, do símbolo, da massa atômica e do grupo dos elementos   
const elementNameOver = document.querySelector("div#tabela_periodica input#element_name_over");
const elementSymbolOver = document.querySelector("div#tabela_periodica input#element_symbol_over");
const elementMassOver = document.querySelector("div#tabela_periodica input#element_mass_over");
const elementGroupOver = document.querySelector("div#tabela_periodica input#element_group_over");

// Array com o nome dos grupos de elementos
const groupsName = [
    "Não metais",
    "Metais alcalinos",
    "Semimetais",
    "Outros metais",
    "Lantanídeos",
    "Gases nobres",
    "Metais alcalino-terrosos",
    "Halogênios",
    "Metais de transição",
    "Actinídios"
];

let found = false; // indica se o elemento foi encontrado
let elementFound; // recebe o elemento encontrado

// Eventos do mouse
for (element of elementsHTML) {
    element.addEventListener("mouseover", event => {
        // adiciona a classe over no elemento em foco
        event.target.classList.add("over");

        // indica o índice do elemento em foco
        let elementIndex = elementsHTML.indexOf(event.target); 

        // mostra o nome, o símbolo, a massa atômica e o grupo do elemento
        elementNameOver.value = elementsProperties[elementIndex].name;
        elementSymbolOver.value = elementsProperties[elementIndex].symbol;
        elementMassOver.value = elementsProperties[elementIndex].mass;
        elementGroupOver.value = groupsName[elementsProperties[elementIndex].group - 1];
        elementGroupOver.style.backgroundColor = element_color(elementsProperties[elementIndex].group);

        // se algum elemento estiver selecionado, retira sua seleção
        if(found) {
            elementFound.classList.remove("searchedElement");
            found = false;
        }
    });
    
    element.addEventListener("mouseout", event => {
        // remove a classe over do elemento
        event.target.classList.remove("over");

        // esvazia os campos das informações do elemento
        elementNameOver.value = "";
        elementSymbolOver.value = "";
        elementMassOver.value = "";
        elementGroupOver.value = "";
        elementGroupOver.style.backgroundColor = "#FFF";
    });

    element.addEventListener("click", event => {
        // let classes = event.target.className.split(" ");
        // if(classes.includes("searchedElement")) 
        //     event.target.classList.remove("searchedElement");
        // else 
        //     event.target.classList.add("searchedElement");
    });
}

// Busca de elemento por nome
elementNameOver.addEventListener("input", () => {
    // esvazia o campo do símbolo, da massa e do grupo do elemento
    elementSymbolOver.value = "";
    elementMassOver.value = "";
    elementGroupOver.value = "";
    elementGroupOver.style.backgroundColor = "#FFF";

    // retira a seleção do elemento encontrado
    if(found) {
        elementFound.classList.remove("searchedElement");
        found = false;
    }

    // verifica se o elemento pesquisado existe na tabela
    for (index in elementsHTML) {
        if(elementsProperties[index].name.toLowerCase() === elementNameOver.value.toLowerCase()) {
            found = true;
            elementFound = elementsHTML[index];
            break;
        }
    }

    // caso ele exista na tabela, ele será mostrado para o usuário, junto com suas outras informações
    if (found) {
        elementsHTML[index].classList.add("searchedElement");
        elementSymbolOver.value = elementsProperties[index].symbol;
        elementMassOver.value = elementsProperties[index].mass;
        elementGroupOver.value = groupsName[elementsProperties[index].group - 1];
        elementGroupOver.style.backgroundColor = element_color(elementsProperties[index].group);
    }
});

// Busca de elemento por símbolo (mesma lógica da função anterior)
elementSymbolOver.addEventListener("input", () => {
    elementNameOver.value = "";
    elementMassOver.value = "";
    elementGroupOver.value = "";
    elementGroupOver.style.backgroundColor = "#FFF";

    if(found) {
        elementFound.classList.remove("searchedElement");
        found = false;
    }
    for (index in elementsHTML) {
        if(elementsProperties[index].symbol.toLowerCase() === elementSymbolOver.value.toLowerCase()) {
            found = true;
            elementFound = elementsHTML[index];
            break;
        }
    }
    if (found) {
        elementsHTML[index].classList.add("searchedElement");
        elementNameOver.value = elementsProperties[index].name;
        elementMassOver.value = elementsProperties[index].mass;
        elementGroupOver.value = groupsName[elementsProperties[index].group - 1];
        elementGroupOver.style.backgroundColor = element_color(elementsProperties[index].group);
    }
});
