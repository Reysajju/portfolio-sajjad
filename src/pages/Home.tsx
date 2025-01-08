import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Download, Github, Linkedin, Award, Target, Users, Coffee } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <img
          src="https://raw.githubusercontent.com/Reysajju/portfolio-sajjad/main/banner.jpg"
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="relative -mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8"
          >
            {/* Profile Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-40 w-40 rounded-full border-4 border-white dark:border-gray-700 shadow-xl"
                    src="https://raw.githubusercontent.com/Reysajju/portfolio-sajjad/main/sajjad.jpeg"
                    alt="Muhammad Sajjad Rasool"
                  />
                </div>
                <div className="mt-6 text-center sm:mt-0 sm:text-left">
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
                  >
                    Muhammad Sajjad Rasool
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 text-lg font-medium text-indigo-600 dark:text-indigo-400"
                  >
                    Quality Assurance Executive at Intersys Ltd
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                      Karachi, Pakistan
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-gray-400" />
                      <a href="mailto:Sajjadr742@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                        Sajjadr742@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-gray-400" />
                      <a href="tel:03142834340" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                        03142834340
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "muhammad-sajjad-rasool.pdf"; // Update with actual file path
                    link.download = "muhammad-sajjad-rasool.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </motion.button>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center gap-4"
                >
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
