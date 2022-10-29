let allMeals = []

getMeals();

async function getMeals() {
    let apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

    let mealsResult = await apiResponse.json();
    allMeals = mealsResult.meals;
    displayItems(allMeals)
}




function displayItems(meals) {
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `<div class="category col-lg-3 category-img justify-content-center text-center">
                         <img class=" w-100 category-img" src="../area-html/images/bull.png" alt="">
    
                         <h5 class="fw-bold food-text p-3 text-white  ">${meals[i].strArea}</h5>
       
   
                    </div>`
    }
    document.getElementById('area-container').innerHTML = cartona;
}

function getMailDetails(idMeal){
    window.location.href = `../area-html/area-details.html=${idMeal}`;
  }