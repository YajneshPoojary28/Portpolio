# Yajnesh Poojary — Portfolio

A premium, dark cybersecurity-themed developer portfolio built with React, Vite, Bootstrap 5 (layout grid only, via src/bootstrap-lite.scss), Tailwind CSS (theme utilities), and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Adding your resume

The "Download Resume" button links to `/public/Yajnesh_Poojary_Resume.pdf`.
Place your actual resume PDF at:

```
public/Yajnesh_Poojary_Resume.pdf
```

The button will not work until this file is added — no placeholder resume is included.

## Project structure

```
src/
├── components/   # All UI sections and shared widgets
├── data/         # Content: profile links, skills, projects, certifications
├── App.jsx
├── main.jsx
└── index.css     # Design tokens (colors, fonts) and global styles
```

## Contact form — sending messages to your email

The form posts to [FormSubmit](https://formsubmit.co) and delivers every
message to the email in `src/data/profile.js` (yajneshpoojary29@gmail.com).
No account, server, or API key is needed.

**One-time activation:** the first time anyone submits the form (do it yourself
after deploying), FormSubmit sends an activation email to that inbox. Open it
(check Spam too) and click **Activate Form**. After that, all messages arrive
normally. If the form shows an error, a `mailto:` fallback link is offered.

## Notes on content

Project GitHub links point to the general profile
(`github.com/YajneshPoojary28`) since individual repository URLs were not
provided. Update `src/data/projects.js` with direct repo links once available.
Certification credential links are omitted for the same reason — add them in
`src/data/certifications.js` as they become available.
