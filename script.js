function bottonOpen(botao) {
    let bloco = document.getElementById("main__bloco--" + botao.id);
    if (bloco.style.display == 'none') { bloco.style.display = 'flex' }
    else { bloco.style.display = 'none' }
}

function OnMenu() {
    document.getElementById("MenuMerc").style.display = 'block'
}

//Aplicar Check ao item de compra, e salvar a cor status
function statusItem(maid) {
    let colorDiv = window.getComputedStyle(maid).backgroundColor;
    switch (colorDiv) {
        case 'rgba(255, 0, 0, 0.7)':
            maid.style.backgroundColor = 'rgba(223, 223, 23, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
            break;
        case 'rgba(223, 223, 23, 0.7)':
            maid.style.backgroundColor = 'rgba(2, 121, 2, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
            break;
        case 'rgba(2, 121, 2, 0.7)':
            maid.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
    }
}

// Salvar valor no localStorage ao alterar o input
function salvarValor(input) {
    localStorage.setItem(input.id, JSON.stringify(Number(input.value)));
}

// Recuperar O VALOR SALVO e aplicá-lo ao input quando a página carregar
window.onload = function valor() {
    //Valores Stock, last, check//
    for (let j = 1; j <= 20; j++) {
        for (let i = 1; i <= 20; i++) {
            let input = document.getElementById("main__item--" + j + "-" + i);
            if (input) {
                let valorSalvo = localStorage.getItem(input.id);
                input.value = valorSalvo;
            }
        }
    }
    //Cores //
    for (let y = 1; y <= 20; y++) {
        for (let x = 1; x <= 20; x++) {
            let bloco = document.getElementById("main__bloco--" + y + "-" + x);
            if (bloco) {
                let valorSalvo = localStorage.getItem(bloco.id);
                if (valorSalvo)
                    console.log(valorSalvo);
                bloco.style.backgroundColor = valorSalvo;
            }
        }
    }
    //Return the sum and value each product//
for (let a = 1; a <= 20; a++) {
	for (let b = 1; b <= 20; b++) {
	let maincusto = document.getElementById("main__itemCusto--" + a + "-" + b);
		if (maincusto) {
        let valorSalvo = localStorage.getItem(maincusto.id);
		maincusto.value = valorSalvo;
		console.log("main__itemCusto--" + a + "-" + b);
		}
	}
}
//     let resultado = document.getElementById("soma");
//     let soma = 0
//     let multi = 0
//     for (let a = 1; a <= 20; a++) {
//         c = 0
//         for (let b = 1; b <= 20; b++) {
//             let bloco = document.getElementById("main__itemCusto--" + a + "-" + b);
//             if (bloco) {
//                 let valorSalvo = JSON.parse(localStorage.getItem(bloco.id));
//                 if (valorSalvo)
//                     c = c+3;
//                     let itemLast = document.getElementById("main__item--" + a + "-" + c);
//                     let last = JSON.parse(localStorage.getItem(itemLast.id));
//                     if (last)
//                         multi = Number(valorSalvo) * Number(last);
//                     soma = soma + multi;
//                     bloco.value = valorSalvo;
//                     console.log("main__itemCusto--" + a + "-" + b);
//                     console.log("main__item--" + a + "-" + c);
//                     console.log("Custo do produto: " + valorSalvo);
//                     console.log("last :" + last)
//                     console.log("Valor de soma é: " + soma);
//                     resultado.value = soma;
//                 }
//             }
//         }
}


//Inspeção inicial da lista de compras//
function resetCor(){
    
let bloco = document.getElementById("main__bloco--1-1");    
bloco.style.backgroundColor = 'rgba(223, 223, 23, 0.7)';
localStorage.setItem(bloco.id, bloco.style.backgroundColor);
}