/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Amnish Singh Arora
 *      Student ID: 120097217
 *      Date:       22/03/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Global property for the page
/* NOTE: Check older submissions for this additonal feature */
/* var hidden = true; */

/* Product Functions */
function clearCurrentBody() {
  document.querySelector("#category-products").innerHTML = "";
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageURL;
  productImage.alt = product.title + " Image";
  productImage.classList.add("cardImage");
  card.appendChild(productImage);

  // Creating Lower Card Components
  const lowerCard = document.createElement("div");
  lowerCard.classList.add("lowerCard");
  const prodTitle = document.createElement("h3");
  prodTitle.innerHTML = product.title;
  const prodDesc = document.createElement("p");
  prodDesc.innerHTML = product.description;
  const price = document.createElement("span");
  // Adding the components to lowercard
  price.appendChild(
    document.createTextNode(
      new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
        product.price / 100
      )
    )
  );
  lowerCard.appendChild(prodTitle);
  lowerCard.appendChild(prodDesc);
  lowerCard.appendChild(price);
  // Appending lower card to the actual card
  card.appendChild(lowerCard);

  // Return the card’s <div> element to the caller
  return card;
}

function addProducts(id) {
  var filteredList = products.filter(function (product) {
    return !product.discontinued && product.categories.includes(id);
  });
  var productsBody = document.getElementById("category-products");
  filteredList.forEach((product) => {
    productsBody.appendChild(createProductCard(product));
  });
}

/* Functions for creating menu */
function addButton(node, category) {
  // Creating the button
  var button = document.createElement("button");
  // button.appendChild(document.createTextNode(category.name));
  button.innerHTML = category.name;
  button.id = category.id;
  button.onclick = function () {
    clearCurrentBody();
    document.getElementById("selected-category").innerHTML = category.name;
    addProducts(category.id);
  };
  node.appendChild(button);
}

function addCategoryButtons(node) {
  for (let category of categories) {
    addButton(node, category);
  }
}

/* Removed additional feature that updates the page according to user's hidden preference
function unhide() {
  var unhideButton = document.getElementById("hidden");
  unhideButton.onclick = function () {
    if (hidden) {
      unhideButton.innerHTML = "Reset";
    } else {
      unhideButton.innerHTML = "Show Hidden Data";
    }
    hidden = !hidden; // Changing the state 'hidden' global variable
    intializeContent(); // Updating the page according to new settings
  };
}
*/

function intializeContent() {
  clearCurrentBody();
  // Selecting first category ("c1") by default
  document.getElementById("selected-category").innerHTML = categories[0].name;
  addProducts("c1");
}

/* Setup Functions */
// To be called when statuc objects are done loading
function setup() {
  // Creating the menu
  addCategoryButtons(document.querySelector("#menu"));
  // Setting initial content
  intializeContent();
  // Setting unhide button functionality
  //   unhide();
}

window.onload = setup;
