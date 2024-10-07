const txt = "aqswdefrgerfzuiejlop";

//1
console.log(`1.Feladat : ${txt.slice(0,5)}`);

//2
console.log(`2.Feladat : ${txt.slice(3,8)}`);

//3
console.log(`3.Feladat : ${txt.slice(4)}`);

//4
console.log(`4.Feladat : ${txt.slice(4, 10)}`);

//5
let uppTxt = txt.toUpperCase();
console.log(`5.Feladat : ${uppTxt}`);

//6
let sixthTxt = "";
for(let i = 1; i <= txt.length; i++){
    if(i % 2 == 0){
        sixthTxt += txt[i-1].toUpperCase();
    }
    else{
        sixthTxt += txt[i-1];
    }
}
console.log(`6.Feladat : ${sixthTxt}`);

//7
console.log(`7.Feladat : ${txt.replaceAll('e', 'E')}`)

//8
let array = txt.split('e');
console.log(`8.Feladat : ${array}`);