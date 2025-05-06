

//  Learning Function

//  Normal funticon 
//  Arrow function

function add(num1:number, num2:number):number{
    return num1 + num2
}
add(10, 20)

const div = (num1:number, num2: number = 1): number => num1 + num2;

const poorUser = {
    name: 'Md. Tohin',
    balance: 0,
    addBalance(balance: number): string{
        return `New Balance is: ${this.balance + balance}`;
    }
}

const arr : number[] = [1, 2, 3];

const newArray : number[] = arr.map((element: number) => element * element)

