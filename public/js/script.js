let addIngredientsBtn = document.getElementById('addIgredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
    let newIngredient = ingredientDiv.cloneNode(true);
    let input = newIngredient.getElementsByTagName("input")[0];
    input.value = '';
    ingredientList.appendChild(newIngredient);
});