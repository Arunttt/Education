<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="down">
      <img src="../assets/down.png"alt="123"class="bye"style="    width: 26%;
	">
	  </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <ul class="menu-items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/apply">Apply</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>&nbsp;&nbsp;&nbsp;
		
      </ul>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      
    </b-collapse>
  </b-navbar>
</div>
 </template>
 <style>
.menu-items{
margin-left: 213%;
    display: flex;
    
    font-size: 20px;
} 
@media only screen and (max-width: 600px) {
.menu-items{
margin-left:15%;
}
} 
 </style>