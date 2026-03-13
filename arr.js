function add(arr,names){
    arr.push(names);
    return arr;
}
let arr=["jon","ned","arya"];
console.log(add(arr,"robb"));
function remove(arr){
    arr.shift();
    return arr;
}
let nums=[1,2,3,4];
console.log(remove(nums));
function index(arr,word)
{
    return arr.indexOf(word);
}
console.log(index(arr,"ned"));
function reverse(arr){
    return arr.reverse();
}
console.log(reverse(arr));
function checkitem(arr,word){
    return arr.includes(word);
}
console.log(checkitem(arr,"jon"));