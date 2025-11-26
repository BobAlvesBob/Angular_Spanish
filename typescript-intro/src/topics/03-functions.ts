

function addNumbers(a:number, b:number){

return a+b;
}


const addNumberArrow = (a: number, b:number):string=>{
    return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber?:number, base:number=2){
    return firstNumber * base;}

// const result : number = addNumbers(1,2)

// const result2 : string = addNumberArrow(1,2)

// const multiplyResult: number = multiply(5, 2, 4);

// console.log(result, result2, multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => string;

}
const healCharacter = ( character: Character, amount:number) => {

    character.hp += amount;

} 

const strider: Character  = {
    name: 'Strider',
    hp:50,
    showHp() {
    const msg = `Puntos de vida ${this.hp}`;
    return msg;
    }

}
console.log(strider.showHp());
healCharacter(strider, 10);
console.log(strider.showHp());


export {};