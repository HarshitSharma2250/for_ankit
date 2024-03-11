const getCategoriesData = async () => {
  // code here
  try {
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    
    const data= await res.json()
    console.log(data)
   return data
   
  } catch (error) {
    console.log('something went wrong')
    return 'something went wrong'
  }
};

const getIngredientData = async () => {
  try {
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
  
    const data=await res.json()
    console.log(data)
    return data
  
  } catch (error) {
    console.log('something went wrong')
    return 'something went wrong'
  }
};

window.onload = function () {
  //  get the buttons here and add click event

  let get_category_data=document.getElementById('get-category-data')
  let get_ingredient_data=document.getElementById('get-ingredient-data')

  get_category_data.addEventListener('click',getCategoriesData)
  get_ingredient_data.addEventListener('click',getIngredientData)

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
