import React from 'react'
import TeamBadge from './TeamBadge.js'

function PlayerCard({ player, team }) {
  return (
    <div className="player-card" style={{ borderTopColor: team.color }}>
      <TeamBadge team={team} />
      <h3>{player.name}</h3>
      <p>{player.role}</p>
      <p>
        Matches: {player.matches} | Runs: {player.runs}
      </p>
      <p>
        Wickets: {player.wickets} | Strike Rate: {player.strikeRate}
      </p>
    </div>
  )
}

export default PlayerCard
