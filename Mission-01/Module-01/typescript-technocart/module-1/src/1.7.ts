{

    //  spread Operator
    //  rest Operator
    //  destructuring

    //  learn spread opreator
    const allFriends: string[] = ['Md. Tohin', 'Ashik', 'Mizan'];
    const newFriends: string[] = ['Limon', 'Ruhul', "Sajal"];

    allFriends.push(...newFriends);

    const mentors1: {
        typescript: string;
        redux: string;
        dbms: string;
    } = {
        typescript: "Mezba",
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2: {
        prisma: string;
        next: string;
        cloud: string;
    } = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid',
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //  learn rest operator
    const greetFrients = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }
    greetFrients('Mizan', "Abul", 'Momin', 'Maruf');

    
}