function division(a:number,b:number):number|object{
    if(!isNaN(a) && !isNaN(b)){
        if(b !== 0) return a / b
        else return ({
            code: 404,
            message: "no se puede dividir entre 0"
        })
    }
    else return {
        code: 403,
        message: "operacion no permitida, alguno de los datos ingresados no es numerico"
    }
}
export default division;