// Business Dashboard – DOM Element Selection and Creation //
const dashboardId = document.getElementById("dashboard"); // Selecting dashboard using getElementById
const dashboardQuery = document.querySelector("#dashboard"); // Selecting dashboard using querySelector
const revenueCard = document.createElement("div"); // Creating Revenue metric card
dashboardId.appendChild(revenueCard); // Appending Revenue card to dashboard
revenueCard.setAttribute("class", "metric-card"); // Adding class 
revenueCard.setAttribute("id", "revenue-card"); // Adding ID 

revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$ 0</p>
`; // Populating Revenue metric card

// Creating Profit metric card
const profitCard = document.createElement("div"); // Creating Profit metric card
dashboardId.appendChild(profitCard); // Appending Profit card to dashboard
profitCard.setAttribute("class", "metric-card"); // Adding class 
profitCard.setAttribute("id", "profit-card"); // Adding ID 
profitCard.innerHTML = `
<h3>Profit</h3>
<p>$ 10</p>
`;

// Creating Expenses metric card
const expensesCard = document.createElement("div");// Creating Expenses metric card
dashboardId.appendChild(expensesCard);// Appending Expenses card to dashboard
expensesCard.setAttribute("class", "metric-card");// Adding class
expensesCard.setAttribute("id", "expenses-card"); // Adding ID 
expensesCard.innerHTML = `
<h3>Expenses</h3>
<p>$ 60</p>
`;

// Task 2: Updating Dashboard Metrics
const metricCards = document.querySelectorAll(".metric-card"); // Selecting all metric cards
const metricCardsArray = [...metricCards]; // Converting NodeList to array
metricCardsArray.forEach(card => {
card.innerText += " - Updated"; // Adding 'Updated' text
card.style.backgroundColor = "yellow";}); // Adding the color yellow

// Task 3: Dynamic Inventory Management
const inventoryList = document.getElementById("inventoryList"); // Selecting inventory list

function addInventoryItem(productName) {
const newItem = document.createElement("li"); // Creating new list item
newItem.setAttribute("class", "product-item"); // Adding class attribute
newItem.innerHTML = `${productName}`; // Setting inner HTML
inventoryList.appendChild(newItem); // Appending new item
newItem.addEventListener("click", () => {
inventoryList.removeChild(newItem); });} // Removing item on click

// Task 4: Business Customer Section - Event Bubbling
const customerSection = document.getElementById("customerSection"); // Selecting existing customer section

customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");});// Logging click event

function addCustomerCard(name) {
const customerCard = document.createElement("div"); // Createing customer card
customerCard.setAttribute("class", "customer-card"); // Adding class
customerCard.innerHTML = `<p>${name}</p>`; // Setting inner HTML
customerSection.appendChild(customerCard); // Appending to section

customerCard.addEventListener("click", event => {
console.log("Customer card clicked"); // Logging customer card click
event.stopPropagation();})} // Stopping event from bubbling 
    
// Adding sample customer cards
addCustomerCard("Customer 1");
addCustomerCard("Customer 2");
