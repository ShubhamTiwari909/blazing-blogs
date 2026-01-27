import { Typography } from '@/components/atoms/typography'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { contactInfo } from './data'

const ContactInfo = () => {
  return (
    <div>
      <Typography as="h3" variant="p" weight="semibold" color="white" className="mb-4">
        Get In Touch
      </Typography>
      <ul className="space-y-3">
        <li>
          <a
            href={`mailto:${contactInfo.email}`}
            className="group flex items-center space-x-3 text-slate-400 transition-colors duration-200 hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 transition-colors duration-200 group-hover:bg-blue-600/30">
              <LuMail className="h-4 w-4 text-blue-400" />
            </div>
            <Typography as="p" size="xxs" color="inherit" weight="medium">
              {contactInfo.email}
            </Typography>
          </a>
        </li>
        <li>
          <a
            href={`tel:${contactInfo.phone}`}
            className="group flex items-center space-x-3 text-slate-400 transition-colors duration-200 hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 transition-colors duration-200 group-hover:bg-green-600/30">
              <LuPhone className="h-4 w-4 text-green-400" />
            </div>
            <Typography as="p" size="xxs" color="inherit" weight="medium">
              {contactInfo.phone}
            </Typography>
          </a>
        </li>
        <li>
          <div className="flex items-center space-x-3 text-slate-400">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20">
              <LuMapPin className="h-4 w-4 text-purple-400" />
            </div>
            <Typography as="p" size="xxs" color="inherit" weight="medium">
              {contactInfo.location}
            </Typography>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactInfo
