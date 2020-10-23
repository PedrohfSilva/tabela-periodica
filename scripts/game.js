// Constantes dos inputs e botões do jogo no HTML
const elementNameRandom = document.querySelector("div#play_game input#element_name_random");
const skipElement = document.querySelector("div#play_game button#skip_element");
const score = document.querySelector("div#play_game input#score");
const time = document.querySelector("div#play_game input#time");
const start = document.querySelector("div#play_game button#start");
const restart = document.querySelector("div#play_game button#restart");

// Variávis booleanas que indica se os botões iniciar e reiniciar foram clicados
let startButton;
let restartButton;

let points; // número de pontos no jogo
let elementNumberRandom; // posição no array do elemento gerado aleatóriamente

let skip; // variável do timeout para pular o elemento
let decreaseSeconds; // variável do intervalo para diminuir os segundos

// Verifica se o elemento clicado está correto, e se estiver, aumenta 1 ponto, e gera outro elemento
for(element of elementsHTML) {
    // evento de click em todos os elementos
    element.addEventListener("click", event => {
        // se o usuário clicou no botão de começar e o jogo ainda ainda acabor, executa os comandos
        if(startButton) {
            let elementIndex = elementsHTML.indexOf(event.target); // recebe o índice do elemento clicado 

            // verifica se o elemento clicado está correto
            if(elementIndex == elementNumberRandom) {
                points++; // aumenta 1 ponto
                score.value = points; // atualiza os pontos no jogo

                // adiciona a classe correct no elemento clicado e depois retira
                event.target.classList.add("correct");
                setTimeout(() => {event.target.classList.remove("correct")}, 600);

                // gera um novo elemento aleatóriamente diferente do último
                do {
                    elementNumberRandom = numberRandom();
                } while(elementsProperties[elementNumberRandom].name === elementNameRandom.value);
                elementNameRandom.value = elementsProperties[elementNumberRandom].name;
            }
            else {
                // adiciona a classe incorrect no elemento clicado e depois retira
                event.target.classList.add("incorrect");
                setTimeout(() => {event.target.classList.remove("incorrect")}, 600);
            }
        }
    });
}

// Evento de click no botão iniciar para começar o jogo
start.addEventListener("click", () => {
    points = 0;
    score.value = points;

    // quando o jogo iniciar, esconde o botão iniciar e aparece o botão reiniciar
    start.classList.add("hide");
    restart.classList.remove("hide");

    startButton = true; // indica que o botão iniciar foi clicado 
    restartButton = false; // indica que o botão reiniciar ainda não foi clicado
    skipElement.disabled = false; // habilita o botão pular

    // gera um elemento aleatóriamente
    elementNumberRandom = numberRandom();
    elementNameRandom.value = elementsProperties[elementNumberRandom].name;

    timeCount(); // conta o tempo restante para acabar o jogo

    // disabilita os campos do nome e do símbolo do elemento
    elementNameOver.disabled = true;
    elementSymbolOver.disabled = true;

    // evento de click no botão pular para gerar um novo elemento depois de 2 segundos
    skipElement.addEventListener("click", () => { 
        // if o botão pular estiver habilitado, executa os comandos
        if(!skipElement.disabled) {
            skipElement.disabled = true; // desabilita o botão pular

            // adiciona a classe showElement no elemento que foi gerado e depois retira
            elementsHTML[elementNumberRandom].classList.add("showElement");
            setTimeout(() => {elementsHTML[elementNumberRandom].classList.remove("showElement");}, 2000);

            skip = setTimeout(() => {
                // gera um novo elemento aleatóriamente diferente do último
                do {
                    elementNumberRandom = numberRandom();
                } while(elementsProperties[elementNumberRandom].name === elementNameRandom.value);
                elementNameRandom.value = elementsProperties[elementNumberRandom].name;

                skipElement.disabled = false; // habilita o botão pular
            }, 2001);
        }
    });

    // evento de click no botão reiniciar para voltar ao inínio do jogo
    restart.addEventListener("click", () => {
        // esconde o botão reiniciar e aparece o botão iniciar
        restart.classList.add("hide");
        start.classList.remove("hide");

        clearInterval(decreaseSeconds); // para de diminuir o tempo
        clearTimeout(skip); 

        // retira a classe showElement do elemento que está sendo mostrado
        elementsHTML[elementNumberRandom].classList.remove("showElement");

        score.value = 0; // define a pontuação para 0
        time.value = "1:00"; // define o tempo para 1 minuto
        elementNameRandom.value = ""; // esvazia o campo dos elemento gerados
        skipElement.disabled = true; // desabilita o botão pular
        startButton = false; // indica que o botão iniciar ainda não foi clicado
        restartButton = true; // indica que o botão reiniciar foi clicado

        // habilita os campos do nome e do símbolo do elemento
        elementNameOver.disabled = false;
        elementSymbolOver.disabled = false;
    });
});

// Função que retorna um número inteiro aleatório entre 0 e 117
function numberRandom() {
    return Math.floor(Math.random()*118);
}

// Função que conta o tempo restante do jogo
function timeCount() {
    let seconds = 60; // define a quantidade de segundos inicial

    // diminui 1 segundo do tempo restante a cada 1 segundo e atualiza-o no campo do tempo de jogo até que o botão reiniar seja clicado ou o tempo seja igual a 0 segundos
    decreaseSeconds = setInterval(() => {
        seconds--; // diminui 1 segundo do tempo

        // para de diminuir o tempo quando ele chega em 0 segundos ou quando o botão reiniciar for clicado
        if(seconds == 0) {
            clearInterval(decreaseSeconds); // para de diminuir o tempo
            clearTimeout(skip); 

            // retira a classe showElement do elemento que está sendo mostrado
            elementsHTML[elementNumberRandom].classList.remove("showElement");

            elementNameRandom.value = ""; // esvazia o campo dos elementos gerados
            skipElement.disabled = true; // desabilita o botão pular
            startButton = false; // indica que o botão iniciar ainda não foi clicado

            // habilita os campos do nome e do símbolo do elemento
            elementNameOver.disabled = false;
            elementSymbolOver.disabled = false;
        }

        // atualiza o tempo restante para acabar o jogo
        time.value = '0:' + ('0' + String(seconds)).slice(-2);
    }, 1000);
}
