import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useContext, GlobalContext } from 'react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  //  const { recipeList } = useContext(GlobalContext);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'lunch', name: 'Lunch', icon: '🍔' },
    { id: 'dinner', name: 'Dinner', icon: '🍝' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' }
  ];

  const featuredRecipes = [
    {
      id: 1,
      title: 'Creamy Mushroom Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
      time: '25 min',
      difficulty: 'Easy',
      rating: 4.8,
      category: 'dinner',
      description: 'Rich and creamy pasta with fresh mushrooms and herbs'
    },
    {
      id: 2,
      title: 'Classic Pancakes',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      time: '15 min',
      difficulty: 'Easy',
      rating: 4.9,
      category: 'breakfast',
      description: 'Fluffy golden pancakes perfect for weekend mornings'
    },
    {
      id: 3,
      title: 'Grilled Chicken Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      time: '20 min',
      difficulty: 'Medium',
      rating: 4.7,
      category: 'lunch',
      description: 'Fresh mixed greens with perfectly grilled chicken'
    },
    {
      id: 4,
      title: 'Chocolate Lava Cake',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      time: '30 min',
      difficulty: 'Hard',
      rating: 4.9,
      category: 'dessert',
      description: 'Decadent chocolate cake with molten center'
    },
    {
      id: 5,
      title: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
      time: '10 min',
      difficulty: 'Easy',
      rating: 4.6,
      category: 'breakfast',
      description: 'Healthy and delicious avocado on sourdough toast'
    },
    {
      id: 6,
      title: 'Fresh Smoothie Bowl',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
      time: '10 min',
      difficulty: 'Easy',
      rating: 4.8,
      category: 'drinks',
      description: 'Refreshing smoothie bowl with fresh fruits and granola'
    }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? featuredRecipes 
    : featuredRecipes.filter(recipe => recipe.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl animate-pulse">🍕</div>
          <div className="absolute top-20 right-20 text-6xl animate-bounce delay-300">🍔</div>
          <div className="absolute bottom-10 left-1/4 text-7xl animate-pulse delay-150">🍝</div>
          <div className="absolute bottom-16 right-10 text-5xl animate-bounce delay-500">🥗</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">🍳</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="text-8xl mb-6 block animate-bounce">👨‍🍳</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing <span className="text-yellow-200">Recipes</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            From quick breakfast ideas to gourmet dinners, find the perfect recipe for every occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={'pages/searchresult'}>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              🔍 Explore Recipes
            </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-200">
              📚 View Categories
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Recipes', icon: '🍽️' },
              { number: '50K+', label: 'Happy Cooks', icon: '👨‍🍳' },
              { number: '25+', label: 'Categories', icon: '📚' },
              { number: '4.9★', label: 'Average Rating', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">Find recipes that match your mood</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Recipes
            </h2>
            <p className="text-xl text-gray-600">
              {selectedCategory === 'all' ? 'Our most popular recipes' : `Best ${selectedCategory} recipes`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200">
                      <span className="text-xl">🔖</span>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {recipe.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with New Recipes
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get weekly recipe recommendations and cooking tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}