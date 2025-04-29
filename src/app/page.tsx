import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            CODETRAP COMPANY LTD
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-pink-400 transition">Home</Link>
            <Link href="#about" className="hover:text-pink-400 transition">About</Link>
            <Link href="#skills" className="hover:text-pink-400 transition">Skills</Link>
            <Link href="#projects" className="hover:text-pink-400 transition">Projects</Link>
            <Link href="#contact" className="hover:text-pink-400 transition">Contact</Link>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Cyuzuzo Ishimwe Patrick</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
              <span className="typewriter">frontend Developer | UI/UX Designer</span>
            </h2>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex space-x-4">
              <Link href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition">
                View My Work
              </Link>
              <Link href="#contact" className="px-6 py-3 border border-pink-500 rounded-lg font-medium hover:bg-pink-500/10 transition">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500/30">
              <Image
                src="/muheto.jpg" // Replace with your image path
                alt="muheto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <Image
                  src="/muheto.jpg" // Replace with your image path
                  alt="muheto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate developer and designer with 3+ years of experience creating web applications and digital experiences. I specialize in modern react frameworks and have a keen eye for design and user experience.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in tech started when I was in L3 during 2k22 and my family drigo, and since then I've worked with startups and established companies to bring their digital products to life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Name:</p>
                  <p className="font-medium">Cyuzuzo Muheto Ptrick </p>
                </div>
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p className="font-medium">muhetopatrick@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400">From:</p>
                  <p className="font-medium">Rubavu, Rwanda</p>
                </div>
                <div>
                  <p className="text-gray-400">Freelancer:</p>
                  <p className="font-medium">backend developer</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium inline-flex items-center hover:opacity-90 transition"
                >
                  Download CV
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                
                  { name: 'React/Next.js', level: 85 },
                  { name: 'HTML/CSS', level: 95 },
                  { name: 'UI/UX Design', level: 91 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Communication', icon: '💬', level: 85 },
                  { name: 'Team Work', icon: '👥', level: 90 },
                  { name: 'Project Management', icon: '📊', level: 80 },
                  { name: 'Creativity', icon: '🎨', level: 95 },
                  { name: 'Problem Solving', icon: '🧩', level: 90 },
                  { name: 'Leadership', icon: '🚀', level: 75 },
                ].map((skill) => (
                  <div key={skill.name} className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <h4 className="font-medium mb-1">{skill.name}</h4>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-1.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each project comes with its own challenges and learning opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured online store with cart, checkout, and admin dashboard.',
                tags: ['Next.js', 'Node.js', 'MongoDB'],
                image: '/project1.jpg',
                link: '#'
              },
              {
                title: 'Task Management App',
                description: 'A productivity app for teams to collaborate on projects and tasks.',
                tags: ['React', 'Firebase', 'Redux'],
                image: '/project2.jpg',
                link: '#'
              },
              {
                title: 'Portfolio Website',
                description: 'A custom portfolio website for a photographer client.',
                tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
                image: '/project3.jpg',
                link: '#'
              },
              {
                title: 'Weather Dashboard',
                description: 'Real-time weather information with 5-day forecast.',
                tags: ['React', 'API', 'Chart.js'],
                image: '/project4.jpg',
                link: '#'
              },
              {
                title: 'Fitness Tracker',
                description: 'Mobile app to track workouts and nutrition.',
                tags: ['React Native', 'Firebase', 'Expo'],
                image: '/project5.jpg',
                link: '#'
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics dashboard for social media metrics.',
                tags: ['Next.js', 'Tailwind', 'D3.js'],
                image: '/project6.jpg',
                link: '#'
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-700 rounded-md text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="#" 
              className="px-6 py-3 border border-pink-500 rounded-lg font-medium hover:bg-pink-500/10 transition inline-flex items-center"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">muhetopatrick@gmail.com.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-400">0790011137</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-400">Rwanda</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: 'github', link: '#' },
                    { name: 'instagram', icon: 'instagram', link: '#' },
                    { name: 'LinkedIn', icon: 'linkedin', link: '#' },
                    { name: 'Dribbble', icon: 'dribbble', link: '#' },
                  ].map((social) => (
                    <Link 
                      key={social.name}
                      href={social.link}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-pink-500/10 hover:text-pink-400 transition"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <use xlinkHref={`/icons.svg#${social.icon}`} />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Muheto patrick</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                    placeholder="muheto" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                    placeholder="muheto@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                    placeholder="Let me know how I can help you" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900/80">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                CODETRAP COMPONY LTD
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muheto patrick. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}