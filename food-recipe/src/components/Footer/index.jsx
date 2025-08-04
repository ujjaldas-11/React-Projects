import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl">
                  🍳
                </div>
                <span className="ml-3 text-2xl font-bold">RecipeHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for delicious recipes and cooking inspiration.
                Join our community of food lovers today!
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '📍'].map((icon, index) => (
                  <button key={index} className="text-2xl hover:scale-110 transition-transform duration-200">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desserts</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RecipeHub. All rights reserved. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    )
}