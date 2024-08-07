type tech = "tecnologia" | "informatica" | "computacion" | "perifericos"
type cloth = "indumentaria" | "vestimenta" | "ropa" | "moda"
type category = tech | cloth |"inmuebles"|"automotriz"| "hogar"

class Product {
    private name:string
    private description:string
    private category:category[]
    private price:number
    private stock:number

    increment(percent:number){
        this.price+= this.price*percent
    }
}