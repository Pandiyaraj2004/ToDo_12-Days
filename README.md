# SpeakUp — My 12-Day English Challenge

A personal, responsive English speaking workspace for **October 25–November 5, 2026**, with a **November 6 final review**. Built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and Recharts. No backend, account, API key, subscription, or database is required.

## Features

- A dashboard with real completion statistics, English practice hours, coding and job-search sessions, current/longest streaks, and a 12-day timeline.
- 19 scheduled activities per day. Only the 10 English activities, one Python session, and one job-search session count toward daily completion; rest and personal activities are optional.
- A different speaking topic each day, with 120 English exercises containing specific prompts, practical examples, and measurable goals.
- Complete/undo controls, personal task notes, completion timestamps, independent daily progress, and access to past or future days.
- Focus mode with start, pause, resume, manually saved duration, manual minute logging, and explicit task completion. Scheduled hours are never treated as actual practice.
- Browser text-to-speech examples where supported. Voice-recording practice uses the learner’s own phone/computer recorder; the app does not request a microphone or upload audio.
- 12 Python problems with sample inputs/outputs and optional hints.
- Application tracking: company, role, link, date, status, notes, edit, and delete confirmation.
- Daily speaking logs, confidence ratings, conversations, speaking duration without notes, journals, and practice/confidence charts.
- Day-completion celebrations, milestones, and a certificate unlocked after all required tasks on all 12 days are complete.
- Live final review, reflection, and browser printing to paper or PDF.
- Light/dark appearance, responsive layouts, keyboard focus indicators, reduced-motion support, and modal focus management.
- LocalStorage persistence, validated JSON backups, import confirmation, and reset confirmation.
- A service worker caches same-origin pages/assets after use for best-effort offline access. Visit/reload once online after installation before relying on offline mode.

## Run locally

Use Node.js 22.12+ or Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build:

```sh
npm test
npm run build
npm run preview
```

## Deployment

Import `Pandiyaraj2004/ToDo_12-Days` into Vercel. Select the Vite preset, `npm run build` as the build command, and `dist` as the output directory. Deploy the `main` branch to production. `vercel.json` includes an SPA fallback for direct navigation and refresh of routes such as `/progress` and `/tasks`. No environment variables are needed. Use the free Hobby plan; no paid resources are required.

## Data and privacy

Progress lives under `speakup-v1` in LocalStorage on the current browser and origin. It survives normal refreshes and browser restarts, but clearing site data, private browsing, changing domains, or using a different device can make it unavailable. Export JSON backups regularly. Importing replaces existing progress only after confirmation. Progress does not synchronize between devices or deployment domains. The app warns if a storage write fails, and pauses saving if stored data is malformed.

Challenge dates and completion timestamps are displayed in Asia/Kolkata. Activity completion is always a deliberate user action; the clock never completes tasks or resets progress at midnight. A timer session must be saved or completed before leaving focus mode. Closing an unsaved active session asks for confirmation.

## Structure

```text
src/data.js        Curriculum, schedule, date/progress logic, backup validation
src/main.jsx      Reusable UI components and browser-local application state
src/styles.css    Responsive design, themes, accessibility and print styles
public/sw.js      Best-effort offline caching
tests/            Date, progress, backup, streak and curriculum tests
vercel.json       Production build and SPA route configuration
```

## Validation

`npm test` exercises required/optional task counting, undo and day isolation, IST boundaries, backup round-trip and invalid input rejection, streak calculations, and completeness of English exercises. Browser QA additionally checks completion, focus timing, refresh persistence, date switching, navigation, job tracking, and responsive rendering. See `TESTING.md` for recorded release checks and limitations.
