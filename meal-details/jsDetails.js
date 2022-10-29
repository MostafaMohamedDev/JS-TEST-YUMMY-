const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

getMeals();

async function getMeals() {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);

    let meal = (await apiResponse.json()).meals[0];

    document.getElementById("meal-image").src = meal.strMealThumb
    document.getElementById("meal-pargraf").innerHTML = meal.strInstructions
    document.getElementById("meal-area").innerHTML = meal.strArea
    document.getElementById("meal-category").innerHTML = meal.strCategory
    document.getElementById("meal-title").innerHTML = meal.strMeal
    
    if(meal.strTags != null){
        let tags = meal.strTags.split(',')
        let cartona = ``;
        for (let i = 0; i < tags.length; i++) {
          cartona += `<h6 class="recipes-content">${tags[i]}</h6>`
        }
        document.getElementById('meal-tags-container').innerHTML = cartona
    }

    let recipes = Object.entries(meal).map(( [k, v] ) => ({ key: k, value: v }))
                .filter(obj => obj.key.includes('strIngredient') &&  obj.value != null && obj.value != "");
    if(recipes != null){
        let cartona = ``;
        for (let i = 0; i < recipes.length; i++) {
            cartona += `<h6  class="recipes-content">${recipes[i].value}</h6>`
        }
        document.getElementById('meal-recipes-container').innerHTML = cartona
    }
}