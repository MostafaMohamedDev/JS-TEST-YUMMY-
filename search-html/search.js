
async function searchByName(){
  let val = document.getElementById("name-input").value
  let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
  let mealsResult = await apiResponse.json();
  displayMeals(mealsResult.meals)
}

async function searchByLetter(){
  let val = document.getElementById("letter-input").value
  let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`);
  let mealsResult = await apiResponse.json();
  displayMeals(mealsResult.meals)
}

function displayMeals(meals){
  let cartona = ``;
  for (let i = 0; i < meals.length; i++) {
    cartona += `<div onClick="getMailDetails(${meals[i].idMeal})" class="col-lg-3 food-card">
                  <img class="w-100 h-90 food-img" src="${meals[i].strMealThumb}" alt="">
                  <div class="food-desc bg-light   ">
                    <h6 class="fw-bold food-text pt-5 ">${meals[i].strMeal}</h6>
                  </div>
                </div>`
  }
  document.getElementById('meals-container').innerHTML = cartona;
}

function getMailDetails(idMeal){
  window.location.href = `/monday/search-html/mealDetails.html?idMeal=${idMeal}`;
}
