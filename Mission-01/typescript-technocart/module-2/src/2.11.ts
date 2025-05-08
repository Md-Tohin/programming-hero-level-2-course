{
    //  utility types

    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    type ContactInfo = Omit<Person, "name" | "age">

    type PersonRequired = Required<Person>

    type PersonPartial = Partial<Person>

    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly = {
        name: "Md. Tohin",
        age: 25,
        email: "mdtohin8585@gmail.com",
        phone: "01854229083"
    }
    // person1.name = "Md Mijan";  //  can not use this because person1 is readonly

    type MyObj = Record<string, string>

    const myObj : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
    }

    const EmptyObj : Record<string, unknown> = {}


}