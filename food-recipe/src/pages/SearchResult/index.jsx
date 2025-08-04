import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem";
import { useContext } from "react";


export default function SearchResult() {

    const { recipeList, loading } = useContext(GlobalContext);

    console.log(recipeList, loading);
    
    if (loading) {
        return <div className="text-center font-semibold ">Loading....</div>;
    }

    return(
        <div className="flex flex-wrap justify-center items-center mx-auto gap-5 mt-10 h-[100%]">
            {
            (recipeList && recipeList.length > 0) 
            ? recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
            : <div>
                    <p className="text-2xl text-center font-bold">Nothing to show, please search your food </p>
                </div>
            }
        </div>
    )
}