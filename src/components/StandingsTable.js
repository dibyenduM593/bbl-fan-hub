import React from 'react'
import StandingsRow from './StandingsRow.js'

function StandingsTable({ standings, teams, onOpenTeam }) {
  return (
    <div>
      <h2 className="section-title">League Standings</h2>
      <p className="hint">Click a row to open that franchise.</p>

      <div className="table-wrap">
        <table className="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>NRR</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, index) => (
              <StandingsRow
                key={row.team}
                position={index + 1}
                row={row}
                team={teams.find((t) => t.id === row.team)}
                onOpenTeam={onOpenTeam}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StandingsTable
