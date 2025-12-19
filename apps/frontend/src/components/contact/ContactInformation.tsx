import { DefaultAnimationWrapper } from '@/components/ui/text-animation/AnimationWrappers'
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
    <DefaultAnimationWrapper className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70">
      <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-200">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="group flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-lg text-slate-800 transition-colors duration-200 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="group flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-lg text-slate-800 transition-colors duration-200 hover:text-green-600 dark:text-slate-200 dark:hover:text-green-400"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="group flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
            <p className="text-lg text-slate-800 dark:text-slate-200">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default ContactInformation
