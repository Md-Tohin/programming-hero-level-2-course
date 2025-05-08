{
    //  type guard

    //  typeof --> type guard

    type AlphaNeumeric = string | number;
    

    const add = (param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    const result = add("2", "3");
    console.log(result);
    const result2 = add(2, "3");
    console.log(result2);
    const result3 = add(2, 3);
    console.log(result3);

    //  in type guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user) {
            console.log(`My name is ${user.name} and role is ${user.role}`);            
        }
        else{
            console.log(`My name is ${user.name}`);
        }
    }

    const user1 = {
        name: "Md. Tohin"
    }

    const user2 = {
        name: 'Mr. Sojib',
        role: "Admin",
    }

    getUser(user1);
    getUser(user2);
    


}