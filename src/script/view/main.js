import GetApi from '../data/getApi.js';
import '../component/search-bar.js';
import '../component/meal-item.js'

const searchBar = document.querySelector('search-bar');
const mealList = document.querySelector('.meal-list');



const renderMealsItem = meals => {
    mealList.innerHTML = '';
    meals.forEach(meal => {
        const meItem = document.createElement('meal-item');    
        meItem.meals = meal;
        mealList.appendChild(meItem);
    });  
} 

const fallbackResult = message => {    
    mealList.innerHTML = '';
    const meItem = document.createElement('meal-item');    
    meItem.renderError(message);
    mealList.appendChild(meItem);
}

const searchButtonIsClicked = _ => {
    GetApi.searchMeal(searchBar.value)
        .then(renderMealsItem)
        .catch(fallbackResult)
};


const renderMealsRandom = num => {
    
    const renderMeals = _ => {
        return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => {
                return resp.json();
            })
            .then(respJson => {
                return Promise.resolve(respJson.meals)
            })
            .then(meals => {
                meals.forEach(meal => {
                    const meItem = document.createElement('meal-item');    
                    meItem.meals = meal;
                    mealList.appendChild(meItem);
                });  
            })
            .catch(message => {
                if (message == "TypeError: Failed to fetch" ) {
                    console.log("Check your internet connection");    
                } else {
                    alert(message);
                }
                
            })
    }

    for(let i = 0; i < num; i++) {
        renderMeals();
    }
}

searchBar.clickEvent = searchButtonIsClicked;

renderMealsRandom(16);

function changeTab(num) {
    const homeTab = document.querySelector('#homeTab');
    const wishlistTab = document.querySelector('#wishlistTab');

    if (num == 1){
        homeTab.classList.add("active");
        wishlistTab.classList.remove('active')
    } else if (num == 2) {
        wishlistTab.classList.add("active");
        homeTab.classList.remove('active')
    }
}