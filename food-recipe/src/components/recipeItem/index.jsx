import {Link} from "react-router-dom"

export default function RecipeItem({ item }) {
    return (
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group" >
            <div className="flex flex-wrap flex-col justify-center items-center h-[100%] w-[20rem] border-none rounded-lg p-3 shadow-lg shadow-gray-500 ">
                <img className="h-[12rem] w-[20rem] border-gray-400 overflow-hidden rounded-lg " src={item.image_url} alt="" />
                <p className="text-center text-blue-600 mt-2">Publisher: {item.publisher}</p>
                <h3 className="text-[1.1rem] text-center mt-4 font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">{item.title}</h3>
                <Link to={`/pages/recipe-item/${item?.id}`}>
                    <button className="w-[100%] px-16 bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 mt-2 rounded-xl font-semibold hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg hover:cursor-pointer">Show Details</button>
                </Link>
            </div>
        </div>
    )
}