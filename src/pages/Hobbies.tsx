import { motion } from 'framer-motion';
import { Music, Bike, BookOpen, Share2 } from 'lucide-react';

const hobbies = [
  {
    name: 'Music',
    description: 'Enjoying various genres of music in free time',
    icon: Music
  },
  {
    name: 'Bike Riding',
    description: 'Exploring the city on two wheels',
    icon: Bike
  },
  {
    name: 'Book Reading',
    description: 'Expanding knowledge through literature',
    icon: BookOpen
  },
  {
    name: 'Social Media',
    description: 'Staying connected with the digital world',
    icon: Share2
  }
];

export default function Hobbies() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Personal Interests</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Hobbies & Activities</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <hobby.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {hobby.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{hobby.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}