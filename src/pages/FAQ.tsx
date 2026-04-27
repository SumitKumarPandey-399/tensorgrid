import { useState } from 'react'
import { Section } from '../components/Section'
import { faqContent, pageHeadings } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section title={pageHeadings.faqTitle}>
      <div className="space-y-4">
        {faqContent.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <article key={faq.question} className="glass-panel rounded-2xl p-5 shadow-soft">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-slate-100">{faq.question}</span>
                <span className="ml-4 text-cyan-300">{isOpen ? '-' : '+'}</span>
              </button>
              {isOpen && <p className="mt-3 text-slate-300">{faq.answer}</p>}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
