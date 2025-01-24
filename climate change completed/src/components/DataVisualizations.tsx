import React from 'react';
import { TrendingUp, Thermometer, Wind } from 'lucide-react';

export default function DataVisualizations() {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Climate Data</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-rose-100 rounded-lg">
              <TrendingUp className="text-rose-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-rose-900">CO2 Levels</h3>
          </div>
          <p className="text-4xl font-bold text-rose-700 mb-2">419.13</p>
          <p className="text-lg text-rose-600 font-medium">ppm</p>
          <p className="text-sm text-rose-600/80 mt-4">Current atmospheric CO2</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-100 rounded-lg">
              <Thermometer className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">Temperature Rise</h3>
          </div>
          <p className="text-4xl font-bold text-amber-700 mb-2">1.1°C</p>
          <p className="text-lg text-amber-600 font-medium">increase</p>
          <p className="text-sm text-amber-600/80 mt-4">Global rise since 1880</p>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-sky-100 rounded-lg">
              <Wind className="text-sky-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-sky-900">Sea Level Rise</h3>
          </div>
          <p className="text-4xl font-bold text-sky-700 mb-2">3.4</p>
          <p className="text-lg text-sky-600 font-medium">mm/year</p>
          <p className="text-sm text-sky-600/80 mt-4">Current rate of rise</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1564088879-98440a07ba38?auto=format&fit=crop&w=2000&q=80"
          alt="Climate Change Impact"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
}