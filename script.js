// #1) Use dot notation to access the value of the key "meaning_of_life" 
// in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// Now access it using a variable called "meaning":
//  `let meaning = "meaning_of_life"`
// ===

let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

console.log(meaning);

// 2) ## An object's properties can be accessed by dot notation or 
// bracket notation

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" 
// using dot notation to access 'name'

console.log(`Our company's lawyer is ${employee.name}`);

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.

console.log(`Jess was hired on ${employee["hire_date"]}`);

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. 
// Use either dot or bracket notation. Does it matter which one you use? 
// Try both to find out.

employee["vacation_days"] = 20;
console.log(employee.vacation_days);

// 4. Use the variable below to add a new property to `employee`. 
// Set its value to `false`. Should you use dot or bracket notation?
// ===

let eom = "employee_of_the_month";
employee[eom] = false;

console.log(employee.employee_of_the_month);
console.log(employee);

// #3) ## Objects' keys can contain values of any type, even functions.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}

// 1. Add an action that the painter can perform.
painter.colorsUsed = [];
painter.addColorToWall = function (color) {
    this.colorsUsed.push(color);
};

// 2. Have her take that action by execucting the method you created.
painter.addColorToWall("green");

console.log(painter.colorsUsed);
// BONUS:
// Add a method that allows us to add new tools for the painter.

painter.newTools = [];
painter.addNewTool = function (tool) {
    this.newTools.push(tool);
};
painter.addNewTool("small brush");
console.log(painter.newTools);

// Estimate cost of Job

painter.costEstimate = function (sizeOfRoom) {
    let estimate = 0;
    if (sizeOfRoom <= 100){
        estimate = 6 * painter.cost_per_hour
    }
    else if (sizeOfRoom <= 200) {
        estimate = 12 * painter.cost_per_hour
    }
    return `The estimate for this job is $${estimate}`
}

console.log(painter.costEstimate(150));