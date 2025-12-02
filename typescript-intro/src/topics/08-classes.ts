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

const ironman = new Person('Superman','Orlando');
console.log(ironman);