class User{
    name : string;
    constructor(_name:string){
          
        this.name = _name;
    }
}

const tom : User = new User("Tom");
const header = this.document.getElementById("header")!;
header.innerHTML = "Hello " + tom.name;