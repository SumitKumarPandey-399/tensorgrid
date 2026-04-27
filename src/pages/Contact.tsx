import { Section } from '../components/Section'
import { contactContent, siteContent } from '../data/content'

export default function Contact() {
  return (
    <Section title={contactContent.heading} subtitle={contactContent.subtitle}>
      <div className="grid gap-8 md:grid-cols-2">
        <form className="glass-panel rounded-2xl p-6 shadow-soft">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                {contactContent.form.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus:ring-2"
                placeholder={contactContent.form.namePlaceholder}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                {contactContent.form.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus:ring-2"
                placeholder={contactContent.form.emailPlaceholder}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">
                {contactContent.form.messageLabel}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus:ring-2"
                placeholder={contactContent.form.messagePlaceholder}
              />
            </div>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              {contactContent.form.submitText}
            </button>
          </div>
        </form>
        <aside className="glass-panel rounded-2xl p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-slate-100">{contactContent.form.detailsTitle}</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>
              {contactContent.form.emailPrefix} {siteContent.contact.email}
            </li>
            <li>
              {contactContent.form.phonePrefix} {siteContent.contact.phone}
            </li>
            <li>
              {contactContent.form.locationPrefix} {siteContent.contact.location}
            </li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}
