/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "McDonald W. De-zeade",
    photo: "images/my_pic.jpg",
    favoriteFoods: [
        "Rice", 
        "Yam",
        "Potatoes",
        "Eddoes",
        "Bannas",
        "Oranges"
    ],
    hobbies: [
        "Reading",
        "Fishing",
        "Listening to music",
        "Swimming"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        places: 
            "21th Street, Sinkor, Republic Of Liberia",
        length: 
            "5 years"
        
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
photo.src = myProfile.photo;
photo.alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
