import React from 'react'
import MatchCard from './MatchCard.js'

const FILTERS = [
  { value: 'all', label: 'All matches' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Upcoming', label: 'Upcoming' }
]

function MatchSection({ matches, teams, status, onStatusChange }) {
  const shown = matches.filter((m) => status === 'all' || m.status === status)

  return (
    <div>
      <h2 className="section-title">Matches</h2>

      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={'filter-btn' + (f.value === status ? ' active' : '')}
            onClick={() => onStatusChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="match-grid">
        {shown.map((m) => (
          <MatchCard
            key={m.id}
            match={m}
            home={teams.find((t) => t.id === m.home)}
            away={teams.find((t) => t.id === m.away)}
          />
        ))}
      </div>
    </div>
  )
}

export default MatchSection
