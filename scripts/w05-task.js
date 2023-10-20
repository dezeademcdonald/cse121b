/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templesList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    templesList.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = 
    await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templesList = await response.json();
    };
    displayTemples(templesList);
};
/* reset Function */
function reset() {
    document.querySelector('#temples').textContent = '';
};
/* sortBy Function */
function sortBy() {
    reset();
    const filter = document.querySelector('#SortBy');
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter((temple) =>
            temple.location.includes("Utah")
            );
            displayTemples(utahTemples);
            break;
        case "nonutah":
            const nonUtahTemples = temples.filter((temple) =>
            !temple.location.includes("Utah")
            );
            displayTemples(nonUtahTemples);
            break;
        case "older":
            const olderTemples = temples.filter((temple) =>
            new Date(temple.dedicatedDate) < new Date(1950, 0, 1)
            );
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter value");
    };
}        
  
    

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {sortBy(templesList)});
getTemples();
