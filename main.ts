export { }
class Employee {
    employeeName: string; //public - access from everywhere
    private age:Number; //private - access from within own class not outside
    protected designation:string; //protected - access from within own class and derived classes.

    constructor(name:string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }

}

let myEmployee = new Employee('Code Evolution');

myEmployee.greet()

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName) //initiate previous class property
    }

    delegateWork(){
        console.log('Manager delegating work')
    }
}

const newManager = new Manager('Kabil Mahmud')

newManager.greet()
newManager.delegateWork()

