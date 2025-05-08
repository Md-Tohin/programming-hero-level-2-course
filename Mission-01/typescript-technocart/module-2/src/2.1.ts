{

    //  type assertion

    let anything : any;
    anything = "Welcome to Next Lavel Web Development Course";
    (anything as string)

    let num : any;
    num = 420;
    (num as number)

    const kgToGm = (value : number | string): number | string | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if(typeof value === 'number'){
            const convertedValue = value * 1000;
            return  convertedValue;
        }       
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("2000") as string

    console.log(result1);
    console.log(result2);
    
    type CustomError = {
        message : string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
        
    }







}