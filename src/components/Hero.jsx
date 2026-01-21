import { motion } from 'framer-motion'
import { ExternalLink, Linkedin, Code } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const codeSnippets = [
    { text: 'const developer = "Surabhi";', delay: 0 },
    { text: '<FrontendDeveloper />', delay: 0.5 },
    { text: 'function build() { return awesome; }', delay: 1 },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding bg-white relative overflow-hidden"
    >
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute code-snippet opacity-10"
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: snippet.delay,
            }}
          >
            <span className="text-vibrant-green">{'<'}</span>
            {snippet.text}
            <span className="text-vibrant-green">{'/>'}</span>
          </motion.div>
        ))}

        {/* Floating Brackets */}
        <motion.div
          className="absolute top-20 right-20 text-6xl font-mono text-soft-yellow opacity-20"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {'{'}
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-6xl font-mono text-vibrant-green opacity-20"
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          {'}'}
        </motion.div>

        {/* Floating Dots */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-soft-pink rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-soft-yellow rounded-full opacity-40"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-soft-yellow/50 via-vibrant-green/50 to-soft-pink/50 rounded-full blur-2xl" />
              <div className="absolute inset-0 rounded-full border-4 border-soft-yellow animate-pulse" />
              {!imageError ? (
                <img
                  src={`${import.meta.env.BASE_URL}SurabhiProfilePhoto.jpg`}
                  alt="Surabhi Bishwas"
                  className={`relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-2xl z-10 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
                  onError={() => {
                    console.error('Image failed to load')
                    setImageError(true)
                  }}
                  onLoad={() => {
                    setImageLoaded(true)
                    setImageError(false)
                  }}
                  loading="eager"
                />
              ) : (
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-soft-yellow via-vibrant-green to-soft-pink items-center justify-center border-4 border-white shadow-2xl flex z-10">
                  <span className="text-4xl font-bold text-white">SB</span>
                </div>
              )}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 border-4 border-soft-yellow border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-mono text-vibrant-green">{'<'}</span>
                <span className="text-gray-900">Hello, I'm</span>
                <span className="font-mono text-vibrant-green">{'/>'}</span>
              </motion.div>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                Surabhi Bishwas
              </motion.h1>
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="font-mono text-[#FFB300]">{'{'}</span>
                <span className="text-vibrant-green">Frontend Developer</span>
                <span className="font-mono text-[#FFB300]">{'}'}</span>
              </motion.div>
              <motion.p
                className="text-xl sm:text-2xl text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Crafting Digital Experiences
                <motion.span
                  className="inline-block ml-1 text-vibrant-green blinking-cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Building <span className="text-vibrant-green font-semibold">scalable web applications</span> with{' '}
              <span className="text-[#FFB300] font-semibold">Angular</span>,{' '}
              <span className="text-[#FFB300] font-semibold">React</span>, and{' '}
              <span className="text-[#FFB300] font-semibold">Next.js</span>.
              <br />
              <span className="text-gray-600">
                AI + SaaS enthusiast turning ideas into reality{' '}
                <span className="font-mono text-soft-pink">{'</>'}</span>
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('resume')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 200, 83, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-vibrant-green text-white rounded-lg font-semibold hover:bg-[#00B248] transition-all shadow-lg"
              >
                <Code size={20} />
                View Resume
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/surabhi-bishwas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(0, 200, 83, 0.2)',
                  borderColor: '#00C853'
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-vibrant-green border-2 border-vibrant-green rounded-lg font-semibold hover:bg-green-light transition-all shadow-lg"
              >
                <Linkedin size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pt-12 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-vibrant-green rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-vibrant-green rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
