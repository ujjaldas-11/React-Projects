import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";
// import {bookmark} from "../../..public"
// import Bookmarked from "../Bookmarked"   



export default function Details() {
    const { id } = useParams()
    const { recipeDitails, setRecipeDetails, handleFavourites, favouritesList } = useContext(GlobalContext)

    // console.log(id);

    useEffect(() => {
        async function getrecipeDetils() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);;
            const data = await response.json();

            if (data.data) {
                setRecipeDetails(data.data);
            }
            // console.log(data)
        }

        getrecipeDetils()
    }, [])



    // ...existing code...
    return (
        <div className="mt-20 h-[100%]">
            {recipeDitails && recipeDitails.recipe ? (
                <>
                    <div className="lg:flex justify-between px-15 items-center md:flex-row">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">{recipeDitails.recipe.title}</h1>
                        <button
                            onClick={() => handleFavourites(recipeDitails.recipe)}
                            className="px-6 bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 mt-2 rounded-xl font-semibold hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg hover:cursor-pointer">
                            {/* <img src="/bookmark" alt="" /> */}
                            {
                                favouritesList && favouritesList.length > 0 && favouritesList.findIndex(
                                    (item) => item.id === recipeDitails.recipe.id
                                ) !== -1
                                    ? "Remove the item"
                                    : "🔖 Bookmark"
                            }
                        </button>
                    </div>

                    <div className="mb-8 flex flex-col justify-center items-center">
                        <img
                            src={recipeDitails.recipe.image_url}
                            alt="image"
                            className="w-[90vw]  md:h-96 object-cover rounded-xl shadow-lg shadow-gray-500 mt-10"
                        />
                        <div className=" mt-10 w-[90vw] flex flex-col bg-gray-100 rounded-xl items-start p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    i
                                </span>
                                Ingredients
                            </h2>
                            {recipeDitails.recipe.ingredients.map((ingredient) => (

                                    <div className="flex justify-center items-center h-[100%] gap-3 font-bold text-center text-gray-700 leading-relaxed lg:text-xl md:text-md md:pt-2">
                                        <p className="bg-orange-400 rounded-[50%] h-[0.5rem] w-[0.5rem] mr-3"></p>
                                        {ingredient.quantity} {ingredient.unit} {`- ${ingredient.description}`}

                                    </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center text-2xl font-semibold">Loading...</div>
            )}
        </div>
    )
}