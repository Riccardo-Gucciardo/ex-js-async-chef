async function getChefBirthday(id) {
    let recipe;
    try {
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeResponse.json();

        
    } catch (error) {
        console.error(error)
        throw new Error(`non recupero id :${id} della ricetta `);
        
    }
    if(!recipe){
        throw new Error(`ricetta con ${id} non trovato`);
        
    }    
    let chef
    try{
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    chef = await chefResponse.json();
    }catch(error){
        throw new error (`non riesco a recperare lo chef ${id}`)

    }  
    if(!chef){
        throw new Error(`chef con id ${id} non trovato`);
        
    }

    return chef.birthDate;
}

(async () => {
    try {
        const compleanno = await getChefBirthday(1);
        console.log('Data di nascita:', compleanno);
    } catch (error) {
        console.error('Errore:', error.message);
    }
    console.log('Fine codice!');
})();