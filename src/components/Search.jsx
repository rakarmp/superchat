import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Cari Pengguna'/>
      </div>
      <div className="userChat">
        <img src='https://avatars.githubusercontent.com/u/83684256?v=4' alt=''/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search