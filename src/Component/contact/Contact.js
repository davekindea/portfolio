import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_7qxnbju', 'template_rg0couy', form.current, 'H9RvjXV_J9FA3dg1Q')
      .then(
        () => {
          setAlertMessage('Message sent successfully! I\'ll get back to you soon.');
          setAlertType('success');
          setShowAlert(true);
          form.current.reset();
          setIsSubmitting(false);

          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        },
        (error) => {
          setAlertMessage('Failed to send the message. Please try again or contact me directly.');
          setAlertType('error');
          setShowAlert(true);
          setIsSubmitting(false);

          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+251 989 192 105',
      link: 'tel:+251989192105',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'davekindea1993@gmail.com',
      link: 'mailto:davekindea1993@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: null,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/davekindea',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dawit-kindea-98b11424',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      url: 'https://t.me/davido1221',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id='contacts' className="section-padding bg-dark-900">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-4"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Let's Work <motion.span 
              className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
            >
              Together
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-amber-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Alert Message */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${
                alertType === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {alertType === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="font-medium">{alertMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-navy-800 mb-6">Send me a message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="to_name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="to_email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-lg ${info.bgColor}`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-6">Follow me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-black rounded-lg hover:bg-gray-200 transition-colors ${social.color}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy-800 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to call or message me directly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            © 2024 Dawit Kindea. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;