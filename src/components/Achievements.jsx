import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, Star, TrendingUp } from 'lucide-react'

const achievements = [
  {
    title: 'Impact Award',
    description: 'Achieved at JobTwine townhall in 4 months for impactful frontend delivery',
    icon: Trophy,
    color: 'from-soft-yellow to-yellow-light',
    iconColor: 'text-soft-yellow',
  },
  {
    title: 'Frontend Lead Recognition',
    description: 'Recognized by CEO; Mentored team members and acted as India PoC for major clients',
    icon: Star,
    color: 'from-vibrant-green to-green-light',
    iconColor: 'text-vibrant-green',
  },
  {
    title: '25% Delivery Boost',
    description: 'Boosted delivery quality and client retention by 25% through leadership',
    icon: TrendingUp,
    color: 'from-soft-pink to-pink-light',
    iconColor: 'text-soft-pink',
  },
  {
    title: '100K+ Users',
    description: 'Engineered scalable video interview platform supporting 100K+ users',
    icon: Award,
    color: 'from-vibrant-green to-green-light',
    iconColor: 'text-vibrant-green',
  },
]

const metrics = [
  { value: '25%', label: 'Delivery Quality Boost' },
  { value: '100K+', label: 'Users Supported' },
  { value: '50+', label: 'Stakeholders Demoed' },
  { value: '20%', label: 'Lead Conversion Increase' },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-light/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-green-light/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
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
            Achievements
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Recognition and impact highlights
          </p>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${achievement.color} rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-${achievement.iconColor}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md`}>
                      <Icon className={achievement.iconColor} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1,
                }}
                whileHover={{ scale: 1.1 }}
                className="text-center p-6 bg-gradient-to-br from-soft-yellow/20 via-yellow-light/15 to-green-light/20 rounded-xl border border-soft-yellow/20 shadow-md"
              >
                <div className="text-3xl font-bold text-vibrant-green mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
