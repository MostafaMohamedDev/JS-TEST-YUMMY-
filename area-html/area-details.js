
getCategories();

async function getCategories() {
    let apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    let categoriesResult = await apiResponse.json();
    displayItems(categoriesResult.categories)
}




function displayItems(categories) {
    let cartona = ``;
    for (let i = 0; i < categories.length; i++) {
        cartona += `<div class="category col-lg-3 category-img">
                        <img class=" w-100 category-img" src="${categories[i].strCategoryThumb}" alt="">
                        <div class="category-desc bg-light   ">
                            <h5 class="fw-bold food-text pt-5 ">${categories[i].strMeal}</h5>
                            
                        </div>
                    </div>`
                    
    }
    document.getElementById('categories-container').innerHTML = cartona;
}
function getMailDetails(idMeal){
    window.location.href = `../area-html/area-details.html?=${idMeal}`;
  }
  


  