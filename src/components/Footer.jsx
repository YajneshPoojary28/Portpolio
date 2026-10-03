import { Mail, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-display text-lg">
            <span className="text-primary">Y</span>AJNESH
          </p>
          <p className="mt-1.5 text-sm text-muted">Software developer · Cybersecurity enthusiast</p>
          <p className="mt-1 text-sm text-muted max-w-[40ch]">
            Building secure and meaningful software solutions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.trailhead}
            target="_blank"
            rel="noreferrer"
            aria-label="Salesforce Trailhead"
            className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-8 pt-6 border-t border-border/70 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted/70">
        <span>© 2026 Yajnesh Poojary</span>
        <span>Designed & built with React</span>
      </div>
    </footer>
  )
}
