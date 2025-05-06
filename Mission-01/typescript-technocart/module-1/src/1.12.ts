{

    //  nullable types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching");            
        } else {
            console.log("Nothing to Search");            
        }
    }

    searchName("Md Tohin");

    //  unknow type

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log("The Speed is : ",convertedSpeed, "ms^-1");            
        }
        else if (typeof value === "string") {
            const [meter, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(meter) * 1000) / 3600;
            console.log("The Speed is : ",convertedSpeed, "ms^-1");   
        }
        else{
            console.log('Wrong Input.');
            
        }
    }

    getSpeedInMeterPerSecond(null)

    //  never type

    const throwMessage = (msg: string): never =>  {
        throw new Error(msg)
    }

    throwMessage("Error is finding")
    



}