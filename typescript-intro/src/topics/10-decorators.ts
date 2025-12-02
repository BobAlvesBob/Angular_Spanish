function classDecorator<T extends {new (...args:any[]): {} } >(
constructor: T
){
return class extends constructor{
    newProperty = 'New Property';
    hello = 'override';
}
}



@classDecorator
class SuperClass {

constructor(public property1: string){

}
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass= new SuperClass('jacare');
console.log( myClass );
