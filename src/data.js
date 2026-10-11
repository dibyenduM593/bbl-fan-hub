// All the information shown in the app lives here as 4 plain arrays.
// The components only map over these arrays.

export const teams = [
  { id: 'ads', short: 'ADS', name: 'Adelaide Strikers', city: 'Adelaide', venue: 'Adelaide Oval', captain: 'Matt Short', titles: 2, color: '#0072ce', textColor: '#ffffff' },
  { id: 'bbh', short: 'BBH', name: 'Brisbane Heat', city: 'Brisbane', venue: 'The Gabba', captain: 'Usman Khawaja', titles: 2, color: '#00a19b', textColor: '#ffffff' },
  { id: 'hbh', short: 'HBH', name: 'Hobart Hurricanes', city: 'Hobart', venue: 'Bellerive Oval', captain: 'Matthew Wade', titles: 1, color: '#4b2e83', textColor: '#ffffff' },
  { id: 'mlr', short: 'MLR', name: 'Melbourne Renegades', city: 'Melbourne', venue: 'Marvel Stadium', captain: 'Will Sutherland', titles: 1, color: '#d9202a', textColor: '#ffffff' },
  { id: 'mls', short: 'MLS', name: 'Melbourne Stars', city: 'Melbourne', venue: 'Melbourne Cricket Ground', captain: 'Glenn Maxwell', titles: 0, color: '#3f8f3f', textColor: '#ffffff' },
  { id: 'prs', short: 'PRS', name: 'Perth Scorchers', city: 'Perth', venue: 'Optus Stadium', captain: 'Ashton Turner', titles: 5, color: '#f26a1b', textColor: '#ffffff' },
  { id: 'sys', short: 'SYS', name: 'Sydney Sixers', city: 'Sydney', venue: 'Sydney Cricket Ground', captain: 'Moises Henriques', titles: 3, color: '#e6007e', textColor: '#ffffff' },
  { id: 'syt', short: 'SYT', name: 'Sydney Thunder', city: 'Sydney', venue: 'Sydney Showground Stadium', captain: 'David Warner', titles: 1, color: '#b5d900', textColor: '#111111' }
]

export const players = [
  { id: 1, name: 'Matt Short', team: 'ads', role: 'Batter', matches: 12, runs: 410, wickets: 5, strikeRate: 148.2 },
  { id: 2, name: 'Travis Head', team: 'ads', role: 'Batter', matches: 10, runs: 385, wickets: 1, strikeRate: 162.4 },
  { id: 3, name: 'Rashid Khan', team: 'ads', role: 'Bowler', matches: 12, runs: 96, wickets: 18, strikeRate: 141 },
  { id: 4, name: 'Usman Khawaja', team: 'bbh', role: 'Batter', matches: 11, runs: 402, wickets: 0, strikeRate: 129.8 },
  { id: 5, name: 'Colin Munro', team: 'bbh', role: 'Batter', matches: 12, runs: 355, wickets: 0, strikeRate: 158.7 },
  { id: 6, name: 'Xavier Bartlett', team: 'bbh', role: 'Bowler', matches: 12, runs: 40, wickets: 21, strikeRate: 118 },
  { id: 7, name: 'Matthew Wade', team: 'hbh', role: 'Wicketkeeper', matches: 12, runs: 298, wickets: 0, strikeRate: 142.5 },
  { id: 8, name: 'Ben McDermott', team: 'hbh', role: 'Batter', matches: 12, runs: 331, wickets: 0, strikeRate: 139.1 },
  { id: 9, name: 'Nathan Ellis', team: 'hbh', role: 'Bowler', matches: 11, runs: 22, wickets: 17, strikeRate: 110 },
  { id: 10, name: 'Will Sutherland', team: 'mlr', role: 'All-rounder', matches: 12, runs: 245, wickets: 14, strikeRate: 147.3 },
  { id: 11, name: 'Tim Seifert', team: 'mlr', role: 'Wicketkeeper', matches: 11, runs: 312, wickets: 0, strikeRate: 151.6 },
  { id: 12, name: 'Jake Fraser-McGurk', team: 'mlr', role: 'Batter', matches: 9, runs: 270, wickets: 0, strikeRate: 171.2 },
  { id: 13, name: 'Glenn Maxwell', team: 'mls', role: 'All-rounder', matches: 11, runs: 365, wickets: 9, strikeRate: 168.9 },
  { id: 14, name: 'Marcus Stoinis', team: 'mls', role: 'All-rounder', matches: 12, runs: 340, wickets: 11, strikeRate: 149.4 },
  { id: 15, name: 'Adam Zampa', team: 'mls', role: 'Bowler', matches: 12, runs: 31, wickets: 19, strikeRate: 105 },
  { id: 16, name: 'Ashton Turner', team: 'prs', role: 'Batter', matches: 12, runs: 372, wickets: 0, strikeRate: 152 },
  { id: 17, name: 'Aaron Hardie', team: 'prs', role: 'All-rounder', matches: 12, runs: 280, wickets: 15, strikeRate: 146.8 },
  { id: 18, name: 'Jhye Richardson', team: 'prs', role: 'Bowler', matches: 10, runs: 18, wickets: 16, strikeRate: 100 },
  { id: 19, name: 'Steve Smith', team: 'sys', role: 'Batter', matches: 12, runs: 428, wickets: 0, strikeRate: 138.5 },
  { id: 20, name: 'Moises Henriques', team: 'sys', role: 'All-rounder', matches: 12, runs: 290, wickets: 10, strikeRate: 134.2 },
  { id: 21, name: 'Sean Abbott', team: 'sys', role: 'Bowler', matches: 12, runs: 64, wickets: 22, strikeRate: 132 },
  { id: 22, name: 'David Warner', team: 'syt', role: 'Batter', matches: 12, runs: 440, wickets: 0, strikeRate: 143.6 },
  { id: 23, name: 'Chris Green', team: 'syt', role: 'Bowler', matches: 12, runs: 120, wickets: 16, strikeRate: 125 },
  { id: 24, name: 'Sam Billings', team: 'syt', role: 'Wicketkeeper', matches: 11, runs: 301, wickets: 0, strikeRate: 140.3 }
]

