// let allMeals = []

// getMeals();

// async function getMeals() {
//   let apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=');

//   let mealsResult = await apiResponse.json();
//   allMeals = mealsResult.meals;
//   displayItems(allMeals)
// }


// function displayItems(meals) {
//     let cartona = ``;
//     for (let i = 0; i < 10; i++) {
//         cartona += `<div class="category col-lg-3 category-img justify-content-center text-center">
//                         <div class="post ">
//                                   <i  class=" w-100 fa-solid fa-bowl-food ing-logo"></i>
//                                    <h2 class="text-white">Chicken</h2>
//                                    <p class="text-white">The chicken is a type of domesticated fowl, a subspecies of the red
//                                    junglefowl (Gallus gallus). It is one of</p>

//                         </div>


//                     </div>`
//     }
//     document.getElementById('meals-container').innerHTML = cartona;
// }



container = document.getElementById('area-container');

for (i = 0; i < 20; i++) {
  container.innerHTML += `<div class="category col-lg-3 category-img justify-content-center text-center">
  <div class="post ">
      <i  class=" w-100 fa-solid fa-bowl-food ing-logo"></i>
      <h2 class="text-white">Chicken</h2>
      <p class="text-white">The chicken is a type of domesticated fowl, a subspecies of the red
          junglefowl (Gallus gallus). It is one of</p>

  </div>


</div>`;
}