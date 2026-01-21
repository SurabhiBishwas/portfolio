import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Award } from 'lucide-react'

const experiences = [
  {
    company: 'JobTwine',
    role: 'SDE I Frontend',
    period: 'Apr 2023 – Present',
    location: 'Bengaluru',
    achievements: [
      {
        text: 'Recognized as Frontend Lead by CEO; Mentored team members and acted as India PoC for clients like Brillio and Cynet, boosting delivery quality and client retention by',
        metric: '25%',
        highlight: true,
      },
      {
        text: 'Built and demoed a Chrome Extension for Meesho in 3 days, integrated with Google Meet & Lever ATS, featuring secure SSO, dynamic content scripts, and a side-panel for real-time interviewer assistance.',
      },
      {
        text: 'Built a real-time AI Avatar platform with Next.js, React, TypeScript, LiveKit, ANAM, and Pipecat, using Factory Method architecture to deliver modular, low-latency streaming workflows.',
      },
      {
        text: 'Developed a Google Meet Add-on allowing users to access interview copilot within GMeet; handled Google verification and public rollout via Google Workspace Marketplace.',
      },
      {
        text: 'Engineered scalable video interview platform using Dyte & Daily SDKs with AI Copilot and proctoring features, supporting',
        metric: '100K+ users',
      },
      {
        text: 'Built an AI Shortlisting Agent using Server-Sent Events (SSE) for real-time candidate evaluation streaming, reducing bulk resume processing time by',
        metric: '40%',
      },
      {
        text: 'Led the launch of collaborative code editor and OTP-based self-demo flow, successfully demoed to',
        metric: '50+ stakeholders',
        text2: 'and increasing lead conversions by',
        metric2: '20%',
      },
      {
        text: 'Achieved the Impact Award at JobTwine townhall in 4 months for impactful frontend delivery.',
      },
    ],
  },
  {
    company: 'Workex Solutions',
    role: 'Software Developer',
    period: 'Feb 2022 – Feb 2023',
    location: 'Bengaluru',
    achievements: [
      {
        text: 'Designed and implemented responsive pricing pages for a high-traffic website (',
        metric: '3M monthly users',
        text2: '), incorporating A/B testing that increased conversion rates by',
        metric2: '15%',
      },
      {
        text: 'Implemented an OCR-based name verification feature across government documents with',
        metric: '99.8% accuracy',
      },
      {
        text: 'Engineered a workforce management system with Angular Material and Chart.js, combining leave management, attendance tracking, and team metrics visualization with complex business logic for overtime calculations.',
      },
      {
        text: 'Built dynamic PDF generation using 2canvas, jsPDF and ApexCharts; rendered hidden DOM templates on-demand to ensure styled, shareable recruiter reports with minimal latency.',
      },
      {
        text: 'Received project manager praise for leading',
        metric: '4 developers',
        text2: "team to timely project completion.",
      },
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-80 h-80 bg-yellow-light/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-light/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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
            Experience
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            My professional journey
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-soft-yellow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-vibrant-green to-soft-yellow flex items-center justify-center">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-vibrant-green">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2 sm:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + achIndex * 0.1,
                      }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-vibrant-green mt-1.5">▸</span>
                      <span>
                        {achievement.text}
                        {achievement.metric && (
                          <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold text-gray-900 mx-1">
                            {achievement.metric}
                          </span>
                        )}
                        {achievement.text2}
                        {achievement.metric2 && (
                          <span className="bg-soft-yellow px-2 py-0.5 rounded font-semibold text-gray-900 mx-1">
                            {achievement.metric2}
                          </span>
                        )}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
