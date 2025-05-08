{
    //  promise

    type Something = {
        name: string,
        age: number,
    }

    const createPromise = () : Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {name: "Md Tohin", age: 25};
            if(data){
                resolve(data)
            }
            else{
                reject('Feiled to load Data')
            }
        })
    }

    const showData = async() : Promise<Something> => {
        const data : Something = await createPromise();
        return data;
    }   

    const result = showData()

    type ToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async(): Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
    }
    const result2 = getToDo();
    console.log(result2);
    



    

    
}