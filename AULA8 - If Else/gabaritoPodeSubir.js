O QUE É CONTROLE DE FLUXO
TOMADA DE DECISÃO DO PROGRAMA
CONDIÇÕES QUE QUANDO ATENDIDAS OU NÃO 
O SEU CÓDIGO TEM UMA AÇÃO

EXEMPLOS PARA CONTROLE DE FLUXO DA AULA 08
Interruptor
SE/ELSE

TODOS TEM UMA CONDIÇÃO

ESTRUTURA SE-ELSE
SE -> (condição)== verdadeiro -> faz uma ação
ELSE -> caso contrário
escrita de código TEXTUAL -> SE e SENÃO


/***
 * Em um parque de diversões nos pedem 
 * um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
 * 
 * ESPERA-SE UMA RESPOSTA DE VERDADEIRO OU FALSO:
 * INDICANDO QUE O PASSAGEIRO PODE OU NÃO PODE SUBIR NO BRINQUEDO
 * 
 * Crie uma função podeSubir() que receba dois parâmetros: 
 * altura da pessoa;
 * se está acompanhado.
 * 
 * Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não,
 * baseado nas condições seguintes:
 * A pessoa deve medir mais de 1,40m e menos de 2 metros.
 * Se a pessoa medir menos de 1,40m, deve ir acompanhada.
 * Se a pessoa medir menos de 1,20m, não pode subir, nem acompanhada.
 * 
 * ANÃ = ALTURA = 1,39
 * SÓ SOBE SE ALTURA < 1,4 
 *  && ESTÁ ACOMPANHADA = TRUE
 * 
 * ANÃ = ALTURA = 1,2
*/

/**
 * 
 * @param {* }altura 
 * @param {* }vemAcompanhado 
 * @returns podeSubir 
 */

função podeSubir(altura, vemAcompanhado) {
    deixe podeSubir;
    
    se (altura > 2) {
        podeSubir = falso;
    }

    se (altura < 1,2) {
        podeSubir = falso;
    }

    se (altura >= 1,4 && altura <= 2) {
        podeSubir = verdade;
    }

    se (altura > 1.2 && altura < 1.4 && vemAcompanhado) {
        podeSubir = verdade;
    }

    retorno podeSubir;
}

função podeSubir(altura, vemAcompanhado) { // nome da funcao e parametros de entrada
deixe podeSubir;

se ((altura >= 1,41 && altura <= 2,0) ) {
podeSubir = verdadeiro;
// * A pessoa deve medir mais de 1,40m e menos de 2 metros.
} mais se (altura >= 1.2 && vemAcompanhado) { // 1.2 -> verdadeiro && falso = falso
// 1,35 -> verdadeiro && verdadeiro = verdadeiro
// * Se a pessoa medir menos de 1,40m, deve ir acompanhada.
podeSubir = verdadeiro;
} mais se (altura > 2 || altura < 1.2) {
podeSubir = falso;
//     }
outra coisa {
podeSubir = falso;
//     }
    
// se altura < 1.2
// * Se a pessoa medir menos de 1,20m, não pode subir, nem acompanhada.

retorno podeSubir;

// se (altura <=2,0 && altura >=1,2 && vemAcompanhado = 1)

// }

console.log("podeSubir TRUE = "+ podeSubir(1,80, falso));
console.log("podeSubir ANÃ 1.35 NÃO ACOMPANHADA = "+ podeSubir(1,35, falso));
console.log("podeSubir ANÃ 1.35 ACOMPANHADA = "+ podeSubir(1,35, true));
console.log("podeSubir 2.10 + falso = "+ podeSubir(2.10, falso));
console.log("podeSubir 2.10 + true = "+ podeSubir(2.10, true));
console.log("podeSubir 1.19 = "+ podeSubir(1.19, falso));
console. log("podeSubir 2.1 = "+ podeSubir(2.1, true));
console. log("podeSubir 2.1 = "+ podeSubir(2.1, falso));