import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Best decision we ever made for our yard. The team was professional, and the results are amazing. Our kids love playing on it!",
      author: "Sarah M.",
      rating: 5,
      location: "Local Homeowner"
    },
    {
      text: "Incredible transformation of our commercial space. Low maintenance and always looks perfect. Highly recommend!",
      author: "John D.",
      rating: 5,
      location: "Business Owner"
    },
    {
      text: "Professional installation and amazing customer service. Our pets love the new yard and it's so easy to maintain.",
      author: "Michael R.",
      rating: 5,
      location: "Satisfied Customer"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}