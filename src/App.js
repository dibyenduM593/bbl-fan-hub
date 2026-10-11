import React from 'react'
import Header from './components/Header.js'
import Tabs from './components/Tabs.js'
import TeamList from './components/TeamList.js'
import TeamDetails from './components/TeamDetails.js'
import PlayerSection from './components/PlayerSection.js'
import StandingsTable from './components/StandingsTable.js'
import MatchSection from './components/MatchSection.js'
import Footer from './components/Footer.js'
import { teams, players, standings, matches } from './data.js'

const TAB_NAMES = ['Teams', 'Players', 'Standings', 'Matches']

// App is a class component so the constructor and the life-cycle
// methods can be shown. It holds the current tab, the selected team
// and the filters, and passes data and functions down as props.
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tab: 'Teams',
      selectedTeam: null,
      playerTeam: 'all',
      playerRole: 'all',
      matchStatus: 'all'
    }

    this.changeTab = this.changeTab.bind(this)
    this.selectTeam = this.selectTeam.bind(this)
    this.openTeam = this.openTeam.bind(this)
    this.setPlayerTeam = this.setPlayerTeam.bind(this)
    this.setPlayerRole = this.setPlayerRole.bind(this)
    this.setMatchStatus = this.setMatchStatus.bind(this)
  }

  // Runs once after the first render: sets the page title.
  componentDidMount() {
    document.title = 'Big Bash League Fan Hub | ' + this.state.tab
  }

  // Runs after every update: changes the page title when the tab changes.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tab !== this.state.tab) {
      document.title = 'Big Bash League Fan Hub | ' + this.state.tab
    }
  }

  changeTab(tab) {
    this.setState({ tab: tab })
  }

  selectTeam(team) {
    this.setState({ selectedTeam: team })
  }

  // Used by the standings rows: jump to the Teams tab with that team open.
  openTeam(teamId) {
    const team = teams.find((t) => t.id === teamId)
    this.setState({ tab: 'Teams', selectedTeam: team })
  }

  setPlayerTeam(teamId) {
    this.setState({ playerTeam: teamId })
  }

  setPlayerRole(role) {
    this.setState({ playerRole: role })
  }

  setMatchStatus(status) {
    this.setState({ matchStatus: status })
  }

  renderSection() {
    const { tab, selectedTeam, playerTeam, playerRole, matchStatus } = this.state

    if (tab === 'Players') {
      return (
        <PlayerSection
          players={players}
          teams={teams}
          team={playerTeam}
          role={playerRole}
          onTeamChange={this.setPlayerTeam}
          onRoleChange={this.setPlayerRole}
        />
      )
    }

    if (tab === 'Standings') {
      return (
        <StandingsTable standings={standings} teams={teams} onOpenTeam={this.openTeam} />
      )
    }

    if (tab === 'Matches') {
      return (
        <MatchSection
          matches={matches}
          teams={teams}
          status={matchStatus}
          onStatusChange={this.setMatchStatus}
        />
      )
    }

    return (
      <div>
        <h2 className="section-title">BBL Franchises</h2>
        <TeamList teams={teams} selectedTeam={selectedTeam} onSelect={this.selectTeam} />
        {selectedTeam ? (
          <TeamDetails
            team={selectedTeam}
            players={players.filter((p) => p.team === selectedTeam.id)}
          />
        ) : (
          <div className="details-panel empty-panel">Select a franchise to see its details.</div>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        <Header teamCount={teams.length} />
        <Tabs tabs={TAB_NAMES} active={this.state.tab} onChange={this.changeTab} />
        <main className="content">{this.renderSection()}</main>
        <Footer />
      </div>
    )
  }
}

export default App
