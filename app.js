// let s1 = "Asalam-o-alikum!....";
// let s2 = "My name is Huzaifa";
// let result = s1.concat(s2);
// console.log(result);

// let result2 = "Hello JavaScript";
// let arr_result = result2.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// let cr7 = ["Hello World"];
// for(i>0;i==0;i++){
//     console.log(cr7[i]);
// }
// confirm('really!');
// prompt("your age","0");

let waS = " 233";
console.log(waS);

let x = ["we","ew"];
let t = "another one";

function huzAifa(){
    alert("answer it!");
    prompt("What is result ? true or false");
    let result = true;
    if (result===false) {
        console.log("you are an idot!");
    } else {
        console.log("hahaah");
    }
}
huzAifa();
let key = [""];
function huzaida(){
    switch (key) {
        case 1:
            alert("funds are transferd to your currrent number!");
            break;
    
        default:alert("follow the rules ...");
            break;
    }
}



var greet = (function alpha(){
    let newest = ["fahad", "abdullah azeem"];
    console.table (newest);
    let invite = prompt("whats your fav person's name: ");
    switch (invite){
        case "fahad"||"abdullah azeem":
            console.log("good boy");
            break;
        default: console.log("nikal .... pehli fursat me nikal ... koi jagaha nhi ha yaha teri!!");
    }
})
// greet();




// how to make a clousre function:
var a = 2;
function outer()
{
    var b = 4;
    function inner()
    {
        var c= 6 ;
        console.log (a+b+c);
    }
    inner();
}
outer();
//----------xx-----------

let myArr = [[[]]];
console.table(myArr);

function git()  {
    let myArr = [[[]]];
}
git();