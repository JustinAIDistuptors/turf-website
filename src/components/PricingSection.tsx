import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PricingSection() {
  const plans = [
    {
      name: 'Basic Installation',
      price: 'From $8/sq ft',
      description: 'Perfect for basic residential installations',
      features: [
        'Premium artificial turf material',
        'Professional installation',
        'Basic drainage system',
        '10-year warranty',
        'Basic maintenance guide'
      ]
    },
    {
      name: 'Premium Package',
      price: 'From $12/sq ft',
      description: 'Ideal for families and pet owners',
      features: [
        'Premium pet-friendly turf material',
        'Enhanced drainage system',
        'Antimicrobial infill',
        '15-year warranty',
        'Quarterly maintenance service',
        'Pet odor neutralizer treatment'
      ]
    },
    {
      name: 'Sports Grade',
      price: 'Custom Quote',
      description: 'Professional-grade for sports facilities',
      features: [
        'Professional grade turf material',
        'Performance infill system',
        'Advanced drainage design',
        '20-year warranty',
        'Monthly maintenance service',
        'Sports field marking options',
        'Impact absorption layer'
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the perfect package for your needs. All installations include site preparation, 
          premium materials, and professional installation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-green-600 my-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Get Quote
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all">
            Contact Us for Custom Pricing
          </button>
        </div>
      </div>
    </div>
  );
}