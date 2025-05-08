{

    //  instanceof guard type
    
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I am Sound ");            
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBark() {
            console.log("I am Barking");            
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMeau(){
            console.log("I am Meau");            
        }
    }

    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog       
    }

    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeau()
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog("Mr. Dog", "Dog");
    const cat = new Cat("Mr. Cat", "Cat");

    getAnimal(dog);
    getAnimal(cat);


}