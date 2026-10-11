import React from 'react'
import StatBox from './StatBox.js'
import PlayerCard from './PlayerCard.js'

// Shows the selected franchise. It is a class component so it can keep
// its own count of how many times the shown team was changed.
class TeamDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: 0 }
  }

  // Runs after every update: counts a new franchise being opened.
  componentDidUpdate(prevProps) {
    if (prevProps.team.id !== this.props.team.id) {
      this.setState((state) => ({ opened: state.opened + 1 }))
    }
  }

  render() {
    const { team, players } = this.props

    return (
      <div className="details-panel">
        <h2>{team.name}</h2>
        <p className="details-line">
          Home city: {team.city} | Home venue: {team.venue}
        </p>

        <div className="stat-row">
          <StatBox value={team.titles} label="BBL Titles" />
          <StatBox value={team.captain} label="Captain" />
          <StatBox value={players.length} label="Players Listed" />
        </div>

        <h3 className="sub-title">Selected Players</h3>
        <div className="detail-players">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} team={team} />
          ))}
        </div>

        <p className="opened-note">Franchises opened: {this.state.opened}</p>
      </div>
    )
  }
}

export default TeamDetails
