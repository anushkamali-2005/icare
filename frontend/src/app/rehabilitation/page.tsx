'use client'

import { Dumbbell, Heart, Zap, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function ExercisePage() {
    const benefits = [
        {
            title: 'Reduces Fatigue',
            description: 'Regular exercise helps combat cancer-related fatigue',
            icon: '⚡'
        },
        {
            title: 'Improves Mood',
            description: 'Physical activity releases endorphins, reducing anxiety and depression',
            icon: '😊'
        },
        {
            title: 'Maintains Strength',
            description: 'Prevents muscle loss during treatment',
            icon: '💪'
        },
        {
            title: 'Better Sleep',
            description: 'Helps improve sleep quality',
            icon: '😴'
        },
        {
            title: 'Boosts Immunity',
            description: 'Strengthens immune system function',
            icon: '🛡️'
        },
        {
            title: 'Faster Recovery',
            description: 'Aids in post-treatment recovery',
            icon: '🏃'
        }
    ]

    const exercises = [
        {
            id: 1,
            name: 'Walking',
            type: 'Aerobic',
            difficulty: 'Easy',
            duration: '20-30 minutes',
            description: 'Start with 10 minutes and gradually increase. Walk at a comfortable pace.',
            benefits: ['Improves cardiovascular health', 'Low impact', 'Can be done anywhere'],
            precautions: ['Wear comfortable shoes', 'Stay hydrated', 'Avoid extreme weather']
        },
        {
            id: 2,
            name: 'Gentle Stretching',
            type: 'Flexibility',
            difficulty: 'Easy',
            duration: '10-15 minutes',
            description: 'Stretch major muscle groups gently. Hold each stretch for 15-30 seconds.',
            benefits: ['Improves flexibility', 'Reduces muscle tension', 'Prevents stiffness'],
            precautions: ['Don\'t bounce', 'Stop if you feel pain', 'Breathe normally']
        },
        {
            id: 3,
            name: 'Chair Exercises',
            type: 'Strength',
            difficulty: 'Easy',
            duration: '15-20 minutes',
            description: 'Seated exercises for those with limited mobility. Includes arm raises, leg lifts.',
            benefits: ['Safe for all fitness levels', 'Builds strength', 'Improves balance'],
            precautions: ['Use a sturdy chair', 'Move slowly', 'Rest between exercises']
        },
        {
            id: 4,
            name: 'Deep Breathing',
            type: 'Breathing',
            difficulty: 'Easy',
            duration: '5-10 minutes',
            description: 'Sit comfortably. Breathe in deeply through nose, out through mouth.',
            benefits: ['Reduces stress', 'Improves lung function', 'Promotes relaxation'],
            precautions: ['Don\'t force breathing', 'Stop if dizzy', 'Practice regularly']
        },
        {
            id: 5,
            name: 'Light Yoga',
            type: 'Flexibility',
            difficulty: 'Easy-Medium',
            duration: '20-30 minutes',
            description: 'Gentle yoga poses focusing on breathing and stretching.',
            benefits: ['Improves flexibility', 'Reduces stress', 'Enhances mind-body connection'],
            precautions: ['Avoid inversions during treatment', 'Use props for support', 'Listen to your body']
        },
        {
            id: 6,
            name: 'Resistance Band Exercises',
            type: 'Strength',
            difficulty: 'Medium',
            duration: '15-20 minutes',
            description: 'Use resistance bands for gentle strength training.',
            benefits: ['Builds muscle strength', 'Low impact', 'Portable equipment'],
            precautions: ['Start with light resistance', 'Proper form is key', 'Rest between sets']
        }
    ]

    const safetyTips = [
        'Always consult your doctor before starting any exercise program',
        'Start slowly and gradually increase intensity',
        'Listen to your body - stop if you feel pain or extreme fatigue',
        'Stay hydrated before, during, and after exercise',
        'Avoid exercise if you have fever, nausea, or feel unwell',
        'Exercise with a partner or in a safe environment',
        'Wear comfortable, breathable clothing',
        'Rest when needed - recovery is important'
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Exercise & Physical Activity</h1>
                    <p className="text-xl opacity-90">Safe exercises for cancer patients during and after treatment</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Benefits */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Exercise During Treatment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="card bg-gradient-to-br from-orange-50 to-red-50">
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Exercise Library */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Exercises</h2>
                    <div className="space-y-6">
                        {exercises.map(exercise => (
                            <div key={exercise.id} className="card">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="text-2xl font-bold text-gray-900">{exercise.name}</h3>
                                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${exercise.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                    exercise.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-orange-100 text-orange-700'
                                                }`}>
                                                {exercise.difficulty}
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                {exercise.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{exercise.description}</p>
                                    </div>
                                    <div className="text-right ml-4">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Clock className="w-5 h-5" />
                                            <span className="font-semibold">{exercise.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span>Benefits:</span>
                                        </h4>
                                        <ul className="space-y-2">
                                            {exercise.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                                    <span className="text-green-600 mt-1">•</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                                            <AlertCircle className="w-5 h-5 text-orange-600" />
                                            <span>Precautions:</span>
                                        </h4>
                                        <ul className="space-y-2">
                                            {exercise.precautions.map((precaution, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                                    <span className="text-orange-600 mt-1">•</span>
                                                    <span>{precaution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety Tips */}
                <section>
                    <div className="card bg-red-50 border-2 border-red-200">
                        <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center space-x-3">
                            <AlertCircle className="w-8 h-8" />
                            <span>Important Safety Guidelines</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {safetyTips.map((tip, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm text-red-900">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="card bg-gradient-to-r from-orange-500 to-red-500 text-white mt-12">
                    <div className="text-center">
                        <Dumbbell className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Need a Personalized Exercise Plan?</h3>
                        <p className="text-lg opacity-90 mb-6">
                            Consult with our physiotherapists for a customized exercise program based on your treatment and fitness level
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Physiotherapist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
