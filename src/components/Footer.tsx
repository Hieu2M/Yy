import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Healthy Minds</h3>
            <p className="text-gray-400">
              Providing mental health services and support for a healthier mind.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(559) 869-8689 (text only)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>healthyminds.care@outlook.com</span>
              </div>
              {/*<div className="flex items-center">*/}
              {/*  <MapPin className="h-5 w-5 mr-2" />*/}
              {/*  <span>123 WA 98000</span>*/}
              {/*</div>*/}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours (Virtual)</h3>
            <div className="space-y-2">
              <p>Monday: 8 AM - 2 PM</p>
              {/*<p>Saturday: AM - PM</p>*/}
              {/*<p>Sunday: Closed</p>*/}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Healthy Minds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;