import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-3 text-sky-900 dark:text-white">StudyHub</h5>
              <ul>
                <li><Link to="/" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Careers</Link></li>
              <li><Link to="/admin" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sky-900 dark:text-white">Resources</h5>
              <ul>
              <li><Link to="/blog" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/help" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/affiliates" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Affiliates</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sky-900 dark:text-white">Legal</h5>
              <ul>
              <li><Link to="/terms" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sky-900 dark:text-white">Connect</h5>
                <ul className="space-y-1">
                            <li>
                <Link to="https://t.me/StudyHubFeedback" target="_blank" rel="noopener noreferrer" className="hover:text-sky-900 dark:hover:text-sky-100 transition-colors duration-200">
                  Telegram
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="border-t border-sky-300 dark:border-sky-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} StudyHub. All rights reserved by QTech Solutions.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-2xl">🎓</span> <span className="ml-2 font-bold text-sky-900 dark:text-white">StudyHub</span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer