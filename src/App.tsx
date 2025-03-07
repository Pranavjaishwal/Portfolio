import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Briefcase, User, Coffee, Terminal, X, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'} text-gray-900 dark:text-white transition-colors duration-200`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 transition-colors duration-200`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Terminal className="text-blue-500" size={32} />
              <span className="text-2xl font-bold text-blue-500">DevFolio</span>
            </a>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-blue-400">Pranav Kumar</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
              Crafting exceptional digital experiences through innovative solutions and cutting-edge technologies.
            </p>
            <div className="flex gap-6">
              <a href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20">
                Get in Touch
              </a>
              <a href="https://drive.google.com/file/d/1qLWXPlw-nV168Egq5IftZFSn2fIox0tG/view?usp=sharing " target='_blank' 
                className="border border-gray-300 dark:border-white/20 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-blue-500/10 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <User className="text-blue-500" size={24} />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-2xl p-8 shadow-lg backdrop-blur-sm animate-fade-in-delay-1`}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi! I'm Pranav Kumar, a passionate Full Stack Developer who loves building scalable and user-friendly web applications. With a strong foundation in software development, I enjoy solving complex problems and creating impactful digital solutions.

I hold a Bachelor's degree in Computer Science from Visvesvaraya Technological University and have gained hands-on experience through various projects and internships. My journey has involved working on AI-driven applications, e-commerce platforms, and real-time interactive solutions, which have enhanced my ability to develop efficient and high-performance applications.

Throughout my internships at ScienceUtsav, AICTE Eduskills, and Crejo.Fun, I have collaborated with teams to build dynamic applications, optimize performance, and improve user experiences. I thrive in environments that encourage innovation, creativity, and continuous learning, and I am always eager to explore new technologies to enhance my development skills.

I believe in writing clean, maintainable code and developing applications that not only function seamlessly but also provide great user experiences. I am always open to collaborating on exciting projects and contributing to impactful solutions.

Let's connect and create something amazing! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Briefcase className="text-blue-500" size={24} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8 animate-fade-in-delay-1">
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">Web Developer Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400">ScienceUtsav Educational Services Pvt. Ltd</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Jan 2024 - Mar 2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Re-engineered website interface, improving user retention by 20%</li>
                  <li>Reduced load times by 15% through frontend optimization</li>
                  <li>Implemented dynamic content features improving user interaction by 30%</li>
                </ul>
              </div>
              
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">Android Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">AICTE Eduskills</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Sep 2023 - Nov 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Built UI components using Jetpack Compose and Material Design</li>
                  <li>Integrated RESTful APIs with Retrofit and Coil</li>
                  <li>Implemented data persistence with SQLite and Preference DataStore</li>
                </ul>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">Software Developer Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400">Crejo.Fun</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">April 2022 - July 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Developed "Fun Room" video conferencing application</li>
                  <li>Integrated real-time features like chat and screen-sharing</li>
                  <li>Worked with ReactJS and Socket.IO for real-time communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Code className="text-blue-500" size={24} />
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay-1">
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Frontend Development</h3>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    React.js & Next.js
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    TypeScript
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    HTML5/CSS3
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    JavaScript
                  </li>
                </ul>
              </div>
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Backend Development</h3>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Node.js & Express
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Python & Django
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Java & Spring Boot
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    SQL & MongoDB
                  </li>
                </ul>
              </div>
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg backdrop-blur-sm`}>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Tools & Technologies</h3>
                <ul className="space-y-4">
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Git & GitHub
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Docker
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    AWS Services
                  </li>
                  <li className="skill-item flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Android Studio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Briefcase className="text-blue-500" size={24} />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delay-1">
              <div className={`project-card ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm`}>
                <img 
                  src="dist\public\Deepfake-Detection-Techniques.jpg"  
                  alt="VerifAI" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">VerifAI: DeepFake Detection</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    A deepfake detection system using Python, TensorFlow, and OpenCV, achieving over 90% accuracy in
                    identifying manipulated videos.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/Pranavjaishwal"target='_blank' className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                  </div>
                </div>
              </div>

              <div className={`project-card ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm`}>
                <img 
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">ShopSmart: E-commerce Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include real-time inventory management, secure payments, and an admin dashboard.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/Pranavjaishwal" target='_blank' className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                    {/* <a href="https://github.com/Pranavjaishwal" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Coffee className="text-blue-500" size={24} />
              <h2 className="text-3xl font-bold">Let's Connect</h2>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg backdrop-blur-sm animate-fade-in-delay-1`}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
                I'm always interested in hearing about new projects and opportunities.
                Let's discuss how we can work together to create something amazing.
              </p>
              <div className="flex flex-col items-center gap-8">
                <div className="flex justify-center gap-8">
                  <a href="https://github.com/Pranavjaishwal" target='_blank'
                    className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-4 rounded-lg hover:bg-blue-500/20 transition-colors`}>
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/pranav-jaishwal/" target='_blank'
                    className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-4 rounded-lg hover:bg-blue-500/20 transition-colors`}>
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:thepranavjaishwal@gmail.com" target='_blank'
                    className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-4 rounded-lg hover:bg-blue-500/20 transition-colors`}>
                    <Mail size={24} />
                  </a>
                  <a href="https://twitter.com/your-twitter" target='_blank'
                    className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-4 rounded-lg hover:bg-blue-500/20 transition-colors`}>
                    <Twitter size={24} />
                  </a>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Connect with Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Pranav Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl w-full max-w-md mx-4 shadow-xl`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white`}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;