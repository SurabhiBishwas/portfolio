import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Code2 } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = ['scalable', 'high-impact', 'AI-powered', '100K+ users']

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                <span className="font-mono text-vibrant-green">{'<'}</span>
                About Me
                <span className="font-mono text-vibrant-green">{'/>'}</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-soft-yellow to-vibrant-green rounded-full" />
            </motion.div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I'm a <strong className="text-vibrant-green">Frontend Developer</strong> with 4 years of experience
                delivering <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold">scalable</span> web applications using Angular, React, and Next.js.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I have a proven track record of leading and shipping{' '}
                <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold">high-impact</span> features
                in fast-paced SaaS environments. My expertise spans modern frontend frameworks, with a focus on clean
                architecture, performance optimization, and continuous innovation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At <strong>JobTwine</strong>, I've been recognized as Frontend Lead by the CEO, where I've mentored team members
                and acted as India PoC for major clients like Brillio and Cynet. I specialize in building{' '}
                <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold">AI-powered</span> platforms and
                scalable video solutions that support <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold">100K+ users</span>.
              </motion.p>
            </div>
          </div>

          {/* Right: Animated Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-yellow-light to-green-light rounded-2xl p-8 shadow-xl">
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Code2 className="text-vibrant-green" size={40} />
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#FFB300]" size={24} />
                  <span className="text-gray-700 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-vibrant-green" size={24} />
                  <span className="text-gray-700 font-medium">Scalable Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-soft-pink" size={24} />
                  <span className="text-gray-700 font-medium">AI Innovation</span>
                </div>
              </div>
              <motion.div
                className="mt-6 p-4 bg-white/80 rounded-lg backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(0, 200, 83, 0)',
                    '0 0 20px rgba(0, 200, 83, 0.3)',
                    '0 0 0px rgba(0, 200, 83, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <p className="font-mono text-sm text-gray-600">
                  <span className="text-vibrant-green">const</span> developer = {'{'}
                  <br />
                  <span className="ml-4">
                  {'  '}passion: <span className="text-[#FFB300]">'coding'</span>,
                  </span>
                  <br />
                  <span className="ml-4">
                  {'  '}vibe: <span className="text-soft-pink">'coder girl'</span>
                  </span>
                  <br />
                  {'}'};
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
