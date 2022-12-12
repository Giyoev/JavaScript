let num =20;

function showFirstMessage(text){
console.log(text);
console.log(num);
}

showFirstMessage("Helo World");
console.log(num);



function ret(){
    let num=50;

    //

    return num;
}

const anotherNum=ret();
console.log(anotherNum);

const logger=function(){
    console.log("Salom");
};
logger();

const calc=(a,b)=>{
    console.log("1");
    return a + b;
};