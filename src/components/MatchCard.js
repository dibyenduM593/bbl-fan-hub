import React from 'react'
import TeamBadge from './TeamBadge.js'

function MatchCard({ match, home, away }) {
  return (
    <div className="match-card">
      <p className="match-date">
        {match.date} | {match.status}
      </p>
      <div className="match-teams">
        <TeamBadge team={home} />
        <span className="vs">vs</span>
        <TeamBadge team={away} />
      </div>
      <p className="match-result">{match.result}</p>
      <p className="match-venue">Venue: {match.venue}</p>
    </div>
  )
}

export default MatchCard
