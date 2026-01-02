# ICCT Campus Weather Checker

This repository contains a simple static weather checker UI for ICCT campuses. It uses wttr.in (free) to fetch weather data in JSON format and displays a modern, responsive weather card.

What changed

- Redesigned `index.html` with a campus select and a result card.
- Updated `style.css` to a modern responsive layout and improved styling.
- Rewrote `script.js` to fetch JSON from `wttr.in`, handle spinner, geolocation, localStorage (saves last query), and show friendly error messages.


Notes & troubleshooting

- The app fetches data from `https://wttr.in/<query>?format=j1`. No API key is required.
- If fetching fails, check your network or try a different query (sometimes very short queries get ambiguous results).
<!-- Geolocation note removed because the location feature was removed from the UI. -->


