{
    //  interface type 

    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1  = User1 & { role: string }

    const user1: UserWithRole1 = {
        name: "Md Tohin",
        age: 25,
        role: 'Manager',
    }

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user2: UserWithRole2 = {
        name: "Md Tohin",
        age: 25,
        role: "Manager"
    }

    type Arr1 = number[]
    const arr1: Arr1 = [1, 2, 3]

    interface Arr2 {
        [index: number] : number
    }
    const arr2: Arr2 = [1, 2, 3];


    type Add1 = (num1: number, num2: number) => number
    const add1: Add1 = (num1, num2) => {
        return num1 + num1;
    }

    interface Add2 {
        (num1: number, num2: number) : number
    }
    const add2: Add2 = (num1, num2) => {
        return num1 + num1;
    }
    add2(10, 20);




}