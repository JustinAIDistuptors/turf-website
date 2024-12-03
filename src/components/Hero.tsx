import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Yard Into a Perfect Paradise
          </h1>
          <p className="text-xl mb-8">
            Premium artificial turf installation with a 15-year warranty. 
            Get a beautiful, maintenance-free lawn that looks perfect 365 days a year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Get Free Quote
            </button>
            <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}