export class Person {
    // public name: string;
    // public address: string;

    constructor(
         public firstName: string,
        public lastName: string, 
        private address: string = 'No Address'){//para usar, tienes que modificar tsconfig.json
    //    this.name=name;
    //    this.address=address;

    }
}

// export class Hero extends Person {

//     constructor(
//          public alterEgo: string,
//          public age: number,
//          public realName: string

//     ){
       
//         super(realName, 'Ontario');
//     }

// }

export class Hero  {

    //public person: Person;

    constructor(
         public alterEgo: string,
         public age: number,
         public realName: string,
         public person: Person,
   

    ){
            // this.person= new Person(realName);
      
    }

}

const person = new Person('Clark ', 'Kent', 'New York');
const supaman = new Hero('Superman',45, 'Clark', person);
console.log(supaman);