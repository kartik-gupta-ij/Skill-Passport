# Lumi Skill Passport

A React app for the Lumi Network Skill Passport: course selector, skill scores (Augmented Intelligence, Durable Skills), certifications, and innovations.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Structure

- `src/LumiPassport.jsx` – main page and view state
- `src/constants.js` – courses, skills, sub-skills, asset URLs
- `src/components/` – UI pieces (CircleProgress, SkillCard, CertModal, etc.)
- `src/main.jsx` – React entry
- `index.html` – HTML shell and Poppins font
