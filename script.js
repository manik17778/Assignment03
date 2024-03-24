// Function to dynamically add student info to the page
function addStudentInfo() {
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = "Name : Manik Malhotra ( 200553423 )"; // Student name and Id 
}

// Function to capture form values and order pizza
function orderPizza() {
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const meat = getCheckboxValues('meat');
    const veggies = getCheckboxValues('veggies');
    const cheese = document.querySelector('input[name="cheese"]:checked').value;

    const pizza = new Pizza( size, crust, meat, veggies, cheese );
    displayPizza(pizza); // Displaying output 
}

// function to get values of checked checkboxes
function getCheckboxValues(name) {
    const checkboxes = document.getElementsByName(name);
    const values = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    });
    return values;
}

// Class definition for Pizza object
class Pizza {
    constructor(size, crust, meat, veggies, cheese) {
        this.size = size;
        this.crust = crust;
        this.meat = meat;
        this.veggies = veggies;
        this.cheese = cheese;
    }

    getDescription() {
        return `Size: ${this.size}, Crust: ${this.crust}, Meat: ${this.meat.join(', ')}, Veggies: ${this.veggies.join(', ')}, Cheese: ${this.cheese}`;
    }
}

// Function to display pizza details on the page
function displayPizza(pizza) {
    const pizzaOutput = document.getElementById('pizzaOutput');
    pizzaOutput.innerHTML = `<h2>Your Pizza:</h2><p>${pizza.getDescription()}</p>`;
}

// Calling the function to add student info when the page loads
addStudentInfo();
