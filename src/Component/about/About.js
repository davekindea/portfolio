import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Database, Globe, Wrench, Award } from 'lucide-react';
import mypic from '../asset/DSC_8290.jpg';

const About = () => {
  const skills = {
    programming: [
      'Python', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Next.js', 
      'Django', 'Assembly Language', 'MATLAB'
    ],
    database: [
      'MongoDB', 'MySQL', 'Supabase', 'Mongoose ORM', 'Database Management'
    ],
    ai_ml: [
      'Machine Learning', 'Computer Vision', 'YOLO', 'TensorFlow', 'Scikit-learn', 
      'NumPy', 'Pandas', 'XGBoost', 'LSTM', 'Data Science'
    ],
    web_tech: [
      'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 
      'JWT Authentication', 'WordPress'
    ],
    tools: [
      'Git & GitHub', 'VS Code', 'Postman', 'Docker', 'RASVerify', 
      'EMU8086', 'Power BI', 'Vercel', 'Netlify'
    ],
    soft_skills: [
      'Leadership', 'Communication', 'Time Management', 'Adaptability', 
      'Problem Solving', 'Team Collaboration', 'Project Management'
    ]
  };

  const skillCategories = [
    { title: 'Programming', icon: Code, skills: skills.programming, color: 'text-blue-600' },
    { title: 'Database & Backend', icon: Database, skills: skills.database, color: 'text-green-600' },
    { title: 'AI & Machine Learning', icon: Globe, skills: skills.ai_ml, color: 'text-purple-600' },
    { title: 'Web Technologies', icon: Code, skills: skills.web_tech, color: 'text-orange-600' },
    { title: 'Tools & Platforms', icon: Wrench, skills: skills.tools, color: 'text-red-600' },
    { title: 'Soft Skills', icon: Award, skills: skills.soft_skills, color: 'text-indigo-600' }
  ];

  return (
    <section id='about' className="section-padding bg-dark-800">
      <div className="container-max">
        {/* About Me Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           {/* Professional Image */}
           <motion.div 
             className="relative"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <div className="relative w-full max-w-md mx-auto group">
               {/* Animated Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl transform rotate-3 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
               
               {/* Main Image Container */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-primary-500/25 transition-all duration-500">
                 <img 
                   src={mypic} 
                   alt="Dawit Kindea - Full-Stack AI Developer" 
                   className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 
                 {/* Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Interactive Hover Info */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="text-center text-white">
                     <div className="text-lg font-semibold mb-2">Full-Stack AI Developer</div>
                     <div className="text-sm opacity-90">Click to learn more</div>
                   </div>
                 </div>
                 
                 {/* Floating Elements */}
                 <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                 <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
               </div>
               
               {/* Decorative Elements */}
               <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
               <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-purple-400 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
               
               {/* Interactive Border */}
               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500"></div>
             </div>
           </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
             <motion.h2 
               className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-6"
               initial={{ opacity: 0, y: 50, rotateX: -90 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
               viewport={{ once: true }}
             >
               About <motion.span 
                 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
                 viewport={{ once: true }}
               >
                 Me
               </motion.span>
             </motion.h2>
             
             <motion.div 
               className="space-y-4 text-gray-300 leading-relaxed"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <motion.p
                 className="text-blue-100"
                 initial={{ opacity: 0, x: -50, rotateY: -45 }}
                 whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                 transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                 viewport={{ once: true }}
               >
                 I'm Dawit, an innovative and results-oriented Electrical and Computer Engineer specializing in Computer Systems, graduated with Great Distinction from Addis Ababa University. Passionate about leveraging cutting-edge technologies to design, develop, and optimize intelligent systems and digital solutions.
               </motion.p>
               
               <motion.p
                 className="text-emerald-100"
                 initial={{ opacity: 0, x: 50, rotateY: 45 }}
                 whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                 transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                 viewport={{ once: true }}
               >
                 With expertise in both hardware and software domains, I excel at translating complex ideas into practical, high-performance solutions. Currently working as a Full-Stack AI Developer at Amplitude Ventures, where I'm developing the AI Jack Full-Stack project using React.js and Supabase.
               </motion.p>
               
               <motion.p
                 className="text-violet-100"
                 initial={{ opacity: 0, y: 30, scale: 0.9 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
                 viewport={{ once: true }}
               >
                 My professional journey includes developing Document Management Systems for government projects, e-commerce platforms, and AI-driven traffic management systems. I'm committed to continuous learning and staying at the forefront of innovation in computer science and software development.
               </motion.p>
             </motion.div>

            {/* Download CV Button */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotateZ: 2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://drive.google.com/file/d/18TGKI59RU5laSnOY4adZ9qW3nJMVPc-g/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           <motion.div 
             className="text-center mb-12"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
             viewport={{ once: true }}
           >
             <motion.h2 
               className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-4"
               initial={{ opacity: 0, y: 30, rotateX: -90 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
               viewport={{ once: true }}
             >
               Technical <motion.span 
                 className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
                 viewport={{ once: true }}
               >
                 Skills
               </motion.span>
             </motion.h2>
             <motion.p 
               className="text-cyan-200 max-w-2xl mx-auto"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               viewport={{ once: true }}
             >
               A comprehensive overview of my technical expertise across different domains of web development and AI/ML
             </motion.p>
           </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="card-dark p-6 group"
                initial={{ opacity: 0, y: 50, rotateX: -45, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15, 
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
        </div>
                  <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
      </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-3 py-1 bg-dark-700 text-slate-300 rounded-full text-sm font-medium hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-200 border border-dark-600 hover:border-primary-500/50"
                              initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: (index * 0.15) + (skillIndex * 0.05),
                                type: "spring",
                                stiffness: 150
                              }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.1, 
                                rotateZ: 5,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                            >
                              {skill}
                            </motion.span>
                  ))}
    </div>
              </motion.div>
            ))}
</div>
        </motion.div>
    </div>
    </section>
  );
};

export default About;
