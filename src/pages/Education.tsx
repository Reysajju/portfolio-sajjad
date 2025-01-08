import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'BS Chemistry',
    institute: 'Federal Urdu University of Arts, Sciences and Technology, Karachi',
    score: '3.6 CGPA',
    date: '2022',
    icon: GraduationCap
  },
  {
    title: 'FSc',
    institute: 'Govt. Higher Secondary School Khan bela',
    score: '67%',
    date: '2018',
    icon: GraduationCap
  },
  {
    title: 'Matric',
    institute: 'Govt.Higher Secondary School Khan Bela',
    score: '76%',
    date: '2016',
    icon: GraduationCap
  }
];

export default function Education() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Academic Background</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Education & Qualifications</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <edu.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{edu.institute}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">Score: {edu.score}</span>
                  <span className="text-gray-500 dark:text-gray-400">{edu.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}