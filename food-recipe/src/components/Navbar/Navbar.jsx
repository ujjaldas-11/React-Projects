import { useContext} from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context"

export default function Navbar() {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)


    return (
            <nav className="lg:flex lg:justify-around items-center md:flex-row p-4 mt-10 border-none rounded-full bg-blur-2xl ">
                <h1 className="cursor-none text-2xl font-semibold">foodRecipe</h1>
                <form onSubmit={handleSubmit}>
                    <NavLink
                        className={({isActive})=> isActive ? " text-orange-700": "text-black"}
                        to={"pages/searchresult"}>
                    <input
                        type="text"
                        placeholder="search your food"
                        className="border-none rounded-3xl outline-gray-100 p-3 px-8 shadow-lg shadow-orange-200 w-[100%] md:w-full"
                        value={searchParam}
                        onChange= {(e)=> { 
                            setSearchParam(e.target.value)
                            console.log(e.target.value)
                        }}
                        />
                        </NavLink>
                </form>
                <h3 className="cursor-pointer hover:bg-gray-100 rounded py-2 px-3 hover:transition duration-200">
                    <NavLink 
                        className={({isActive})=> isActive ? "text-orange-700 font-bold" : "text-black"}
                        to="">
                        Home 
                    </NavLink>

                </h3>

                <h3 className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded hover:transition duration-200">
                    <NavLink 
                        className={({isActive})=> isActive ? "text-orange-700 font-bold" : "text-black"}
                        to={"pages/recipe-item/:id"}>
                        Details
                    </NavLink>
                </h3>
                <h3 className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded hover:transition duration-200">
                    <NavLink 
                        className={({isActive})=> isActive ? "text-orange-700 font-bold" : "text-black"}
                        to={'pages/bookmarked'}>
                        Bookmarked
                    </NavLink>
                </h3>
                {/* <li>
                    <button className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded hover:transition duration-200" >Theme</button>
                </li> */}
            </nav>
    )
} 