{
    //  conditional type
    
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false;

    type y = a1 extends null ? null : b1 extends undefined ? undefined : any;

    type Sheikh = {
        Bike: string;
        Car: string;
        Ship: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : any;

    type hasBike = CheckVehicle<"Tractor">  

}