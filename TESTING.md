# Release verification

Checked on October 23, 2026 (IST).

## Automated

- Production `vite build`: passed.
- `npm test`: 7 passing tests covering 19/12 optional-required activity counts, day isolation and undo, percentage calculation, IST midnight/date boundaries, valid and invalid backup data, streaks, and all 120 English exercises.
- npm dependency audit at installation: zero known vulnerabilities reported.

## Local browser checks

- Loaded the actual production build with Vite preview.
- Started, paused (24 seconds observed), resumed, and completed a focus timer. The saved task retained 0.4 practice minutes after refresh.
- Completed and undid a task; button state and percentage updated.
- Completed all 12 required Day 1 tasks. The day reached 100% and showed its celebration while personal tasks remained pending.
- Switched to Day 2 (independent incomplete state), then back to Day 1 (completed state preserved).
- Added a test job application and verified it remained after refresh.
- Entered confidence and journal text; both remained after refresh.
- Exported a real JSON backup, opened it through the import picker, checked the replacement confirmation, restored, and verified the journal after refresh.
- Canceled the reset dialog without losing data.
- Checked the dashboard at desktop width and 390px mobile width; fixed a closed-sidebar shadow and reduced decorative overlap on mobile.

## Notes

- Actual practice time is explicitly saved; elapsed timers do not complete activities automatically.
- Offline support is best-effort service-worker caching. A complete browser-offline simulation has not been performed.
- Browser speech synthesis depends on installed voices. Audio recording is intentionally handled by the learner’s own recorder.
- Production URL and live verification are recorded after deployment; local checks alone do not establish deployment success.