// Already in table order (position 1 is the first row).
export const standings = [
  { team: 'sys', played: 10, won: 7, lost: 3, nrr: 0.85, points: 14 },
  { team: 'prs', played: 10, won: 7, lost: 3, nrr: 0.6, points: 14 },
  { team: 'bbh', played: 10, won: 6, lost: 4, nrr: 0.3, points: 12 },
  { team: 'ads', played: 10, won: 5, lost: 5, nrr: 0.1, points: 10 },
  { team: 'mls', played: 10, won: 5, lost: 5, nrr: -0.05, points: 10 },
  { team: 'syt', played: 10, won: 4, lost: 6, nrr: -0.25, points: 8 },
  { team: 'hbh', played: 10, won: 3, lost: 7, nrr: -0.65, points: 6 },
  { team: 'mlr', played: 10, won: 3, lost: 7, nrr: -0.9, points: 6 }
]

export const matches = [
  { id: 1, date: '16 Dec', status: 'Completed', home: 'prs', away: 'sys', result: 'Perth Scorchers won by 18 runs', venue: 'Optus Stadium' },
  { id: 2, date: '18 Dec', status: 'Completed', home: 'bbh', away: 'ads', result: 'Brisbane Heat won by 6 wickets', venue: 'The Gabba' },
  { id: 3, date: '20 Dec', status: 'Completed', home: 'mls', away: 'mlr', result: 'Melbourne Stars won by 4 wickets', venue: 'Melbourne Cricket Ground' },
  { id: 4, date: '22 Dec', status: 'Completed', home: 'syt', away: 'hbh', result: 'Sydney Thunder won by 22 runs', venue: 'Sydney Showground Stadium' },
  { id: 5, date: '26 Dec', status: 'Completed', home: 'sys', away: 'bbh', result: 'Sydney Sixers won by 7 wickets', venue: 'Sydney Cricket Ground' },
  { id: 6, date: '28 Dec', status: 'Completed', home: 'ads', away: 'prs', result: 'Adelaide Strikers won by 3 runs', venue: 'Adelaide Oval' },
  { id: 7, date: '2 Jan', status: 'Upcoming', home: 'mlr', away: 'syt', result: 'Match yet to be played', venue: 'Marvel Stadium' },
  { id: 8, date: '4 Jan', status: 'Upcoming', home: 'hbh', away: 'mls', result: 'Match yet to be played', venue: 'Bellerive Oval' }
]
