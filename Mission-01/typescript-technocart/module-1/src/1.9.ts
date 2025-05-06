{

    //  learn alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string;
    }

    const student1: Student = {
        name: "Habibur Rahman",
        age: 55,
        gender: 'Male',
        contactNo: '01682885937',
        address: 'Sreepur, Gazipur'
    }

    const student2: Student = {
        name: "Mallika Bagum",
        age: 50,
        gender: 'Female',
        contactNo: '01819810909',
        address: 'Jamalpur'
    }

    const student3: Student = {
        name: "Md. Tohin",
        age: 25,
        gender: 'Male',
        contactNo: '01854229083',
        address: 'Mirpur 2, Dhaka'
    }

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "Md. Tohin";
    const isAdmin:IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;




}