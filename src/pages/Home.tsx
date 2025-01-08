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
          src="https://images.unsplash.com/photo-1604933762021-54a5858c9832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
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

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Award className="h-8 w-8 text-indigo-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">3.6</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CGPA</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Target className="h-8 w-8 text-indigo-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">2+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Users className="h-8 w-8 text-indigo-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Coffee className="h-8 w-8 text-indigo-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">∞</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Coffee Cups</div>
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Quality Assurance Executive with a strong background in chemistry and a passion for ensuring excellence in software development. 
                Experienced in both manual and automated testing, with a keen eye for detail and a commitment to maintaining high quality standards.
                Proven track record in implementing effective QA processes and collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
            </motion.div>

            {/* Experience & Education */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Briefcase className="mr-3 h-6 w-6 text-indigo-600" />
                  Experience
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quality Assurance Officer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Intersys Ltd • Nov 2023 - Present</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dispatching Manager</h3>
                    <p className="text-gray-600 dark:text-gray-400">Kart Solutions • Apr 2022 - Sep 2023</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <GraduationCap className="mr-3 h-6 w-6 text-indigo-600" />
                  Education
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BS Chemistry</h3>
                    <p className="text-gray-600 dark:text-gray-400">FUUAST Gulshan • 3.6 CGPA • 2022</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FSc</h3>
                    <p className="text-gray-600 dark:text-gray-400">Govt. Higher Secondary School Khan bela • 67% • 2018</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 flex justify-center gap-6"
            >
              <Link
                to="/contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                to="/skills"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/10 hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
              >
                View Skills
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}