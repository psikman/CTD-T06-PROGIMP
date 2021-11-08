operadores de função (){
    console. log('-------------- verdadeiro/falso');
    console. log(! verdade);
    console. log(! falso);
    console. log(! ! falso);
    console. log(! ! verdade);
    
    console. log('-------------- 0/1');
    console. log(! 1);
    console. log(! ! 1);
    console. log(! 0);
    console. log(! ! 0);
    console. log(! ! ""); // string vazia?

    console. log('-------------- variaveis');
    let x = 5;
    let y = 9;
    
    console.log(x < 10);
    console.log(x !== 5); não-igual

    console. log(x < 10 && x !== 5);

    console.log(x > 9);
    console.log(x === 5);

    console. log(x > 9 || x === 5);

    console.log(x===y )
    console. log( ! (x===y) )

}

teste função (){
    let x=10;
    let y ="a";
    console.log(y==="b")
    console.log(x >= 10);
    console. log( y==="b" || x >= 10);


    x=3;
    y=8;
    console.log(x == "3");
    console.log(x === y);
    console.log((x == "3" || x === y));
    console. log( x == "3" || x === y ));

    console.log(y !== 8);
    console.log(x <= y);
    console.log((y !== 8 && x <= y));
    console. log( (y !== 8 && x <= y)));

    console. log(! (x == "3" || x === y) && ! (y !== 8 && x <= y));
    
    deixe str = ""
    deixe msg = "haha!"
    let eBonito = "falso"
    
    console.log(str || msg);
    console.log(eBonito);
    console.log(str || msg) && eBonito);
    console. log(! ( ( ( str || msg) && eBonito));
}

operadores();
teste();