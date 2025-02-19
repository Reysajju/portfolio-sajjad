import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Languages, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Background
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A dedicated Senior Executive - Quality Assurance Executive with a strong background in chemistry and a passion for ensuring excellence in software development.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <GraduationCap className="h-5 w-5 flex-none text-indigo-600" />
                Education
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">BS Chemistry from FUUAST Gulshan with 3.6 CGPA</p>
              </dd>
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Briefcase className="h-5 w-5 flex-none text-indigo-600" />
                Experience
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Senior Executive - Quality Assurance Officer at Intersys Ltd and former Dispatching Manager at Kart Solutions</p>
              </dd>
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Languages className="h-5 w-5 flex-none text-indigo-600" />
                Languages
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Fluent in Urdu (Native), Saraiki (Native), and English (Medium)</p>
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </div>
  );
}