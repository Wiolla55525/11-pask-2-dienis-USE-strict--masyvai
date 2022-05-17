/* let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArrau = array1.concat(array2);

console.log(array1)
console.log(combinedArrau);

for(let i = 0; i<10; i++) {
    console.log(i);
}
*/

/*let text = "1, 2, 3, 4, 5";
let array3 = text.split (", ")
console.log(text);
console.log(array3);
*/
/*

let text1 = ["Sausis", "vasaris"];
let joiner= text1.join("-")
console.log(joiner);
*/

//let text5 = "Some text is here";
//console.log(text5.replace(/ /g, "-"));

/* perrasys su naujais zenklais kur tarpai
let text = "Some text here is here";

while(text.includes(" ")){
    text = text.replace(" ", "-");

    console.log(text);
}
*/

/* eilute suraso
let text7 = "Some text here is here";
let array4 = text7.split(" ");
console.log(array4);
for(const word of array4){
    console.log("Word: " + word);
}
*/
/*
let text8 = "Some text here is here";
let array8 = text8.split(" ");
for(let i = 0; i < array8.length; i++){
    let word = array8[i];

    console.log(" $(i+i) : + $word ");

}
*/

/* SUMUOTI NUMBERS
let numbers = [45, 43, 14, 34, 78, 65, 34];
let sum = 0;
for(let number of numbers){
    sum += number;
}
console.log(sum);
*/

//UZDUOTIS PIRMA - trecio masyvo elemento atspausdinimas konsoleje.
/*let numbers = ["Vienas", "Du", "Trys", "Keturi", "Penki"]
console.log(numbers[2]);
numbers[4] = "burokelis";
console.log(numbers[4]);
console.log(numbers.length);
*/
//uzduoris du - masyvas pavadinimu ' months' atspausdinti visus elementis naudojant FOR CIKLA
/*let months = ["Sausis", "Vasaris", "Kovas", "Balandis", "ir t.t."]
for(const elementas of months) {
    console.log(elementas);
}
*/
//UZDUOTIS NR 3 - prie kiekvieno masyvo pridet skaiciuka 5 (ne tik rasant i consol)
/*let numberss = [1, 6, 15, 3]

    for(let i=0; i<numberss.length; i++) {
        numberss[i]+=5;
        console.log(numberss[i]);
    }
    console.log(numberss);
*/
// uzduotis nr 4 - 

let numbers9 = [1, 6, 15, 3, 7, 12]
let sum = 0;

/*for(let i=0; i<numbers9.length; i++){
    sum += numbers9[i];}

    console.log(sum);
*/
/*
for(let numbers10 of numbers9){
    console.log(`${numbers10} = ${sum + numbers10}`)
    sum += numbers9;
    console.log(sum);
}
*/

//kas antra nuo galo atspausdint

let masyvas5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = (masyvas5.lenght-1); i>= 0; i = i - 2){
    console.log(masyvas5[i]);
}

console.log(masyvas5)