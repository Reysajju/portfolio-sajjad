import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is your approach to Quality Assurance?',
    answer: 'I follow a comprehensive approach that includes both manual and automated testing, with a focus on early detection of issues and maintaining high quality standards throughout the development lifecycle.'
  },
  {
    question: 'How do you handle multiple projects simultaneously?',
    answer: 'I use effective time management and prioritization techniques, along with project management tools to ensure all tasks are completed efficiently and on schedule.'
  },
  {
    question: 'What experience do you have with MS Office?',
    answer: 'I have extensive experience with the entire MS Office suite, including advanced Excel functions, PowerPoint presentations, and Word document creation.'
  },
  {
    question: 'How do you contribute to team success?',
    answer: 'I actively participate in team discussions, share knowledge, and maintain clear communication to ensure project goals are met effectively.'
  },
  {
    question: 'What makes you effective in problem-solving?',
    answer: 'I combine analytical thinking with practical experience to identify root causes and implement effective solutions, always considering both immediate and long-term impacts.'
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Frequently Asked Questions</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left"
                  >
                    <span className="text-base font-semibold leading-7 text-gray-900 dark:text-white">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <Minus className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <Plus className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">{faq.answer}</dd>
                )}
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}