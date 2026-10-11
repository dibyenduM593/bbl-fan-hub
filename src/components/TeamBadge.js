import React from 'react'

// The small coloured pill with the team code. Every card and row that
// shows a team uses this one component.
function TeamBadge({ team }) {
  return (
    <span className="badge" style={{ background: team.color, color: team.textColor }}>
      {team.short}
    </span>
  )
}

export default TeamBadge
