'use client'

import { Utensils, Apple, Salad, BookOpen, Download, ChevronRight } from 'lucide-react'

export default function NutritionPage() {
    const guidelines = [
        {
            title: 'Eat Small, Frequent Meals',
            description: '5-6 small meals throughout the day instead of 3 large meals',
            icon: '🍽️'
        },
        {
            title: 'Stay Hydrated',
            description: 'Drink 8-10 glasses of water daily, more if experiencing diarrhea',
            icon: '💧'
        },
        {
            title: 'High-Protein Foods',
            description: 'Include eggs, dal, paneer, chicken, fish to maintain strength',
            icon: '🥚'
        },
        {
            title: 'Fruits & Vegetables',
            description: '5 servings daily for vitamins, minerals, and fiber',
            icon: '🥗'
        },
        {
            title: 'Avoid Processed Foods',
            description: 'Limit packaged snacks, sugary drinks, and fried foods',
            icon: '🚫'
        },
        {
            title: 'Food Safety',
            description: 'Wash all fruits/vegetables, cook food thoroughly, avoid raw foods',
            icon: '🧼'
        }
    ]

    const sideEffects = [
        {
            problem: 'Nausea',
            foods: 'Ginger tea, crackers, toast, bananas, rice',
            avoid: 'Spicy, greasy, very sweet foods'
        },
        {
            problem: 'Loss of Appetite',
            foods: 'High-calorie smoothies, nuts, peanut butter, cheese',
            avoid: 'Large meals, strong-smelling foods'
        },
        {
            problem: 'Mouth Sores',
            foods: 'Soft foods, yogurt, mashed potatoes, smoothies',
            avoid: 'Acidic, spicy, rough-textured foods'
        },
        {
            problem: 'Diarrhea',
            foods: 'Bananas, rice, applesauce, toast (BRAT diet)',
            avoid: 'Dairy, fried foods, high-fiber foods'
        },
        {
            problem: 'Constipation',
            foods: 'High-fiber foods, prunes, warm liquids, vegetables',
            avoid: 'Cheese, white bread, processed foods'
        }
    ]

    const recipes = [
        {
            id: 1,
            name: 'High-Protein Dal Khichdi',
            category: 'Main Course',
            calories: '350 kcal',
            protein: '15g',
            time: '30 min',
            difficulty: 'Easy',
            ingredients: ['Rice', 'Moong Dal', 'Vegetables', 'Ghee', 'Spices']
        },
        {
            id: 2,
            name: 'Banana Oats Smoothie',
            category: 'Breakfast',
            calories: '280 kcal',
            protein: '10g',
            time: '5 min',
            difficulty: 'Easy',
            ingredients: ['Banana', 'Oats', 'Milk', 'Honey', 'Nuts']
        },
        {
            id: 3,
            name: 'Vegetable Soup',
            category: 'Soup',
            calories: '120 kcal',
            protein: '5g',
            time: '20 min',
            difficulty: 'Easy',
            ingredients: ['Mixed Vegetables', 'Vegetable Stock', 'Herbs']
        },
        {
            id: 4,
            name: 'Paneer Bhurji',
            category: 'Main Course',
            calories: '320 kcal',
            protein: '18g',
            time: '15 min',
            difficulty: 'Easy',
            ingredients: ['Paneer', 'Onions', 'Tomatoes', 'Spices']
        },
        {
            id: 5,
            name: 'Fruit Custard',
            category: 'Dessert',
            calories: '200 kcal',
            protein: '6g',
            time: '15 min',
            difficulty: 'Easy',
            ingredients: ['Milk', 'Custard Powder', 'Mixed Fruits', 'Sugar']
        },
        {
            id: 6,
            name: 'Moong Dal Cheela',
            category: 'Breakfast',
            calories: '250 kcal',
            protein: '12g',
            time: '20 min',
            difficulty: 'Medium',
            ingredients: ['Moong Dal', 'Onions', 'Green Chillies', 'Spices']
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Nutrition & Diet Guidelines</h1>
                    <p className="text-xl opacity-90">Eat well during cancer treatment for better recovery</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* General Guidelines */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">General Nutrition Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="card bg-gradient-to-br from-green-50 to-teal-50">
                                <div className="text-5xl mb-4">{guideline.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{guideline.title}</h3>
                                <p className="text-sm text-gray-600">{guideline.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Managing Side Effects */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Treatment Side Effects</h2>
                    <div className="card">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Problem</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Foods to Eat</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Foods to Avoid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sideEffects.map((effect, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-4 font-semibold text-gray-900">{effect.problem}</td>
                                            <td className="py-4 px-4 text-sm text-green-700">{effect.foods}</td>
                                            <td className="py-4 px-4 text-sm text-red-700">{effect.avoid}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Recipe Library */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Simple Recipes</h2>
                            <p className="text-gray-600 mt-2">Easy-to-make, nutritious recipes for cancer patients</p>
                        </div>
                        <button className="btn-secondary flex items-center space-x-2">
                            <Download className="w-5 h-5" />
                            <span>Download Recipe Book</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map(recipe => (
                            <div key={recipe.id} className="card hover:shadow-xl transition-shadow cursor-pointer group">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                                            {recipe.name}
                                        </h3>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                            {recipe.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div className="text-center p-2 bg-blue-50 rounded">
                                        <div className="text-sm font-semibold text-blue-900">{recipe.calories}</div>
                                        <div className="text-xs text-blue-600">Calories</div>
                                    </div>
                                    <div className="text-center p-2 bg-purple-50 rounded">
                                        <div className="text-sm font-semibold text-purple-900">{recipe.protein}</div>
                                        <div className="text-xs text-purple-600">Protein</div>
                                    </div>
                                    <div className="text-center p-2 bg-orange-50 rounded">
                                        <div className="text-sm font-semibold text-orange-900">{recipe.time}</div>
                                        <div className="text-xs text-orange-600">Time</div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Ingredients:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {recipe.ingredients.map((ingredient, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="btn-primary w-full flex items-center justify-center space-x-2 group-hover:bg-green-700">
                                    <BookOpen className="w-4 h-4" />
                                    <span>View Recipe</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Dietitian */}
                <div className="card bg-gradient-to-r from-green-500 to-teal-500 text-white mt-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3">Need Personalized Nutrition Guidance?</h3>
                        <p className="text-lg opacity-90 mb-6">
                            Consult with our oncology dietitians for a customized meal plan based on your treatment and needs
                        </p>
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Dietitian
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
