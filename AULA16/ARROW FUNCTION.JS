// let fizzBuzz = (x, y) => {
//     for (let i = 0; i < 100; i++) {
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     } 
       
//         // se multiplo do primeiro - fala Fizz
//         // se multiplo do segundo - fala Buzz
//         // se multiplo de ambos - FizsBuzz
//         // senao
//     }
    

// fizzBuzz(3,5);

let fizzBuzz = (x, y) => {

    for (let i = 0; i < 100; i++) {

        if (i % x === 0 && i % y === 0){
            console.log("FizzBuzz");

        }else if (i % x === 0){
            console.log("Fizz");

        }else if (i % y === 0){
            console.log("Buzz");

        }else {
            console.log(i);
    } 
}
        // se multiplo do primeiro - fala Fizz
        // se multiplo do segundo - fala Buzz
        // se multiplo de ambos - FizsBuzz
        // senao
    }

    fizzBuzz(3,5);
    

