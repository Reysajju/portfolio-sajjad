import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  { name: 'Computer Experience', level: 'Advanced' },
  { name: 'Problem Solving', level: 'Expert' },
  { name: 'Multitasking', level: 'Advanced' },
  { name: 'Teamwork', level: 'Expert' },
  { name: 'Quality Assurance', level: 'Expert' },
  { name: 'Computer Skills', level: 'Advanced' },
  { name: 'Call Center Agent', level: 'Advanced' },
  { name: 'MS Office', level: 'Advanced' },
];

export default function Skills() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Skills & Competencies</p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                  {skill.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{skill.level}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}