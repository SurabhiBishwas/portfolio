import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download } from 'lucide-react'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const resumeUrl = 'https://drive.google.com/file/d/1jKQbwGQ4Q_fh-ERld1DVb9n4LherEkpS/preview'
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1jKQbwGQ4Q_fh-ERld1DVb9n4LherEkpS'

  return (
    <section id="resume" className="section-padding bg-gradient-to-br from-yellow-light/20 via-white to-green-light/25 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-soft-yellow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-vibrant-green/25 rounded-full blur-3xl"
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
            Resume
            <span className="font-mono text-vibrant-green">{'/>'}</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            View or download my resume to learn more about my experience, skills, and achievements.
          </p>

          {/* PDF Viewer Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Download Button - At Top */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 flex justify-center">
              <motion.a
                href={downloadUrl}
                download="Surabhi_Bishwas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFB300] to-vibrant-green text-white rounded-lg font-semibold hover:from-vibrant-green hover:to-[#FFB300] transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume PDF
              </motion.a>
            </div>

            {/* PDF Viewer */}
            <div className="relative w-full" style={{ minHeight: '600px', height: '80vh', maxHeight: '1000px' }}>
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Surabhi Bishwas Resume"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Alternative: If Google Drive embed doesn't work, show message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-500">
              Having trouble viewing?{' '}
              <a
                href="https://drive.google.com/file/d/1jKQbwGQ4Q_fh-ERld1DVb9n4LherEkpS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vibrant-green hover:text-vibrant-green/80 font-medium underline"
              >
                Open in Google Drive
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

