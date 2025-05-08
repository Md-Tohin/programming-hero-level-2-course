{
    //  Generic type

    //  Generic Array
    type GenericArray<T> = Array<T>
    type GenericNumberArray = Array<number> 
    type GenericStringArray = Array<string> 
    type GenericBooleanArray = Array<boolean> 

    type RollNumbers = number[]
    const rollNumbers: RollNumbers = [1, 2, 3]              //  process 01
    const rollNumbers1: Array<number> = [1, 2, 3]           //  process two
    const rollNumbers2: GenericNumberArray = [1, 2, 3]      //  process three
    const rollNumbers3: GenericArray<number> = [1, 2, 3]    //  process four

    type Friends  = string[]
    const friends: Friends = ["Md. Tohin", "Mizan", "Rabbi", 'Kamal']
    const friends2: GenericStringArray = ["Md. Tohin", "Mizan", "Rabbi", 'Kamal']
    const friends3: GenericArray<string> = ["Md. Tohin", "Mizan", "Rabbi", 'Kamal']

    type BoolArray = boolean[]
    const boolArray: BoolArray = [true, false, true]
    const boolArray2: GenericBooleanArray = [true, false, true]
    const boolArray3: GenericArray<boolean> = [true, false, true]

    const users: GenericArray<{name: string; age: number; role?: string}> = [
        {
            name: "Md. Tohin",
            age: 25,
            role: "Admin"
        },
        {
            name: 'Kamal',
            age: 20,
        },
        {
            name: "Mahbub",
            age: 23,
            role: 'Manager'
        }
    ]


    //  Generic Tuple
    const emp: [number, string] = [12, "Md. Tohin"]

    type GenericTuple<X, Y> = [X, Y]
    const employee:GenericTuple<number, {name: string, email: string}> = [1, {name: "Md Tohin", email: 'mdtohin8585@gmail.com'}]

    

}