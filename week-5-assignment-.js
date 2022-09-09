//this class creates a animal that holds a name and age and descibes that animal
class Animal {
    constructor(name, age) {
        this.name=name;
        this.age='Critter age: ' + age;
    }
//describe method to print out info on animal 
    //describe() {
        //return `${this.name} is ${this.age} old ʕ •ᴥ•ʔ `;
    //}
    }

class Creature {
    constructor (name){
        this.name = name;
        this.animals = [];
//each time we create a creature this array will hold all the animals in that creature class
    }
    //this method will make sure that the animal is an instance of the animal class 
    addAnimal(animal)
    {
        if (animal instanceof Animal){
            this.animals.push(animal);
        }
        else{
            throw new Error(`you can only add an instance of Animal. Argument is not a Animal: ${animal} BOOO!!!`);
        }
    }
    // describe method 
    describe(){
        return `${this.animal}'s have ${this.animals.length} critters(s). YEE HAW! (=^ ◡ ^=)`;
    }
}

//new class: MENU 
class Menu { 
    constructor(){
    //we are going to initialize our creatures
        this.creatures=[];
        // the selection is null at first because no creature class is selected
        this.selectedCreature = null;
    }
    //entry point to our application
    start(){
        let selection = this.showMainMenuOptions();
        //this method is going to return the selection that the user gives us 
        while (selection !=0){
            switch (selection){
                case '1': 
                this.createCreature();
                break;
                case '2':
                this.viewCreature();
                break;
                case '3':
                this.deleteCreature();
                break;
                case '4':
                this.displayCreatures()
                break;
                
                //if they select anything else 
                default: 
                selection =0;
            }
            //outside of switch, this allows to keep looping aslong as we dont select 0 or something other than 1-4
            selection = this.showMainMenuOptions()

        //this is the flow of my application 1) show menu option 
        //2)user will select something 3)aslong of not 0 we are going to create,view,delete,or diplay
        }
        //incase they do choose 0 this will exit out of app 
        alert("Goodbye! (=^･ｪ･^=))ﾉ彡☆ ")
    }
//implemtations of methods in application
    showMainMenuOptions(){
        return prompt(`
        0) Exit 
        1) Create creature exhibit
        2) View creature exhibit 
        3) Delete creature exhibit 
        4) Display all creature exhibits 
        `);
    }

    showCreatureMenuOptions(creatureInfo){
        return prompt(`
        0) Back
        1) Create / Name a critter
        2) Delete a Critter 
        --------------
        ${creatureInfo}
        `);

    }

    displayCreatures(){
        let creatureString = '' ;
        //this.creatures is a list of all the creatures that exist 
        for (let i = 0; i < this.creatures.length; i++) {
            creatureString += i + ') ' +this.creatures[i].name + '\n';
            //this is going to create a blank string, itterate through the creatures, get each creater and names and add a new line 
            // each creature will be numbers with its index number 
            // console.log(this.creatures)
        }
        alert(creatureString);
    }
    
    createCreature(){
        let name = prompt('Enter creature (species) name:');
        this.creatures.push(new Creature(name));
        // console.log(this.creatures)
   
        //prompt the user for the name of speices and push that into the creature array
    }

    viewCreature(){
        let index = prompt ('Enter the index of the critters (speices) you wish to view: ');
        //this is to validate user input 
        if (index > -1 && index < this.creatures.length){
            this.selectedCreature = this.creatures[index];
        let description = 'Creature Species : ' + this.selectedCreature.name + '\n';

        //this loop will allow us to add the descriptions of the critters in the creatures class 
        //this will list all the animals in the exhinit and age
        for(let i = 0; i < this.selectedCreature.animals.length; i++){
        description += i + ') ' + this.selectedCreature.animals[i].name 
        + ' - ' + this.selectedCreature.animals[i].age + '\n';
        }
        //we are going to pass in the description from the viewCreatures to display the creatures and options for the exhibit
        let selection = this.showCreatureMenuOptions(description)
        switch (selection){
        //this is a sub menu of the full option so this selection option is different from our main menu 
            case '1': 
            this.createAnimal();
            break;
            case '2':
                this.deleteAnimal();
          }
        }
    }
deleteCreature(){
    let index = prompt ('Enter the index of the Creature you wish to delete');
    if (index > -1 && index < this.creatures.length){
        this.creatures.splice(index, 1)
    }
}


// sub menu options 
createAnimal(){
    let name = prompt (`Enter Name for new animal:`);
    let age = prompt (' Enter Age of new animal:');
    this.selectedCreature.animals.push(new Animal(name,age))
}
deleteAnimal(){
    let index = prompt('Enter the index of the Animal you wish to delete:');
    if (index > -1 && index < this.selectedCreature.animals.length){
        this.selectedCreature.animals.splice(index,1);
    }
}

}


let menu = new Menu();
menu.start();
