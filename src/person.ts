abstract class Person {
    private id:string
    private name:string
    private age:number

    constructor(id:string, name:string, age:number){
        this.id = id
        this.name = name
        this.age = age
    }
    getName():string{
        return this.name
    }
    getAge():number{
        return this.age
    }
}
export default Person;