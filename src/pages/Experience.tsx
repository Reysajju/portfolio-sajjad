import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Intersys Ltd',
    position: 'Senior Executive - Quality Assurance',
    duration: 'Nov 2023 - Sep 2024',
    location: 'Karachi, Pakistan',
    current: true
  },
  {
    company: 'Kart Solutions',
    position: 'Dispatching Manager',
    duration: 'Apr 2022 - Sep 2023',
    location: 'Karachi, Pakistan',
    current: false
  }
];

export default function Experience() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Work History</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Professional Experience</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
                  <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}