import React from 'react'
import "./home.css"
// import Loginform from './Signin/Loginform.js'
// import {Link} from "react-router-dom"
function Home() {
  return (
    <div className="parent">
<div class="landing-page">
  <div class="contain">
    <div class="header-area">
      <div class="logo">
      <p>JOB READY</p>
      </div>
      <ul class="links">
        {/* <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Info</li> */}
        <buton>
        <li><a href="/hireme">Hire Developer</a></li>
        </buton>
      </ul>
    </div>
    <div class="info">
      <h1>EVERYTHING YOU NEED TO SUCCEED IN TECH JOB INTERVIEWS!</h1>
      <p>Excel in job interviews. your professional guide to preparing for and succeeding in your job search and interview. Easy-to-use and practical resources for all job seekers.</p>
      
        <button><a href="/registration">REGISTRATION</a></button>
        <button><a href="/login">LOGIN</a></button>
    
    </div>
    <div class="image">
    <img src="https://media.istockphoto.com/photos/africanamerican-man-browsing-work-online-using-job-search-computer-picture-id918365088?k=20&m=918365088&s=612x612&w=0&h=KUojGu6HCCFUi7HiYRkaaQ0iIOFd724sLwwmGyYam_E=" alt=''></img> 
    </div>
    <div class="clearfix"></div>
  </div>
</div>
    </div>
  )
}
export default Home;