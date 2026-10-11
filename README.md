# Big Bash League Fan Hub

A ReactJS Single Page Application (SPA) built for BCSE203E Web Programming,
Assignment 8. It lets fans explore the Big Bash League (BBL): franchises,
players, league standings and matches, all on one page without any page
reloads. All data is sample data for academic demonstration only.

## Tech / Concepts used
- ReactJS (Vite setup)
- JSX
- Class components with a **constructor** and life-cycle methods
  (`App`: `componentDidMount`, `componentDidUpdate`; `TeamDetails`:
  `componentDidUpdate`)
- Reusable components (`TeamBadge`, `TeamCard`, `PlayerCard`,
  `StandingsRow`, `MatchCard`, `StatBox`)
- Props + state for selection and filtering

## Run it
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Project structure
```
assignment8-bbl-fan-hub/
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── MatchCard.js
│   │   ├── MatchSection.js
│   │   ├── PlayerCard.js
│   │   ├── PlayerSection.js
│   │   ├── StandingsRow.js
│   │   ├── StandingsTable.js
│   │   ├── StatBox.js
│   │   ├── Tabs.js
│   │   ├── TeamBadge.js
│   │   ├── TeamCard.js
│   │   ├── TeamDetails.js
│   │   └── TeamList.js
│   ├── App.js
│   ├── data.js
│   ├── main.js
│   └── style.css
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js
```
