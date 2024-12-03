import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: 'Modern Backyard Transformation',
      description: 'Complete yard renovation with premium artificial turf',
      type: 'Residential',
      imageUrl: '/api/placeholder/600/400'
    },
    {
      title: 'Commercial Plaza',
      description: 'Low-maintenance landscaping solution for business complex',
      type: 'Commercial',
      imageUrl: '/api/placeholder/600/400'
    },
    {
      title: 'Pet Paradise',
      description: 'Pet-friendly turf installation with special drainage system',
      type: 'Residential',
      imageUrl: '/api/placeholder/600/400'
    },
    {
      title: 'Sports Field',
      description: 'Professional grade artificial turf for athletic performance',
      type: 'Sports',
      imageUrl: '/api/placeholder/600/400'
    },
    {
      title: 'Community Park',
      description: 'Sustainable landscaping for public spaces',
      type: 'Commercial',
      imageUrl: '/api/placeholder/600/400'
    },
    {
      title: 'Rooftop Garden',
      description: 'Urban oasis with artificial turf and modern design',
      type: 'Commercial',
      imageUrl: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Recent Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <div className="inline-block px-2 py-1 mb-2 text-sm bg-green-100 text-green-800 rounded">
                  {project.type}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}