{

    //  generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;        
    }

    type Owner = "bike" | "car" | "ship";   // menually

    type Owner1 = keyof Vehicle;

    const person: Owner = "bike";
    const person1: Owner1 = "bike";

    const getPropertyValue = <X, Y extends keyof X>(obj : X, key : Y) => {
        return obj[key];
    }

    const user = {
        name: 'Md Tohin',
        age: 25,
        phone: "01854229083",
    }

    const product = {
        name: 'Realmi note 8',
        brand: "Realmi",
        price: 15000,
    }
    const result = getPropertyValue(product, "price");

    console.log(result);
    

     

}