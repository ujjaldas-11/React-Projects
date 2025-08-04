import { createContext, useState } from "react";



export const GlobalContext = createContext(null)



export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDitails, setRecipeDetails] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json();

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
            }
            // console.log(data)
            // console.log(recipeList)
        } catch (e) {
            console.log(e);
        }
    }


    function handleFavourites(GetCurrentItem) {
        // console.log(GetCurrentItem);
        let cpyFavouritesList = [...favouritesList]
        const index = cpyFavouritesList.findIndex(item => item.id === GetCurrentItem.id)


        if(index == -1) {
            cpyFavouritesList.push(GetCurrentItem);
        } else {
            cpyFavouritesList.splice(index)
        }

        setFavouritesList(cpyFavouritesList)

    }


    console.log(favouritesList, "favouritesList");
    

    return <GlobalContext.Provider value={{ 
         searchParam,
         setSearchParam,
         handleSubmit,
         recipeList,
         loading,
         recipeDitails,
         setRecipeDetails,
         handleFavourites,
         favouritesList
    }}>{children}</GlobalContext.Provider>
}

