import { DefaultAnimationWrapper } from '@/components/ui/animations/AnimationWrappers'
import { Typography } from '@/components/atoms/typography'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
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
    <DefaultAnimationWrapper className="rounded-3xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-sm md:p-8 dark:border-slate-700/20 dark:bg-slate-800/70">
      <Typography as="h2" variant="h2" size="xl" weight="bold" color="secondary" className="mb-6">
        Contact Information
      </Typography>

      <div className="space-y-6">
        {/* Email */}
        <div className="group flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <LuMail className="h-6 w-6 text-white" />
          </div>
          <div>
            <Typography as="p" size="xs" color="inherit" weight="medium" className="text-slate-500">
              Email
            </Typography>
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
            <LuPhone className="h-6 w-6 text-white" />
          </div>
          <div>
            <Typography as="p" size="xs" color="inherit" weight="medium" className="text-slate-500">
              Phone
            </Typography>
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
            <LuMapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <Typography as="p" size="xs" color="inherit" weight="medium" className="text-slate-500">
              Location
            </Typography>
            <Typography as="p" size="xs" color="inherit" weight="medium" className="text-slate-800">
              {contactInfo.location}
            </Typography>
          </div>
        </div>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default ContactInformation
