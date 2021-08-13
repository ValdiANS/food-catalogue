import '../component/navbar.js';
import '../component/wishlist-meal.js';


const wishlistArray = [];
const removeWishlistArray = [];

const wishTab = document.querySelector('#wishlistTab');
const homeTab = document.querySelector('#homeTab');
const removeWishlist = document.querySelector('#remove-wishlist');

const container = document.createElement('div');
container.setAttribute('class', 'row justify-content-center');



wishTab.addEventListener('click', function() {

    wishTab.classList.add('active');
    homeTab.classList.remove('active');

    document.querySelector('.meal-list').innerHTML = '';
    document.querySelector('.meal-list').innerHTML = "<h1 class='text-warning text-decoration-underline' style='margin-top: 70px;'><u>Wishlist Meal's</u></h1>";
    document.querySelector('.jumbotron').style.display = 'none';

    if(wishlistArray.length == 0) { 
        isThereAWishlist();
        return;
    }

    renderWishlistMeal();

});


function isThereAWishlist() {
    container.innerHTML = '';
    const noWishlist = document.createElement('h2');
    noWishlist.setAttribute('class', 'placeholder alert alert-warning rounded p-2 mt-3')
    noWishlist.innerHTML = 'There is no wishlist meal';
    container.appendChild(noWishlist);
    document.body.appendChild(container);
}


function renderWishlistMeal() {
    if(wishlistArray.length === 0){
        isThereAWishlist();
        return;
    }
    
    container.innerHTML = '';
    wishlistArray.forEach(wishlistArray => {
        const wishlistItem = document.createElement('wishlist-meal');    
        wishlistItem.meals = wishlistArray;
        container.appendChild(wishlistItem);

    })

    document.body.appendChild(container);

}


homeTab.addEventListener('click', function(ev){
    homeTab.classList.add('active');
    wishTab.classList.remove('active');

    document.querySelector('.meal-list').innerHTML = '';
    container.innerHTML = '';
    

    document.querySelector('.jumbotron').style.display = 'block';


});


const isMealIsAdded = strMeal => {
    for (let i = 0; i < wishlistArray.length; i++) {
        if (strMeal == wishlistArray[i].strMeal) {
            document.querySelector('#wishlist').innerHTML = "Wishlist (added)";
        }
    }
}


const isMealInTheArray = mealObj => {
    for(let i = 0; i < wishlistArray.length; i++) {
        if (mealObj.strMeal == wishlistArray[i].strMeal) {
            alert("Sudah dimasukkan ke wishlist");
            return;
        }
    }

    wishlistArray.push(mealObj);

}

export {wishlistArray, isMealIsAdded, isMealInTheArray, removeWishlistArray, renderWishlistMeal};
