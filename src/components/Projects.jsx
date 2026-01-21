import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Users, Zap, Brain, Github } from 'lucide-react'

const projects = [
  {
    title: 'AI Interview Platform',
    description:
      'A comprehensive real-time video interview platform with AI Copilot and proctoring features, supporting 100K+ users across India and the US. Built with scalable architecture using Dyte & Daily SDKs.',
    highlights: [
      'Real-time AI Avatar platform with Next.js, React, TypeScript, LiveKit, ANAM, and Pipecat',
      'Factory Method architecture for modular, low-latency streaming workflows',
      'AI Shortlisting Agent using Server-Sent Events (SSE) for real-time candidate evaluation',
      'Reduced bulk resume processing time by 40%',
      'Collaborative code editor with OTP-based self-demo flow',
      'Increased lead conversions by 20%',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'LiveKit', 'Dyte', 'Daily SDK'],
    icon: Brain,
    color: 'bg-gradient-to-br from-vibrant-green to-green-light',
  },
  {
    title: 'Try Us Out / User Trial Feature',
    description:
      'Built an innovative self-demo flow with instant AI feedback, allowing users to experience the platform without signing up. Features OTP-based authentication and real-time AI evaluation.',
    highlights: [
      'OTP-based self-demo flow',
      'Instant AI feedback and evaluation',
      'Successfully demoed to 50+ stakeholders',
      'Increased lead conversions by 20%',
      'Stability through 1,000+ interview sessions',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'AI/ML', 'OTP'],
    icon: Zap,
    color: 'bg-gradient-to-br from-soft-yellow to-yellow-light',
  },
  {
    title: 'Chrome Extension for Meesho',
    description:
      'Built and demoed a Chrome Extension for Meesho in 3 days, integrated with Google Meet & Lever ATS. Features secure SSO, dynamic content scripts, and a side-panel for real-time interviewer assistance.',
    highlights: [
      'Secure SSO integration',
      'Dynamic content scripts',
      'Real-time interviewer assistance side-panel',
      'Google Meet & Lever ATS integration',
    ],
    tech: ['Chrome Extension API', 'Google Meet API', 'Lever ATS'],
    icon: Zap,
    color: 'bg-gradient-to-br from-soft-pink to-pink-light',
  },
  {
    title: 'Google Meet Add-on',
    description:
      'Developed a Google Meet Add-on allowing users to access interview copilot within GMeet. Handled Google verification and public rollout via Google Workspace Marketplace.',
    highlights: [
      'Google Workspace Marketplace integration',
      'Interview copilot within Google Meet',
      'Full Google verification process',
      'Public rollout and distribution',
    ],
    tech: ['Google Workspace API', 'Google Meet API', 'OAuth'],
    icon: Users,
    color: 'bg-gradient-to-br from-vibrant-green to-green-light',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-yellow-light/20 via-white to-green-light/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-vibrant-green/15 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-soft-yellow/20 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
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
            Key Projects
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Real-world applications with measurable impact
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0, 200, 83, 0.15)',
                    borderColor: '#00C853'
                  }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <Icon className="text-gray-900" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-vibrant-green mt-1">▸</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex gap-3 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-vibrant-green text-white rounded-lg text-sm font-semibold hover:bg-[#00B248] transition-all shadow-md"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#FFD700', color: '#000' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-vibrant-green border-2 border-vibrant-green rounded-lg text-sm font-semibold hover:bg-soft-yellow transition-all"
                    >
                      <Github size={16} />
                      GitHub
                    </motion.button>
                  </div> */}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
