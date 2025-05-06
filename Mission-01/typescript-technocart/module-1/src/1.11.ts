{
    //  ternary-optional 
    //  chaining-nullish 
    //  coalescing-operator
    
    const age:number = 15;

    if (age >= 18){
        console.log("Adult");        
    }
    else{
        console.log('Not Adult')
    }

    //  ternary operator
    const isAdult = age >= 18 ? true : false;
    console.log("Is Adult: ", isAdult);

    //  coalescing operator
    //  nul | undefined ----> decision making 

    let isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";
    console.log("Athenticated user or not: ", result1);
    
    isAuthenticated = undefined;
    const result2 = isAuthenticated ?? "Guest"
    console.log("Athenticated user or not: ", result2);

    isAuthenticated = "";
    const result3 = isAuthenticated ? 'Authenticated User' : 'Guest User';
    console.log(result3);
    

    //  optional chaining
    type User = {
        name: string;
        address: {
            city: string,
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "Md. Tohin",
        address: {
            city: "Mirpur 2",
            presentAddress: "Dhaka, Bangladesh",            
        }
    }

    const permanentAddress = user.address.permanentAddress ?? "No Permanent Address";
    console.log({permanentAddress});
    

    









}