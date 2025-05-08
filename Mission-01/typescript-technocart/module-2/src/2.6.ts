{

    //  constrains type

    const addCourseToStudent = <T extends { id: number; name: string, email: string }>(student: T) => {
        const course = "Next level Web Development course";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 123, name: "Md. Tohin", roll: 1, email: 'mdtohin8585@gmail.com' })
    const student2 = addCourseToStudent({ id: 256, name: "Mr Monir", email: 'mdtohin1230@gmail.com', phone: '01854229083' })


}