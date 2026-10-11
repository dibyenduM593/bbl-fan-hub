import React from 'react'
import TeamCard from './TeamCard.js'

function TeamList({ teams, selectedTeam, onSelect }) {
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isActive={selectedTeam !== null && selectedTeam.id === team.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default TeamList
