import ContactInformation from '@/components/contact/ContactInformation'
import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import SocialLinks from '@/components/contact/SocialLinks'
import GetInTouch from '@/components/contact/GetInTouch'
import Outro from '@/components/contact/Outro'
import { METADATA } from './metadata'

export const metadata = METADATA

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <GetInTouch />

          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            <ContactInformation />
            <SocialLinks />
          </div>
          <Outro />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
