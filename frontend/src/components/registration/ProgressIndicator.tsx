interface Step {
    number: number
    title: string
}

interface ProgressIndicatorProps {
    currentStep: number
    steps: Step[]
}

export default function ProgressIndicator({ currentStep, steps }: ProgressIndicatorProps) {
    return (
        <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200">
                <div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
                {steps.map((step) => {
                    const isCompleted = step.number < currentStep
                    const isCurrent = step.number === currentStep
                    const isPending = step.number > currentStep

                    return (
                        <div key={step.number} className="flex flex-col items-center">
                            {/* Circle */}
                            <div
                                className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 relative z-10
                  ${isCompleted ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg' : ''}
                  ${isCurrent ? 'bg-gradient-to-br from-secondary-500 to-secondary-600 text-white shadow-lg scale-110' : ''}
                  ${isPending ? 'bg-white border-2 border-gray-300 text-gray-400' : ''}
                `}
                            >
                                {isCompleted ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    step.number
                                )}
                            </div>

                            {/* Label */}
                            <div
                                className={`
                  mt-2 text-sm font-medium text-center
                  ${isCurrent ? 'text-secondary-600' : ''}
                  ${isCompleted ? 'text-primary-600' : ''}
                  ${isPending ? 'text-gray-400' : ''}
                `}
                            >
                                Step {step.number}
                                <div className="text-xs mt-0.5">{step.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
