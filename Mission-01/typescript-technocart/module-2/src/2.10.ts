{

    //  mapped type

    const arrOfNumbers: number[] = [1, 2, 3, 4, 5]
    const arrOfStrings: string[] = arrOfNumbers.map(num => num.toString())
    console.log(arrOfStrings);

    type AreaString = {
        width: string;
        height: string;
    }

    type AreaNumber = {
        [key in keyof AreaString] : number
    }

    type AreaNumber2<T> = {
        [key in keyof T] : T[key]
    }

    const areaNumber2 :  AreaNumber2<{width: string; height: number}> = {
        width: '200',
        height: 100,
    }
    
}