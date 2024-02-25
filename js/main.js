const resposta = document.querySelector('#resposta')
let choice = ''
const playstationMark = document.querySelector('#playstation')
const main = document.querySelector('main')
const xboxMark = document.querySelector('#xbox')

xboxMark.addEventListener('click', () => {
    playstationMark.style.backgroundColor = 'transparent'
    document.body.style.backgroundColor = '#7EB900'

    playstationMark.style.display = 'none'
    xboxMark.style.display = 'none'

    main.style.display = 'block'
    choice = 'xbox'
})

playstationMark.addEventListener('click', () => {
    xboxMark.style.backgroundColor = 'transparent'
    document.body.style.backgroundColor = '#006FCD'
    
    playstationMark.style.display = 'none'
    xboxMark.style.display = 'none'
    
    main.style.display = 'block'
    choice = 'playstation'
})

window.addEventListener("gamepadconnected", (event) => {
    console.log("Gamepad connected:", event.gamepad);
});

window.addEventListener("gamepaddisconnected", (event) => {
    console.log("Gamepad disconnected:", event.gamepad);
});

function updateGamepad() {
    var gamepads = navigator.getGamepads();

    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
            // console.log("Gamepad " + i + ":", gamepads[i].axes[0]);
            // dpads: gamepads[i].axes[9]);

            // analógico esquerdo eixo X: gamepads[i].axes[0]);
            // analógico esquerdo eixo Y: gamepads[i].axes[1]);
            // analógico direito eixo X: gamepads[i].axes[2]);
            // analógico direito eixo Y: gamepads[i].axes[5]);

            // x: gamepads[i].buttons[0].value);
            // bolinha: gamepads[i].buttons[1].value);
            // quadrado: gamepads[i].buttons[3].value);
            // triangulo: gamepads[i].buttons[4].value);
            // l1: gamepads[i].buttons[6].value);
            // r1: gamepads[i].buttons[7].value);
            // l2: gamepads[i].buttons[8].value);
            // r2: gamepads[i].buttons[9].value);
            // select: gamepads[i].buttons[10].value);
            // start: gamepads[i].buttons[11].value);
            // l3: gamepads[i].buttons[13].value);
            // r3: gamepads[i].buttons[14].value);

            if(choice != ''){
                //MOVIMENTOS DO ANALÓGICO DA ESQUERDA
                if(gamepads[i].axes[1] ==  1){
                    resposta.innerText = 'ANALÒGICO LEFT BAIXO'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[1] ==  -1){
                    resposta.innerText = 'ANALÒGICO LEFT CIMA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[0] ==  1){
                    resposta.innerText = 'ANALÒGICO LEFT DIREITA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[0] ==  -1){
                    resposta.innerText = 'ANALÒGICO LEFT ESQUERDA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                
                //MOVIMENTOS DO ANALÓGICO DA DIREITA
                if(gamepads[i].axes[5] ==  1){
                    resposta.innerText = 'ANALÒGICO RIGHT BAIXO'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[5] ==  -1){
                    resposta.innerText = 'ANALÒGICO RIGHT CIMA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[2] ==  1){
                    resposta.innerText = 'ANALÒGICO RIGHT DIREITA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[2] ==  -1){
                    resposta.innerText = 'ANALÒGICO RIGHT ESQUERDA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }

                // BOTÕES DO D-PAD
                if(gamepads[i].axes[9] ==   -0.4285714030265808){
                    resposta.innerText = 'DPAD DIREITA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[9] ==  0.7142857313156128){
                    resposta.innerText = 'DPAD ESQUERDA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[9] ==  -1){
                    resposta.innerText = 'DPAD CIMA'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].axes[9] ==  0.14285719394683838){
                    resposta.innerText = 'DPAD BAIXO'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }

                // BOTÕES GERAIS
                if(gamepads[i].buttons[0].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'X'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'A'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[1].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = '〇'
                        resposta.style.paddingBottom = '140px'
                        resposta.style.fontSize = '7em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'B'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[3].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = '◻'
                        resposta.style.paddingBottom = '140px'
                        resposta.style.fontSize = '7em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'X'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[4].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = '△'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '7.4em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'Y'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[6].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'L1'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'LB'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[7].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'R1'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'RB'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[8].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'L2'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'LT'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[9].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'R2'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'RT'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[10].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'SELECT'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'VIEW'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[11].value == 1){
                    if(choice == 'playstation'){
                        resposta.innerText = 'START'
                        resposta.style.paddingBottom = '0px'
                        resposta.style.fontSize = '5em'
                    }else if(choice == 'xbox'){
                        resposta.innerText = 'MENU'
                    }else{
                        return
                    }
                }
                if(gamepads[i].buttons[13].value == 1){
                    resposta.innerText = 'L3'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
                if(gamepads[i].buttons[14].value == 1){
                    resposta.innerText = 'R3'
                    resposta.style.paddingBottom = '0px'
                    resposta.style.fontSize = '5em'
                }
            }
        }
    }

    requestAnimationFrame(updateGamepad);
}

// Atualizar a leitura do gamepad
updateGamepad();