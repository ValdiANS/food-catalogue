import {wishlistArray, removeWishlistArray, renderWishlistMeal} from '../data/wishlistMealRender.js';
import 'sugar/array/remove';

class WishlistMeal extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set meals(wishlistMeals) {
        this._meals = wishlistMeals;
        this.render();
    }



    render() {
        this.innerHTML = '';
        
        const mealName = this._meals.strMeal;


        this.innerHTML = `

        <div class="col-lg-12" style="margin-top: 12px;">
            <div class="card">
                <img src="${this._meals.strMealThumb}" class="img-thumbnail" width="280" alt="Meal's">
                <div class="card-body">
                    <h5>${mealName}</h5>
                    <p class='text-wrap'>
                        Category&emsp; : ${this._meals.strCategory}<br>
                        From&emsp;&emsp;&emsp;: ${this._meals.strArea}
                    </p>
                    <button type="button" class="btn btn-danger" id="remove-wishlist">Remove From Wishlist</button>
                </div>
            </div>
        </div>
    `;  
    
        const removeWishlistButton = this.querySelector('#remove-wishlist');
        removeWishlistButton.addEventListener('click', () => {
            removeWishlistArray.pop();
            removeWishlistArray.push(mealName);

            const Sugar = require('sugar');

            Sugar.Array.remove(wishlistArray, function (el){
                return el.strMeal === removeWishlistArray[0];
            })
            
            renderWishlistMeal();

        });
        

    
    }

    
    static renderError(){
        this.innerHTML="";

        this.innerHTML += `<h2 class="placeholder alert alert-warning rounded p-2 mt-3" role="alert">There is no wishlist meal</h2>`;
    }
}

customElements.define('wishlist-meal', WishlistMeal);