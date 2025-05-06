{

    //  destructuring
    
    const user = {
        id: 123,
        fullName: {
            firstName: "Md",
            lastName: "Tohin",
        },
        mobile: '01854229083',
        address: 'Mirpur 2, Dhaka.',
        isActive: true,
    }

    const { mobile, fullName: { firstName, lastName : l_name} } = user;

    const friends = ['Jamal', 'Habib', 'Kamal', "Nurul Amin", 'Maruf'];

    const [ , , newFriend, ...restFriends] = friends

}