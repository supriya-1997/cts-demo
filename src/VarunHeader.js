import React from 'react'

const VarunHeader=()=> {
    return (
        <>
           <nav class="navbar navbar-gary">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span> <a class="navbar-brand" href="#top">BatchMates</a>
          <input class="w-75" type="text" placeholder="Search"></input></span>


      </div>

      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#top">FOOD</a></li>
          <li><a href="#top">DRINKS</a></li>
          <li><a href="#top">FRESH</a></li>
          <li><a href="#top">ESSENTIALS</a></li>
          <li><a href="#top">CONVENIENCE</a></li>
          <li><a href="#top">Log In</a></li>
          <li><a href="#top"> Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav> 
        </>
    )
}

export default VarunHeader
