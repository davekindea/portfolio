import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Full-Stack AI Developer',
      organization: 'Amplitude Ventures',
      location: 'Addis Ababa, Ethiopia',
      period: '01/2025 - Present',
      description: 'Working on various projects including WordPress development and currently developing the AI Jack Full-Stack project. Using React.js for frontend and Supabase as backend and service layer. Focus on optimizing performance, security, and usability while ensuring seamless integration of AI-driven functionalities.',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      type: 'experience',
      title: 'Full Stack Web Developer Intern',
      organization: 'Ministry of Innovation and Technology',
      location: 'Addis Ababa, Ethiopia',
      period: '01/2024 - 11/2024',
      description: 'Led the development of a Document Management System for government projects, optimizing performance, security, and accessibility. Used React.js for frontend and Node.js for backend, creating a seamless solution for document storage, retrieval, and management.',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      type: 'experience',
      title: 'Fullstack Developer',
      organization: 'Shega Media and Technology',
      location: 'Addis Ababa, Ethiopia',
      period: '09/2024 - 03/2025',
      description: 'Contributed to the development of an e-commerce website, focusing on optimizing performance, security, and user experience. Used Next.js for frontend and Django for backend, building a seamless, scalable solution for product management, order processing, and secure transactions.',
      icon: Briefcase,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      type: 'education',
      title: 'BSc in Electrical and Computer Engineering (Computer Stream)',
      organization: 'Addis Ababa University',
      location: 'Addis Ababa, Ethiopia',
      period: '07/2021 - 07/2025',
      description: 'Graduated with Great Distinction. Developed strong technical foundation in computer systems, programming, algorithms, and data structures. Achieved outstanding academic results while continuously expanding knowledge in computer engineering and software development.',
      icon: GraduationCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      type: 'education',
      title: 'Machine Learning and Data Science Training',
      organization: '10Academy',
      location: 'Addis Ababa, Ethiopia',
      period: '08/2024 - 12/2024',
      description: '3-month project-based program focused on solving real-world problems using data science and machine learning techniques. Developed and implemented ML models with Python, NumPy, Pandas, and Scikit-learn. Worked on hands-on projects in finance, healthcare, and technology.',
      icon: GraduationCap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const achievements = [
    'Graduated with Great Distinction from Addis Ababa University',
    'Developed AI-driven Traffic Management System using computer vision and YOLO',
    'Led development of Document Management System for government projects',
    'Built comprehensive e-commerce platforms with Next.js and Django',
    'Completed 3-month Machine Learning and Data Science training program',
    'President of Act on Youth Empowerment Club with 330+ members',
    'Proficient in Python, JavaScript, React.js, Node.js, and machine learning frameworks',
    'Experience with both hardware integration (RASVerify) and software development'
  ];

  return (
    <section id='experience' className="section-padding bg-dark-800">
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
             Experience & <motion.span 
               className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
               viewport={{ once: true }}
             >
               Education
             </motion.span>
           </motion.h2>
           <motion.p 
             className="text-teal-200 max-w-2xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
           >
             My journey in technology and engineering, showcasing continuous learning and professional growth.
           </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                   <motion.div
                     className="card-dark p-6 group"
                     initial={{ opacity: 0, y: 50, rotateX: -30, scale: 0.9 }}
                     whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                     transition={{ 
                       duration: 0.8, 
                       delay: index * 0.2, 
                       type: "spring", 
                       stiffness: 100 
                     }}
                     viewport={{ once: true }}
                     whileHover={{ 
                       y: -10, 
                       scale: 1.05,
                       rotateY: 3,
                       transition: { duration: 0.3 }
                     }}
                   >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${exp.bgColor}`}>
                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            exp.type === 'education' ? 'bg-blue-100 text-blue-700' :
                            exp.type === 'experience' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {exp.type === 'education' ? 'Education' : 
                             exp.type === 'experience' ? 'Experience' : 'Project'}
                          </span>
                        </div>
                        
                         <h3 className="text-xl font-semibold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                           {exp.title}
                         </h3>
                         
                         <div className="flex items-center gap-4 text-sm text-blue-200 mb-3">
                           <div className="flex items-center gap-1">
                             <Briefcase className="w-4 h-4 text-cyan-400" />
                             <span className="font-medium">{exp.organization}</span>
                           </div>
                         </div>
                         
                         <div className="flex items-center gap-4 text-sm text-emerald-300 mb-4">
                           <div className="flex items-center gap-1">
                             <MapPin className="w-4 h-4 text-emerald-400" />
                             <span>{exp.location}</span>
                           </div>
                           <div className="flex items-center gap-1">
                             <Calendar className="w-4 h-4 text-purple-400" />
                             <span>{exp.period}</span>
                           </div>
                         </div>
                         
                         <p className="text-violet-100 leading-relaxed">
                           {exp.description}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

         {/* Key Achievements */}
         <motion.div 
           className="mt-20"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
           <div className="text-center mb-12">
             <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-4">
               Key <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Achievements</span>
             </h3>
             <p className="text-cyan-200 max-w-2xl mx-auto">
               Highlights of my professional journey and significant accomplishments that demonstrate my expertise and impact.
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {achievements.map((achievement, index) => (
               <motion.div
                 key={index}
                 className="group relative card-dark p-6"
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
                 {/* Achievement Icon */}
                 <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <div className="w-4 h-4 bg-white rounded-full"></div>
                 </div>
                 
                 {/* Achievement Content */}
                 <div className="pr-12">
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                     <p className="text-slate-200 leading-relaxed font-medium group-hover:text-white transition-colors duration-200">
                       {achievement}
                     </p>
                   </div>
                 </div>

                 {/* Hover Effect Border */}
                 <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
               </motion.div>
             ))}
           </div>

           {/* Stats Section */}
           <motion.div 
             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
           >
             <div className="text-center group">
               <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
               <div className="text-cyan-300 font-medium">Years Experience</div>
             </div>
             <div className="text-center group">
               <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
               <div className="text-emerald-300 font-medium">Projects Completed</div>
             </div>
             <div className="text-center group">
               <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">330+</div>
               <div className="text-purple-300 font-medium">Club Members Led</div>
             </div>
             <div className="text-center group">
               <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">Great</div>
               <div className="text-pink-300 font-medium">Distinction</div>
             </div>
           </motion.div>
         </motion.div>
      </div>
    </section>
  );
};

export default Experience;
