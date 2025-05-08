{
    //  OOP Class
    
    //  normal
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor (name: string, species: string, sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);            
        }
    }

    const dog = new Animal("Indian Dog", "Dog", "Ghau Ghau");
    console.log(dog);
    dog.makeSound();
    
    const cat = new Animal("Japanies cat", 'Cat', "Mau mau");
    console.log(cat);
    cat.makeSound();

    //  advanced
    class Animal1 {
        constructor (public name: string, public species: string, public sound: string){}
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);            
        }
    }
    
    const dog1 = new Animal1("Indian Dog", "Dog", "Ghau Ghau");
    console.log(dog1);
    dog.makeSound();
    
    const cat1 = new Animal1("Japanies cat", 'Cat', "Mau mau");
    console.log(cat1);
    cat.makeSound();
    
}