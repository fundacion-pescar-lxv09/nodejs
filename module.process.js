function getArgs(array, newArray = []){
    for(let i = 2; i < array.length; i++) newArray.push(array[i])
    return newArray;
}
function printArgs(array){
    array.forEach((item,i) => console.log(`[${i}]:${item}`
))}
module.exports = { getArgs, printArgs };