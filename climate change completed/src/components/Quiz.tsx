import React, { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

const questions = [
  {
    question: "Which of these is the main greenhouse gas responsible for climate change?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1
  },
  {
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["50%", "60%", "70%", "80%"],
    correct: 2
  },
  {
    question: "Which human activity contributes most to climate change?",
    options: ["Agriculture", "Burning fossil fuels", "Deforestation", "Waste disposal"],
    correct: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-800">Quiz Results</h2>
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl mb-6">
          <p className="text-2xl mb-2">
            You scored <span className="font-bold text-teal-700">{score}</span> out of {questions.length}!
          </p>
          <p className="text-gray-600">
            {score === questions.length 
              ? "Perfect score! You're a climate expert!" 
              : "Keep learning about climate change!"}
          </p>
        </div>
        <button
          onClick={resetQuiz}
          className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all shadow-md"
        >
          <RefreshCw size={20} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Climate Change Quiz</h2>
      <div className="mb-8">
        <p className="text-xl mb-6 text-gray-700">{questions[currentQuestion].question}</p>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-5 rounded-xl border-2 border-teal-100 hover:border-teal-500 hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-200 group-hover:border-teal-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-700 group-hover:text-teal-800 font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
        <div className="h-1 w-20 bg-teal-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-500 transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
}