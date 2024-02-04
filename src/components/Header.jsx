import React from 'react'

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="tittle"><a href="/">Where In The World ?</a></h2>
        <p className="theme-changer">
          <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
  )
}
