import React from 'react'
import StatBox from './StatBox.js'
import PlayerCard from './PlayerCard.js'

const ROLES = ['all', 'Batter', 'Bowler', 'All-rounder', 'Wicketkeeper']

function PlayerSection({ players, teams, team, role, onTeamChange, onRoleChange }) {
  const shown = players.filter(
    (p) => (team === 'all' || p.team === team) && (role === 'all' || p.role === role)
  )

  // Best run scorer and best wicket taker among the players shown.
  let topRuns = null
  let topWickets = null
  shown.forEach((p) => {
    if (topRuns === null || p.runs > topRuns.runs) topRuns = p
    if (topWickets === null || p.wickets > topWickets.wickets) topWickets = p
  })

  return (
    <div>
      <h2 className="section-title">Players</h2>

      <div className="filter-bar">
        <select value={team} onChange={(e) => onTeamChange(e.target.value)}>
          <option value="all">All teams</option>
          {teams.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        {ROLES.map((r) => (
          <button
            key={r}
            className={'filter-btn' + (r === role ? ' active' : '')}
            onClick={() => onRoleChange(r)}
          >
            {r === 'all' ? 'All roles' : r}
          </button>
        ))}
      </div>

      <div className="stat-row">
        <StatBox value={shown.length} label="Players Shown" />
        <StatBox
          value={topRuns ? topRuns.runs : '-'}
          label={'Most Runs: ' + (topRuns ? topRuns.name : 'none')}
        />
        <StatBox
          value={topWickets ? topWickets.wickets : '-'}
          label={'Most Wickets: ' + (topWickets ? topWickets.name : 'none')}
        />
      </div>

      <div className="player-grid">
        {shown.map((p) => (
          <PlayerCard key={p.id} player={p} team={teams.find((t) => t.id === p.team)} />
        ))}
      </div>
    </div>
  )
}

export default PlayerSection
