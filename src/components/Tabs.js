import React from 'react'

function Tabs({ tabs, active, onChange }) {
  return (
    <nav className="tabs">
      {tabs.map((name) => (
        <button
          key={name}
          className={'tab' + (name === active ? ' active' : '')}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </nav>
  )
}

export default Tabs
