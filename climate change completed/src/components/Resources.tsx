import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: "Understanding Climate Change",
      type: "Article",
      icon: BookOpen,
      link: "https://climate.nasa.gov/evidence/",
      description: "NASA's vital signs of the planet: Global climate change and global warming."
    },
    {
      title: "Climate Solutions",
      type: "Video",
      icon: Video,
      link: "https://www.youtube.com/watch?v=WmVLcj-XKnM",
      description: "Learn about practical solutions to combat climate change."
    },
    {
      title: "IPCC Reports",
      type: "Document",
      icon: FileText,
      link: "https://www.ipcc.ch/reports/",
      description: "Scientific assessments on climate change, its impacts and future risks."
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Educational Resources</h2>
      
      <div className="grid gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-6 p-8 rounded-xl border-2 border-teal-100 hover:border-teal-500 bg-gradient-to-r from-teal-50 to-emerald-50 hover:from-teal-100 hover:to-emerald-100 transition-all"
          >
            <div className="p-4 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <resource.icon className="text-teal-600" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">{resource.title}</h3>
              <p className="text-gray-600 mb-3">{resource.description}</p>
              <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                {resource.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}