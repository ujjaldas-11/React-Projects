import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem";



export default function Bookmarked() {

    const { favouritesList } = useContext(GlobalContext);

    return(
        <div className="flex flex-wrap justify-center items-center mx-auto mt-10 gap-5 h-[100%]]">
            {
                (favouritesList && favouritesList.length > 0) 
            ? favouritesList.map((item) => <RecipeItem key={item.id} item={item} />) 
            : <div>
                    <p className="text-2xl text-center font-bold">Empty... </p>
              </div>
            }

        </div>
    )
}