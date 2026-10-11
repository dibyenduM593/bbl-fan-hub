import React from 'react'
import TeamBadge from './TeamBadge.js'

function TeamCard({ team, isActive, onSelect }) {
  return (
    <div
      className={'team-card' + (isActive ? ' active' : '')}
      style={{ borderTopColor: team.color }}
      onClick={() => onSelect(team)}
    >
      <TeamBadge team={team} />
      <h3>{team.name}</h3>
      <p>{team.venue}</p>
    </div>
  )
}

export default TeamCard
