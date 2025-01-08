import { motion } from 'framer-motion';
import { Building2, MessageSquare } from 'lucide-react';

const sponsors = [
  {
    name: 'Magnates Empire',
    description: 'A Pakistan based hardware exporter business',
    website: 'magnatesempire.com',
    icon: Building2
  },
  {
    name: 'Street Wise Ads',
    description: 'Pakistan based marketing business via ads on rickshaw autos and cars',
    website: 'swa.magnatesempire.com',
    icon: MessageSquare
  }
];

export default function Sponsors() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Sponsors</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="space-y-12">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <sponsor.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{sponsor.name}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{sponsor.description}</p>
                    {sponsor.website && (
                      <a
                        href={`https://${sponsor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <form
              name="sponsor-contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="sponsor-contact" />
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sponsorship Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Sponsorship Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}