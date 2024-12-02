//const userNam =  David;
//console.log(userName.length);



//const userName = 'David';
//const hobby = 'water polo';
//console.log('my name ' + userName + ' i like ' + hobby);
//console.log(`my name ${userName} i like ${hobby}`)

//const world = 'world';
//console.log(world.length);
//console.log(world.padEnd(9, '*'));
//console.log(world.toUpperCase());

//const a = 5;
//const f = 4;
//const o = 8;
//const p = 1;
//const k = 6;
//const resolt = a + f + o + p + k;
//console.log(`дякуємо за покупки до сплати ${resolt} грн`)


//let counter = 0;


//while (counter < 10) {
//    console.log('counterP: ', counter);
//counter += 1;
//}

//let clients = 12;
//const maxClients = 20;
//while (clients < maxClients) {
 //   console.log(clients);
//    clients += 1;
//}
//const target = 4;
//let sum = 0;
//for (let i = 0; i <= target; i += 1){
//   sum += i;
//}
//console.log(sum);

//const matrix = [
//    [1, 2, 3],
//[4, 5, 6],
//    [7, 8, 9]
//];
//let total = 0;

//for (let i 0; i < matrix.length; i += 0){
//    console.log('Підпис матриці matrix[i]:')
//}

//const stringx = [5, 4, 6, 8, 5];
//console.log(stringx[0]);
//stringx[4] = 'David';
//console.log

//const numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
//let total = 0;

//for (let i = 0; i > numbers.length; i += 1)


//addNumbers(5, 4, 3)
//function addNumbers(a, b, c) {
//    return a + b + c;
//}
//addNumbers(1, 2, 3);
const sum = function () {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
    const args = Aray.from(arguments)
}
console.log(sum(5,3, 4));
console.log(sum(10, 15, 20, 30, 50));
