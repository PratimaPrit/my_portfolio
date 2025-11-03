import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', or ''
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      
      setStatus({
        type: 'success',
        message: response.data.message || 'Message sent successfully!',
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)

    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="section-container bg-dark-card/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
        ></motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions. Feel free to reach out!
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <motion.div variants={itemVariants} className="card-gradient rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/50 text-green-400'
                      : 'bg-red-500/10 border border-red-500/50 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="card-gradient rounded-xl p-6">
              <div className="text-3xl mb-3">📧</div>
              <div className="text-gray-400 text-sm mb-1">Email</div>
              <a
                href="mailto:pratimaprit11@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                pratimaprit11@gmail.com
              </a>
            </div>

            <div className="card-gradient rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <div className="text-gray-400 text-sm mb-1">Phone</div>
              <a
                href="tel:+916206177636"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                +91-6206177636
              </a>
            </div>

            <div className="card-gradient rounded-xl p-6">
              <div className="text-3xl mb-3">📍</div>
              <div className="text-gray-400 text-sm mb-1">Location</div>
              <div className="text-gray-300">Mizoram, India</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
