import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@yourturf.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Your Location, State</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Residential Installation</li>
              <li>Commercial Projects</li>
              <li>Sports Facilities</li>
              <li>Pet Areas</li>
              <li>Landscape Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Get Updates</h4>
            <p className="mb-4">Subscribe to our newsletter for tips and special offers!</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded bg-green-800 border border-green-700 focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Your Turf Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}