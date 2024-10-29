// Declare the data to display in the front-end
let dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "Max Verstappen",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin Gizmo",
    "Joker",
    "Clowns"
];

let costumesContainer = document.getElementById("costumeContainer");

// Create an unordered list tag
let costumesContainerList = document.createElement("ul");

// costumesContainer.innerText = "Hello World!";

dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);

    // Create the list element
    let newCostumeEntry = document.createElement("li");
    
    // Add the value to the HTML element
    newCostumeEntry.innerText += costume;

    

    // Add the element to the container
    costumesContainerList.appendChild(newCostumeEntry);
});

// Add the list to the container
costumesContainer.appendChild(costumesContainerList);