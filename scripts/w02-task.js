/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "McDonald W. De-zeade";
let currentYear = "2023";
let profilePicture = "images/my_pic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.getElementById('#year');
let imageElement = document.getElementById('#home');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = "2023";
/*imageElement.setAttribute(src, profilePicture);
imageElement.setAttribute(`alt, ${profilePicture}`);*/

/* Step 5 - Array */
let foodList = ["Rice", "Cassava", "Yam", "Eddoe", "Orange"];
foodElement.innerHTML = foodList;
let favoriteFood = "Potatoes";
foodList.push(favoriteFood);
foodElement.innerHTML = foodList;
foodElement.innerHTML += `<br>${favoriteFood}`;
firstElemRemove = foodList.shift();
foodElement.innerHTML = foodList;
foodElement.innerHTML += `<br>${firstElemRemove}`;
lastElemRemove = foodList.pop();
foodElement.innerHTMl = foodList;
foodList.innerHTML += `<br>${lastElemRemove}`;