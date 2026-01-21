import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const contactInfo = [
  {
    label: 'Email',
    value: 'surabhi.bishwas@example.com',
    href: 'mailto:surabhi.bishwas@example.com',
    icon: Mail,
    color: 'from-vibrant-green to-green-light',
  },
  {
    label: 'Phone',
    value: '+91-7488271342',
    href: 'tel:+917488271342',
    icon: Phone,
    color: 'from-soft-pink to-pink-light',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/surabhi-bishwas',
    href: 'https://linkedin.com/in/surabhi-bishwas',
    icon: Linkedin,
    color: 'from-vibrant-green to-green-light',
  },
  {
    label: 'GitHub',
    value: 'github.com/surabhi-bishwas',
    href: 'https://github.com/surabhi-bishwas',
    icon: Github,
    color: 'from-soft-yellow to-yellow-light',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-yellow-light/20 via-white to-green-light/20 relative overflow-hidden">
      {/* Background Code Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 font-mono text-2xl text-vibrant-green">
          {'{'}
        </div>
        <div className="absolute top-40 left-20 font-mono text-xl text-soft-yellow">
          const contact = () =&gt; {'{'}
        </div>
        <div className="absolute bottom-40 right-20 font-mono text-2xl text-vibrant-green">
          {'}'}
        </div>
        <div className="absolute bottom-20 right-10 font-mono text-xl text-soft-pink">
          {'</>'}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-vibrant-green/15 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-80 h-80 bg-soft-yellow/20 rounded-full blur-3xl"
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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            <span className="font-mono text-vibrant-green">{'<'}</span>
            Get In Touch
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Let's build something amazing together!
          </p>

          {/* Contact Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const Component = info.href ? motion.a : motion.div
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Component
                    href={info.href}
                    target={info.href ? '_blank' : undefined}
                    rel={info.href ? 'noopener noreferrer' : undefined}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(0, 200, 83, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-soft-yellow hover:border-vibrant-green min-h-[160px] w-full ${
                      info.href ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon className="text-gray-900" size={24} strokeWidth={2} />
                    </div>
                    <div className="text-center w-full px-2">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1.5 font-medium">
                        {info.label}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900 break-words overflow-wrap-anywhere leading-tight">
                        {info.value}
                      </div>
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="https://linkedin.com/in/surabhi-bishwas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0, 200, 83, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-vibrant-green text-white rounded-lg font-semibold hover:bg-[#00B248] transition-all shadow-lg"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
