import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import pic1 from "../asset/pexels-hasanalbari-1229861.jpg";
import pic2 from "../asset/pexels-jibarofoto-2148216.jpg";

// Typing Animation Component
const TypingAnimation = ({ text, speed = 100, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && text.length > 0) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, hasStarted]);

  return (
    <span className={`relative inline-block ${className}`}>
      {displayText || text}
      {!isComplete && displayText.length < text.length && (
        <motion.span
          className="inline-block w-1 h-8 bg-cyan-400 ml-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};

const Home = () => {
  const [currentPic, setCurrentPic] = useState(pic1); 
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPic(prevPic => (prevPic === pic1 ? pic2 : pic1));
    }, 4000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={currentPic} 
          alt="Background" 
          className="w-full h-full object-cover"
          key={currentPic}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/70 to-dark-900/80"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p 
            className="text-lg md:text-xl text-cyan-300 mb-4 font-medium"
            initial={{ opacity: 0, y: -30, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -45 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 80 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 120 }}
            >
              <span className="text-white animate-glow">Dawit Kindea</span>
            </motion.div>
          </motion.h1>

          {/* Title */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-medium"
            initial={{ opacity: 0, y: 30, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 150 }}
            >
              Full-Stack AI Developer
            </motion.span> 
            <motion.span
              className="text-orange-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {" "}| React.js, Python, & Machine Learning Specialist
            </motion.span>
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 80 }}
          >
            <motion.span
              className="text-violet-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Leveraging cutting-edge AI and machine learning technologies to build intelligent systems and scalable web applications that solve real-world problems.
            </motion.span>
          </motion.p>

          {/* Skill Categories (Clickable) */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0, type: "spring", stiffness: 100 }}
          >
            {[
              { 
                name: 'WordPress', 
                color: 'text-blue-300 border-blue-400/50 hover:bg-blue-500/20',
                skills: ['Custom Themes', 'Plugins', 'WooCommerce', 'Headless WP', 'ACF', 'SEO']
              },
              { 
                name: 'Machine Learning', 
                color: 'text-purple-300 border-purple-400/50 hover:bg-purple-500/20',
                skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Computer Vision', 'YOLO']
              },
              { 
                name: 'Full-Stack Developer', 
                color: 'text-emerald-300 border-emerald-400/50 hover:bg-emerald-500/20',
                skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Auth (JWT)']
              },
            ].map((cat, index) => (
              <motion.button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 bg-dark-800/50 backdrop-blur-sm border rounded-full text-sm font-medium transition-all duration-300 ${cat.color}`}
                initial={{ opacity: 0, scale: 0.5, y: 50, rotateZ: -180 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.15, type: 'spring', stiffness: 120, damping: 8 }}
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Category Skills Panel */}
          {selectedCategory && (
            <motion.div
              key={selectedCategory.name}
              className="max-w-2xl mx-auto mb-12 card-dark p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-200">{selectedCategory.name} Skills</h3>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm border border-dark-600 hover:border-primary-500/50 hover:bg-primary-500/20 hover:text-primary-300 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.0, type: "spring", stiffness: 100 }}
          >
            <motion.button 
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 group relative overflow-hidden"
              initial={{ opacity: 0, x: -100, rotateY: -90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 3.2, type: "spring", stiffness: 120 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={scrollToContact}
              className="btn-ghost flex items-center gap-2"
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 3.4, type: "spring", stiffness: 120 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6, type: "spring", stiffness: 100 }}
          >
            <motion.a 
              href="https://github.com/davekindea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, delay: 3.8, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/dawit-kindea-98b11424" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, delay: 4.0, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: -15,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors" />
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/18TGKI59RU5laSnOY4adZ9qW3nJMVPc-g/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, delay: 4.2, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
