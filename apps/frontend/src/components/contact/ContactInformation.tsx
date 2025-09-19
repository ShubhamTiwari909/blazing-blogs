import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const contactInfo = {
  email: 'shubhmtiwri00@gmail.com',
  phone: '+91 9627253516',
  location: 'India',
  social: {
    instagram: 'https://www.instagram.com/supremacism__shubh/',
    linkedin: 'https://www.linkedin.com/in/shubham-tiwari-b7544b193/',
    github: 'https://github.com/ShubhamTiwari909',
    devto: 'https://dev.to/shubhamtiwari909',
  },
}

const ContactInformation = () => {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center space-x-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-lg text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-lg text-slate-800 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
            <p className="text-lg text-slate-800 dark:text-slate-200">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
