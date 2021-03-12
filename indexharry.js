console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
        
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }
    


    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, github, language){
        super(givenName, givenExperience, givenDivision,language);
        this.github = github;
        this.language = language;
    }
    static favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python2';
        }else {
            return "js"
        }

    }
   
    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", )
console.log(rohan)
// console.log(rohan.favoriteLanguage("python"))
console.log(Programmer.favoriteLanguage("python"));
console.log(Programmer.multiply(5, 7));


