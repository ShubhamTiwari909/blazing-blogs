import React from 'react'
import { Code, Heart, Coffee, Lightbulb, Target, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const skills = [
    { name: 'HTML', gradient: 'from-red-500 to-red-600', icon: '🌐' },
    { name: 'CSS', gradient: 'from-blue-500 to-blue-600', icon: '🎨' },
    { name: 'JavaScript', gradient: 'from-yellow-500 to-yellow-600', icon: '⚡' },
    { name: 'TypeScript', gradient: 'from-blue-600 to-indigo-600', icon: '🔷' },
    { name: 'Tailwind CSS', gradient: 'from-cyan-500 to-blue-500', icon: '💨' },
    { name: 'React', gradient: 'from-cyan-500 to-blue-500', icon: '⚛️' },
    { name: 'Next.js', gradient: 'from-gray-800 to-gray-900', icon: '▲' },
    { name: 'Astro.js', gradient: 'from-purple-500 to-purple-600', icon: '🚀' },
    { name: 'Vue.js', gradient: 'from-green-500 to-emerald-500', icon: '💚' },
    { name: 'Node.js', gradient: 'from-green-600 to-green-700', icon: '🟢' },
    { name: 'MongoDB', gradient: 'from-green-600 to-teal-600', icon: '🍃' },
    { name: 'Express.js', gradient: 'from-gray-600 to-gray-700', icon: '🚂' },
    { name: 'Payload CMS', gradient: 'from-slate-500 to-slate-600', icon: '📦' },
    { name: 'REST API', gradient: 'from-indigo-500 to-indigo-600', icon: '🔗' },
    { name: 'Figma', gradient: 'from-purple-500 to-pink-500', icon: '🎨' },
    { name: 'AI', gradient: 'from-purple-600 to-violet-600', icon: '🤖' },
    { name: 'Testing', gradient: 'from-orange-500 to-red-500', icon: '🧪' },
    { name: 'Performance', gradient: 'from-sky-500 to-blue-500', icon: '🚀' },
  ]

  const achievements = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Full-Stack Developer',
      description: 'Building modern web applications with cutting-edge technologies',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Problem Solver',
      description: 'Passionate about finding elegant solutions to complex challenges',
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaborator',
      description: 'Love working with diverse teams to create amazing products',
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving my craft',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer crafting digital experiences that make a difference. I
              believe in the power of code to solve real-world problems and create meaningful
              connections.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story Section */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                My Story
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Hello! I&apos;m{' '}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Shubham Tiwari
                  </span>
                  , a passionate full-stack developer based in India. My journey into the world of
                  programming began with curiosity and has evolved into a deep love for creating
                  digital solutions.
                </p>
                <p>
                  I specialize in modern web technologies, particularly React, Next.js, and Node.js.
                  What drives me is the opportunity to turn complex problems into elegant,
                  user-friendly applications that make a real impact.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the developer
                  community. I believe in continuous learning and the power of collaboration.
                </p>
                <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                  <Coffee className="w-5 h-5" />
                  <span className="text-sm">Fueled by coffee and curiosity</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                <Target className="w-8 h-8 text-blue-500 mr-3" />
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden bg-gradient-to-r ${skill.gradient} rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}
                  >
                    {/* Content */}
                    <div className="relative flex items-center justify-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-white font-semibold text-sm tracking-wide">
                        {skill.name}
                      </span>
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
              What I Bring to the Table
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 mb-20">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
              My Values & Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  Quality First
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I believe in writing clean, maintainable code that stands the test of time.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  User-Centric
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Every decision I make is guided by how it will impact the end user experience.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Always exploring new technologies and approaches to solve problems better.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Let&apos;s Create Something Amazing Together
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
                I&apos;m always excited to work on new projects, collaborate with talented people,
                and contribute to meaningful solutions. Whether you have a project in mind or just
                want to chat about technology, I&apos;d love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                >
                  Get In Touch
                </a>
                <Link
                  href="/blogs"
                  className="bg-white/70 dark:bg-slate-700/70 hover:bg-white/90 dark:hover:bg-slate-600/70 text-slate-800 dark:text-slate-200 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                >
                  Read My Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
