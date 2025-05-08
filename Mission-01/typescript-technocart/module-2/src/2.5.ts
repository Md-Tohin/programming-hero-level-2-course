{
    //  Function with generic

    const createArray = (param: string) : string[] => {
        return [param];
    }
    createArray("Bangladesh");

    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param];
    }
    interface User{
        id: number;
        name: string;
        age?: number;
    }
    createArrayWithGeneric<string>("Bangladesh");
    createArrayWithGeneric<User>({id: 123, name: "Md Tohin", age: 25})

    //  tuple generic type

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
        return [param1, param2]; 
    }
    const result1 = createArrayWithTuple<string, number>("Bangladesh", 420);
    const result2 = createArrayWithTuple<string, {name: string, message: string}>("Hi", {name: "Kamal", message: "Welcome to Next level web development course."});


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next level Web Development course";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Md. Tohin", roll: 1, email: 'mdtohin8585@gmail.com'})
    const student2 = addCourseToStudent({name: "Mr Monir", phone: '01854229083'})

    console.log({student1, student2});
    


}