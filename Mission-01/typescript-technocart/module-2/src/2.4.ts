{

    //  interface generic

    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string,
            price: number,
            releaseYear: number
        };
        smartWatch: T;
        bike?: Y;
    } 

    type SamsungWatch = {
        name: string;
        brand: string;
        price: number;
        locationTrack: boolean;
    }
    const poorDeveloper: Developer<SamsungWatch> = {
        name: "Md. Tohin",
        computer: {
            brand: 'Dell',
            price: 15000,
            releaseYear: 1999
        },
        smartWatch: {
            name: "Stylish Smart Watch",
            brand: 'Samsung',
            price: 2500,
            locationTrack: true,
        }
    }

    interface AppleWatch {        
        name: string;
        brand: string;
        price: number;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineSpeed: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Md. Jamilur Rahman",
        computer: {
            brand: 'HP',
            price: 24500,
            releaseYear: 2010
        },
        smartWatch: {
            name: "Apple 360 SmartWatch",
            brand: 'Apple',
            price: 9000,
            heartTrack: true,
            sleepTrack: false,
        },
        bike:{
            model: 'Yamaha Y25',
            engineSpeed: "100cc"
        }
    }

    console.log(richDeveloper);
    
    

}