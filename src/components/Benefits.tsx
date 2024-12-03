import { Check, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Benefits() {
  const benefits = [
    {
      title: "Save Water & Money",
      description: "Reduce your water bill by up to 70% while maintaining a perfect lawn year-round",
      icon: <Check className="h-6 w-6 text-green-600" />
    },
    {
      title: "Zero Maintenance",
      description: "No more mowing, watering, or fertilizing. Just perfect grass every day",
      icon: <Clock className="h-6 w-6 text-green-600" />
    },
    {
      title: "Pet & Child Friendly",
      description: "Safe, non-toxic materials that are perfect for families and pets",
      icon: <Star className="h-6 w-6 text-green-600" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Artificial Turf?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}