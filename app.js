const fruits = ['apple', 'banana', 'cherry']
const regex = /a/
const fruitsWithA = []
fruits.forEach(function(result){
    if (regex.test(result)){
        fruitsWithA.push(result);
    }
});
console.log(fruitsWithA);