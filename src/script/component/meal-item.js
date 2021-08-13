import {wishlistArray, isMealIsAdded, isMealInTheArray} from '../data/wishlistMealRender.js';
import '../../style/style.css';

class MealItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set meals(meals) {
        this._meals = meals;
    }


    render() {
        let strMeal;
        if (this._meals.strMeal.length > 20) {
            strMeal = this._meals.strMeal.substring(0,20) + " ...";
        } else {
            strMeal = this._meals.strMeal;
        }
        

        const strMealThumb = this._meals.strMealThumb;
        const strCategory = this._meals.strCategory;
        const strArea = this._meals.strArea;

        
        let isItTrue;
        const isMealIsAddedToWishlist = () => {
            for (let i = 0; i < wishlistArray.length; i++) {
                if (strMeal == wishlistArray[i].strMeal) {
                    isItTrue = true;
                    break;
                } else {
                    isItTrue = false;
                }

            }
        }

        isMealIsAddedToWishlist();


        let check;
        if(isItTrue == true) {
            check = "Wishlist (added)";
        } else {
            check = "Wishlist";
        }


        this.innerHTML = `

            <div class="col-lg-12" style="margin-top: 12px;">
                <div class="card">
                    <img src="${strMealThumb}" class="img-thumbnail" width="280" alt="Meal's">
                    <div class="card-body">
                        <h5>${strMeal}</h5>
                        <p class='text-wrap'>
                            Category&emsp; : ${strCategory}<br>
                            From&emsp;&emsp;&emsp;: ${strArea}
                        </p>
                            
                        <button type="button" class="btn btn-info" id="wishlist">${check}</button>
                    </div>
                </div>
            </div>
        `;  

        
        this.querySelector('#wishlist').addEventListener('click', function(ev) {

            ev.target.innerHTML = "Wishlist (added)";

            const mealObj = {
                strMeal: strMeal,
                strMealThumb: strMealThumb,
                strCategory: strCategory,
                strArea: strArea                
            }

            isMealInTheArray(mealObj);

        });
    }

    renderError(message){
        this.innerHTML="";
        this.innerHTML += `<h2 class="placeholder alert alert-danger rounded p-2 mt-3" role="alert">${message}</h2>`;
    }
}

customElements.define('meal-item', MealItem);