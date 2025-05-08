{
    //  inheritance 
    
    class Person {
        name: string;
        age: number;
        address: string;

        constructor (name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfSleep: number){
            console.log(`${this.name} will sleep for hours ${numOfSleep}`);
        }
    }

    class Student extends Person{
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }        
    }

    class Teacher extends Person{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass} classes`);
        } 
    }

    const student1 = new Student("Md. Tohin", 25, "Jamalpur");
    student1.getSleep(8);
    

    const teacher1 = new Teacher("Md. Saddam", 48, "Dhaka", "Ass. Professor");
    teacher1.takeClass(5);
    console.log(teacher1.designation);

}