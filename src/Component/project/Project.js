import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';
import img from '../asset/Screenshot (245).png';
import img2 from '../asset/Screenshot (246).png'; 
import img3 from '../asset/Screenshot (247).png'; 
import img4 from '../asset/Screenshot (35).png'; 
import img5 from '../asset/Screenshot (122).png'; 

const Project = () => {
  const projects = [
    { 
      title: 'AI-Driven Traffic Management System', 
      imgsrc: img3, 
      description: 'Developed an intelligent traffic control system using AI and computer vision to optimize traffic flow. Utilized RASVerify for hardware integration, YOLO for real-time vehicle detection, and custom time prediction algorithms to dynamically adjust traffic light durations.',
      techStack: ['Python', 'YOLO', 'Computer Vision', 'RASVerify', 'AI/ML', 'TensorFlow'],
      githubLink: 'https://github.com/davekindea/traffic-management.git',
      liveDemo: null,
      date: '2024-2025',
      category: 'AI/ML'
    },
    { 
      title: 'Document Management System', 
      imgsrc: img, 
      description: 'Led the development of a comprehensive Document Management System for government projects. Optimized performance, security, and accessibility with seamless document storage, retrieval, and management capabilities.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Bootstrap'],
      githubLink: 'https://github.com/davekindea/document-management.git',
      liveDemo: null,
      date: '2024',
      category: 'Full Stack'
    },
    { 
      title: 'E-commerce Platform', 
      imgsrc: img2, 
      description: 'Contributed to the development of a comprehensive e-commerce website focusing on performance, security, and user experience. Built seamless, scalable solution for product management, order processing, and secure transactions.',
      techStack: ['Next.js', 'Django', 'Python', 'PostgreSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/davekindea/ecommerce.git',
      liveDemo: null,
      date: '2024-2025',
      category: 'Full Stack'
    },
    { 
      title: 'Hospital Management System', 
      imgsrc: img4, 
      description: 'Developed a comprehensive hospital management website integrating patient records, scheduling, and staff management modules. Streamlined hospital operations and improved workflow efficiency.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
      githubLink: 'https://github.com/davekindea/HMS.git',
      liveDemo: null,
      date: '2023',
      category: 'Full Stack'
    },
    { 
      title: 'Social Media Platform', 
      imgsrc: img5, 
      description: 'Designed a full-stack social media app featuring authentication, post creation, and real-time messaging. Built with modern web technologies and responsive design principles.',
      techStack: ['React.js', 'Node.js', 'MySQL', 'Socket.io', 'JWT', 'CSS3'],
      githubLink: 'https://github.com/davekindea/social-media.git',
      liveDemo: null,
      date: '2024',
      category: 'Full Stack'
    },
    { 
      title: 'Fraud Detection System', 
      imgsrc: img3, 
      description: 'Built a machine learning-based fraud detection model using Scikit-learn and TensorFlow for anomaly detection in financial transactions. Part of 10Academy data science training program.',
      techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas', 'ML'],
      githubLink: 'https://github.com/davekindea/fraud-detection.git',
      liveDemo: null,
      date: '2024',
      category: 'AI/ML'
    }
  ];

  return (
    <section id='projects' className="section-padding bg-dark-900">
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
             Featured <motion.span 
               className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent"
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
               viewport={{ once: true }}
             >
               Projects
             </motion.span>
           </motion.h2>
           <motion.p 
             className="text-indigo-200 max-w-2xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
           >
             A showcase of my recent work demonstrating full-stack development skills, AI/ML expertise, and innovative solutions.
           </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-dark overflow-hidden group"
              initial={{ opacity: 0, y: 80, rotateX: -45, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2, 
                type: "spring", 
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.imgsrc} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                 <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
                   {project.title}
                 </h3>
                 
                 <p className="text-blue-100 text-sm leading-relaxed mb-4">
                   {project.description}
                 </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-medium text-emerald-300">Tech Stack:</span>
          </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-700 text-slate-300 rounded text-xs font-medium border border-dark-600 hover:border-primary-500/50 hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + (techIndex * 0.05),
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
                        {tech}
                      </motion.span>
        ))}
      </div>
    </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium border border-dark-600 hover:border-primary-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/davekindea"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
