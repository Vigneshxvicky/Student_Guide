import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-3 text-white">StudyHub</h5>
              <ul>
                <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/admin" className="hover:text-white">Admin</Link></li> {/* Admin Link */}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-white">Resources</h5>
              <ul>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/affiliates" className="hover:text-white">Affiliates</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-white">Legal</h5>
              <ul>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-white">Connect</h5>
                <ul className="space-y-1">
                            <li>
                <Link to="https://t.me/StudyHubFeedback" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Telegram
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} StudyHub. All rights reserved by QTech Solutions.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-2xl">🎓</span> <span className="ml-2 font-bold text-white">StudyHub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer