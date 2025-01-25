//let user = 'Kachon Humoyun voxli keladi?';
//console.log(user.length) //выводит число букв

//let message = 'Shakhzod girt bonu';
//console.log(message.toUpperCase()) //делает все буквы большими

//let message = 'Shakhzod girt bonu';
//console.log(message.toLowerCase()) делает все буквы маленькими

//let user = 'Ansor girt hunu';
//console.log(user.replace ('hunu', 'jonka')) //меняет слово местами

//let item ='Hello world';
//console.log(item.indexOf('o')) //выводит по нумерации именно по какому-то числу

//let info = 'Саша не умеет играть в кс';
//console.log(info.slice(9,10))  //выводит букву которая по середине

//let people ='Bonu, Husi, Ansor';
//console.log(people.includes('sasha')) // если слово есть-true, если слово его нет-false


// let name = prompt('Ismingizni kiriting');       
// let user = prompt('Birorta harf kiriting');
// if(name.includes(user)){
//     message = (${name} 'Ismi ichida' ${user} 'harfi mavjud');
// }else if(name == user){
//     message = (${name} 'Ismi ichida' ${user} 'harfi mavjud emas')
// }else{
//     message = (${name} 'Ismi ichida' ${user} 'harfi mavjud emas')
// }
// alert(message)


let name = prompt('Ismingizni kiriting');       
let user = prompt('Birorta harf kiriting');
let message;

if (name.includes(user)) {
    message = `${name} ismi ichida '${user}' harfi mavjud`;
} else {
    message = `${name} ismi ichida '${user}' harfi mavjud emas`;
}

alert(message);
