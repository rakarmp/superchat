import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Super Chat</span>
      <span className="user">
        <img src='https://avatars.githubusercontent.com/u/83684256?v=4' alt=''/>
        <span>John</span>
        <button>Logout</button>
      </span>
    </div>
  )
}

export default Navbar