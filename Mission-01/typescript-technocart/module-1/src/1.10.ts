{
    //  union types

    type Role1 = 'SUPER ADMIN' | 'ADMIN' | 'USER'
    type Role2 = 'Author' | 'Modulator'

    type Role = Role1 | Role2;

    const userRole1: Role = "SUPER ADMIN";
    const userRole2: Role = "Modulator";
    
    type User = {
        name: string;
        email?: string;
        role: 'SUPER ADMIN' | 'ADMIN' | 'USER';
        gender: 'Male' | 'Female';
    }

    const user1: User = {
        name: 'Md Tohin',
        role: 'ADMIN',
        gender: 'Male',
    }

    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const employee1 : FullStackDeveloper = {
        skills: ['HTML', "CSS", "Javascript", "Node JS"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }

}