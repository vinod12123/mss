import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { companyInfo, footerLinks } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
               src="https://customer-assets.emergentagent.com/job_2c4da2fd-176c-4670-a2ea-4cc30e281a76/artifacts/8g28ck3l_Mutex-Logo.png"
              //src="/image.png"
              alt={companyInfo.name}
              className="h-14 w-auto mb-6"
               style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              //style={{ filter: 'brightness(0) invert(1)' }}

            />
            <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Consulting */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">AI Consulting</h3>
            <ul className="space-y-3">
              {footerLinks.aiConsulting.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-4">Connect with us:</span>
              <a
                href="https://linkedin.com/company/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#061019] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;