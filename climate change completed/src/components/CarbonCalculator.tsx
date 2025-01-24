import React, { useState } from 'react';
import { Car, Home, Plane, ShoppingBag } from 'lucide-react';

export default function CarbonCalculator() {
  const [formData, setFormData] = useState({
    transportation: 0,
    homeEnergy: 0,
    flights: 0,
    consumption: 0
  });

  const calculateFootprint = () => {
    return (
      formData.transportation * 2.3 +
      formData.homeEnergy * 1.8 +
      formData.flights * 0.9 +
      formData.consumption * 1.2
    ).toFixed(2);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Carbon Footprint Calculator</h2>
      
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
          <label className="flex items-center gap-3 text-lg mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Car className="text-teal-600" />
            </div>
            <span className="font-medium text-teal-800">Weekly driving miles</span>
          </label>
          <input
            type="number"
            value={formData.transportation}
            onChange={(e) => setFormData({...formData, transportation: Number(e.target.value)})}
            className="w-full p-3 rounded-lg border-2 border-teal-100 focus:border-teal-500 focus:ring focus:ring-teal-200 transition-all"
          />
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
          <label className="flex items-center gap-3 text-lg mb-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Home className="text-emerald-600" />
            </div>
            <span className="font-medium text-emerald-800">Monthly energy bill ($)</span>
          </label>
          <input
            type="number"
            value={formData.homeEnergy}
            onChange={(e) => setFormData({...formData, homeEnergy: Number(e.target.value)})}
            className="w-full p-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
          />
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
          <label className="flex items-center gap-3 text-lg mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Plane className="text-teal-600" />
            </div>
            <span className="font-medium text-teal-800">Flights per year</span>
          </label>
          <input
            type="number"
            value={formData.flights}
            onChange={(e) => setFormData({...formData, flights: Number(e.target.value)})}
            className="w-full p-3 rounded-lg border-2 border-teal-100 focus:border-teal-500 focus:ring focus:ring-teal-200 transition-all"
          />
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
          <label className="flex items-center gap-3 text-lg mb-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <ShoppingBag className="text-emerald-600" />
            </div>
            <span className="font-medium text-emerald-800">Monthly shopping ($)</span>
          </label>
          <input
            type="number"
            value={formData.consumption}
            onChange={(e) => setFormData({...formData, consumption: Number(e.target.value)})}
            className="w-full p-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
          />
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-emerald-600 p-8 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-3 text-teal-50">Your Carbon Footprint</h3>
          <p className="text-4xl font-bold">{calculateFootprint()} <span className="text-2xl">tons CO2/year</span></p>
        </div>
      </div>
    </div>
  );
}