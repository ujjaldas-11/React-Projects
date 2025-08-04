import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';



export default function Header() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    // const [searchQuery, setSearchQuery] = useState('');

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)

      const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', path: '' },
    { id: 'details', label: 'Details', icon: '📄', path: 'pages/recipe-item/:id' },
    { id: 'bookmarked', label: 'Bookmarked', icon: '🔖', badge: 5, path: 'pages/bookmarked' }
  ];



    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200">
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    🍳
                                </div>
                                <span className="ml-2 text-xl font-bold text-gray-800">RecipeHub</span>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:block flex-1 max-w-md mx-8">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-400 text-lg">🔍</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <NavLink to={"pages/searchresult"}>
                                    <input
                                        type="text"
                                        value={searchParam}
                                        onChange={(e) => setSearchParam(e.target.value)}
                                        // onKeyPress={handleSearch}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Search recipes..."
                                    />
                                </NavLink>
                            </form>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <NavLink to={item.path}>
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 transform hover:scale-105 ${activeTab === item.id
                                            ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                            }`}
                                    >
                                        <span className="text-base">{item.icon}</span>
                                        <span>{item.label}</span>
                                        {item.badge && (
                                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                                {item.badge}
                                            </span>
                                        )}
                                    </button>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
                        >
                            <span className="text-2xl">
                                {isMenuOpen ? '✕' : '☰'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
                    {/* Mobile Search */}
                    <div className="px-3 py-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-400 text-lg">🔍</span>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <NavLink to={"pages/searchresult"}>

                                    <input
                                        type="text"
                                        value={searchParam}
                                        onChange={(e) => setSearchParam(e.target.value)}
                                        // onKeyPress={handleSubmit}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Search recipes..."
                                    />
                                </NavLink>
                            </form>
                        </div>
                    </div>

                    {/* Mobile Navigation Items */}
                    {navItems.map((item, index) => (
                        <NavLink to={item.path}>
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`relative w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3 ${activeTab === item.id
                                    ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-white hover:text-orange-600 hover:shadow-sm'
                                    }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                                {item.badge && (
                                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
                                        {item.badge}
                                    </span>
                                )}
                            </button>
                        </NavLink>
                    ))}
                </div>
            </div>

        </nav>
    )
}