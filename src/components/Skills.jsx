import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frameworks & Libraries',
    emoji: '⚛️',
    skills: [
      'Angular',
      'Angular Material',
      'React',
      'Next.js',
      'Bootstrap',
      'Tailwind CSS',
      'Chart.js',
      'jsPDF',
    ],
  },
  {
    title: 'Languages',
    emoji: '💻',
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3/SCSS', 'RxJS'],
  },
  {
    title: 'Developer Tools',
    emoji: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Jira',
      'Postman',
      'Swagger',
      'VS Code',
      'Chrome DevTools',
      'Lighthouse',
      'Figma',
    ],
  },
  {
    title: 'Other Skills',
    emoji: '✨',
    skills: [
      'RESTful APIs',
      'Responsive Design',
      'Performance Optimization',
      'WebSockets',
      'Lazy Loading',
      'OCR',
      'A/B Testing',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-yellow-light/20 via-white to-green-light/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-soft-yellow/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-vibrant-green/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            <span className="font-mono text-vibrant-green">{'<'}</span>
            Skills
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Technologies I love working with
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-soft-yellow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: '#FFD700',
                        color: '#000',
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-light to-green-light rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
