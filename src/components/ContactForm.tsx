import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Yard?
          </h2>
          <p className="text-xl mb-8">
            Get a FREE consultation and quote. Limited time offer: 
            Save 15% on installations booked this month!
          </p>
          <Alert className="mb-8 bg-green-100">
            <AlertTitle className="text-green-800">
              🎉 Special Offer
            </AlertTitle>
            <AlertDescription className="text-green-700">
              Book now and receive free lawn removal with your installation!
            </AlertDescription>
          </Alert>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <select
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
            >
              <option value="">Select Project Type</option>
              <option value="residential">Residential Lawn</option>
              <option value="commercial">Commercial Property</option>
              <option value="sports">Sports Facility</option>
              <option value="pet">Pet Area</option>
            </select>
            <textarea
              placeholder="Tell us about your project..."
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}