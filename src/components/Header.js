import React from 'react'

function Header({ teamCount }) {
  return (
    <header className="header">
      <div className="logo">BBL</div>
      <div>
        <h1>Big Bash League Fan Hub</h1>
        <p>Australia's T20 cricket league, {teamCount} franchises</p>
      </div>
    </header>
  )
}

export default Header
