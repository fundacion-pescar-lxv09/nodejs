const path = require('path')

const check = (url) => typeof url === "string"

function getURLInfo(url){
    return check(url) && path.parse(url)
    }

function getAbsolutePath(url){
    return check(url) && path.resolve(url)
}
function setAbsolutePath(file){
    return check(file) && path.join(__dirname, file)
}

module.exports = {
    getURLInfo,
    getAbsolutePath,
    setAbsolutePath
}