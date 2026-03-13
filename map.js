let numbers=[2,4,6,8];
let doubled=numbers.map(
    function(num){
        return num*2;
    }
);
console.log(doubled);
let animals=["Lion","Tiger","Dragon"];
let upp=animals.map(
    function(ani){
        return ani.toUpperCase();
    }
);
console.log(upp);
let prices=[100,200,300];
let symbol=prices.map(
    function(sym){
        return "$"+sym;
    }
);
console.log(symbol);
let nums=[1,2,3,4,5,6,7,8];
let ev=nums.filter(
    function(num1){
        return num1%2 ===0;
    }
);
console.log(ev);
let names=["jonsnow","daemon","nedstark"];
let len=names.filter(
    function(name){
        return name.length>5;
    }

);
console.log(len);