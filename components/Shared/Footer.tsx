import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-black py-12 px-6 font-manrope bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          
          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-500">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Payment Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Information</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-500">Exchange & Refund</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Loyalty Program</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Store Locations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-500">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-500">Contact Us</Link></li>
              <li className="text-gray-600">09866774577</li>
              <li className="text-gray-600">support@ilyn.global</li>
              <li><Link href="#" className="hover:text-gray-500">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Payments Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">You can pay by</h3>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <span className="font-medium">VISA</span>
            </div>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="px-6 py-6 text-center bg-black text-white uppercase w-full flex justify-center items-center">
          <p className="text-3xl md:text-5xl lg:text-7xl font-manrope font-bold tracking-widest">
            R E L A T I O N
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
