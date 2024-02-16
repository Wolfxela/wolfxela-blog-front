import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  return (
    <>
   <div className="mainBody">
        <div className="postDetails">

        </div>
        <div className="comments"></div>
      </div>
      <div className="posts">
        <div className="newPosts"></div>
        <div className="bestPosts"></div>
        <div className="credits"></div>
      </div>
    </>
  )
}

export default App
