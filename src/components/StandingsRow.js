import React from 'react'
import TeamBadge from './TeamBadge.js'

function StandingsRow({ position, row, team, onOpenTeam }) {
  return (
    <tr className="standings-row" onClick={() => onOpenTeam(team.id)}>
      <td>{position}</td>
      <td>
        <TeamBadge team={team} /> {team.name}
      </td>
      <td>{row.played}</td>
      <td>{row.won}</td>
      <td>{row.lost}</td>
      <td>{row.nrr}</td>
      <td>{row.points}</td>
    </tr>
  )
}

export default StandingsRow
