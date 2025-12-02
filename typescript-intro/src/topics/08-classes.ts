export class Person {
    // public name: string;
    // public address: string;

    constructor(
        public name: string, 
        private address: string = 'No Address'){//para usar, tienes que modificar tsconfig.json
       this.name=name;
       this.address=address;

    }
}

export class Hero extends Person {

    constructor(
         public alterEgo: string,
         public age: number,
         public realName: string

    ){
       
        super(realName, 'Ontario');
    }

}

const ironman = new Hero('Superman',45, 'Clark');
console.log(ironman);