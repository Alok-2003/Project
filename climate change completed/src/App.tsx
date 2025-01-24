import React, { useState } from 'react';
import { Leaf, Calculator, Brain, BarChart3, BookOpen } from 'lucide-react';
import Quiz from './components/Quiz';
import CarbonCalculator from './components/CarbonCalculator';
import DataVisualizations from './components/DataVisualizations';
import Resources from './components/Resources';

function App() {
  const [activeTab, setActiveTab] = useState('quiz');

  const tabs = [
    { id: 'quiz', label: 'Climate Quiz', icon: Brain },
    { id: 'calculator', label: 'Carbon Calculator', icon: Calculator },
    { id: 'data', label: 'Climate Data', icon: BarChart3 },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <header className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-full">
              <Leaf size={32} className="text-emerald-100" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Climate Change Awareness</h1>
              <p className="text-emerald-100 mt-1">Understanding our impact on the planet</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white/70 backdrop-blur-lg shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-teal-700 border-b-2 border-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'calculator' && <CarbonCalculator />}
        {activeTab === 'data' && <DataVisualizations />}
        {activeTab === 'resources' && <Resources />}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf size={24} className="text-emerald-400" />
            <h2 className="text-xl font-semibold">Together we can make a difference</h2>
          </div>
          <p className="text-gray-400">© 2024 Climate Change Awareness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;