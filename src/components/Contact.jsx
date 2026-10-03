import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ExternalLink, Copy, Check, Send, Loader2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile.js'

// Messages are delivered to profile.email through FormSubmit (https://formsubmit.co),
// a free service that needs no account or server. On the very first submission
// FormSubmit emails a one-time activation link to that address; click it once
// and every later message arrives in the inbox.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/YajneshPoojary28', href: profile.github },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yajneshpoojary', href: profile.linkedin },
  {
    icon: ExternalLink,
    label: 'Salesforce Trailhead',
    value: 'salesforce.com/trailblazer/...',
    href: profile.trailhead,
  },
]

function useForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | activation
  const [detail, setDetail] = useState('')

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.email.trim()) next.email = 'Enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Enter a subject.'
    if (!values.message.trim()) next.message = 'Enter a message.'
    else if (values.message.trim().length < 20) next.message = 'Message must be at least 20 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: `Portfolio: ${values.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      let data = {}
      try {
        data = await res.json()
      } catch {
        /* non-JSON response */
      }
      if (/activat/i.test(data.message || '')) {
        setStatus('activation')
        return
      }
      if (!res.ok || String(data.success) !== 'true') {
        throw new Error(data.message || `Server replied with status ${res.status}`)
      }
      setStatus('success')
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Contact form send failed:', err)
      setDetail(err?.message === 'Failed to fetch' ? 'Could not reach the mail service (network, ad-blocker, or firewall).' : err?.message || '')
      setStatus('error')
    }
  }

  return { values, setValues, errors, status, detail, submit }
}

export default function Contact() {
  const { values, setValues, errors, status, detail, submit } = useForm()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="mt-2 text-muted max-w-[52ch]">
            Have a project, opportunity, or idea you'd like to discuss?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-2xl glass p-4 hover:border-primary/40 transition-colors focus-ring"
              >
                <span className="w-10 h-10 rounded-lg border border-primary/30 text-primary flex items-center justify-center shrink-0">
                  <link.icon size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">{link.label}</span>
                  <span className="block text-sm text-text truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </span>
                </span>
                {link.label === 'Email' && (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      copyEmail()
                    }}
                    aria-label="Copy email address"
                    className="ml-auto p-2 rounded-md text-muted hover:text-primary transition-colors focus-ring"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                )}
              </motion.a>
            ))}

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-2 text-center"
                >
                  Email address copied to clipboard
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            noValidate
            className="lg:col-span-3 rounded-2xl glass p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                error={errors.name}
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
              />
              <Field
                label="Email"
                type="email"
                error={errors.email}
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
              />
            </div>
            <Field
              label="Subject"
              error={errors.subject}
              value={values.subject}
              onChange={(v) => setValues((s) => ({ ...s, subject: v }))}
            />
            <Field
              label="Message"
              textarea
              error={errors.message}
              value={values.message}
              onChange={(v) => setValues((s) => ({ ...s, message: v }))}
            />

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-[#04121a] font-medium text-sm hover:brightness-110 transition focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={15} /> Send message
                </>
              )}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
                >
                  Message sent — it'll land straight in {profile.email}. Thanks for reaching out!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                >
                  Something went wrong sending that. Please try again, or email directly via{' '}
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(values.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(values.message)}`}
                    className="text-primary hover:brightness-125"
                  >
                    this link
                  </a>
                  .
                  {detail && <span className="block mt-1 text-xs opacity-80">Reason: {detail}</span>}
                </motion.div>
              )}
              {status === 'activation' && (
                <motion.div
                  key="activation"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-lg border border-border bg-card/70 px-4 py-3 text-sm text-muted"
                >
                  Almost there: check the inbox (and Spam) of {profile.email} for an email from FormSubmit and click Activate Form. Then send again. Meanwhile you can reach out directly via{' '}
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(values.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(values.message)}`}
                    className="text-primary hover:brightness-125"
                  >
                    email
                  </a>{' '}
                  instead.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, error, type = 'text', textarea = false }) {
  const id = `field-${label.toLowerCase()}`
  const Comp = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-muted mb-1.5">
        {label}
      </label>
      <Comp
        id={id}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg bg-surface border px-3.5 py-2.5 text-sm text-text placeholder:text-muted/60 focus-ring resize-none transition-colors ${
          error ? 'border-red-400/60' : 'border-border focus:border-primary/50'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
