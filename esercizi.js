async function getChefBirthday(id) {
    try {
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        const recipe = await recipeResponse.json();
        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
        const chef = await chefResponse.json();
        return chef.birthDate;
    } catch (error) {
        console.error("Errore:",error.message)
    }
}

(async () => {
    try {
        const compleanno = await getChefBirthday(3);
        console.log('Data di nascita:', compleanno);
    } catch (error) {
        console.error('Errore:', error.message);
    }
    console.log('Fine codice!');
})();