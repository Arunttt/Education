<template>
    <div class="ola"style="background-color:#F5ECEA;">
 
 <br>
 <div class="atm">
 <div class="bh">
 <h1 class="he">Contact Us</h1>
 
 <br>
 <p class="bg">Education is about learning skills and knowledge.</p>
 </div>
 <div class="container">
 <div class="row">
 <div class="col-sm-4 col-md-4 col-lg-4">
  <div class="mm">
  <img src="../assets/lo.png"style="        margin: 23px 0px 29px 0px;
}">
  <p class="ji">Our Address</p>
  <p> Annai Therasa Street, Bethaniapuram,Madurai</p>
  </div>
  </div>
 <div class="col-sm-4 col-md-4 col-lg-4"style="    margin: 2px 0px 0px -52px;">
  <div class="flo"style="    ">
    <img src="../assets/me.png"style="    margin: 15px 0px 26px -32px;
    width: 32%;">
	<div >
	<h3 class="ho">Send Us an Email</h3><br>
	<p> example@emplae.com <br>demo@demo.com</p>
	</div>
  </div>
  </div>
    <div class="col-sm-4 col-md-4 col-lg-4">
  <div class="klo">
    <img src="../assets/ca.png">
	<br><br>
	<p class="ji">Call Us All Time</p>
	<p>+91 1234567897<br>+91 1234567897</p>
	
  </div>
  </div>
 </div>
 </div></div>
 <br><br>
<div class="container-fluid">
<div class="ay">
<br>
<h2 class="yu">Education</h2>
<p class="az">Education Development Center (EDC) is a global nonprofit organization to improve education, promote health.</p>
<h1 class="my">User Sign in</h1>

<br>
<div class="login">
  <div class="login-triangle"></div>

  <h2 class="login-header">Welcome to Users</h2>

  <form class="login-container">
    <p><input type="text" placeholder="Firstname"reqiured></p>
	<p><input type="email" placeholder="Email"reqiured></p>
    <p><input type="password" placeholder="Password"reqiured></p>
    <p><input type="submit" value="Log in"></p>
  </form>
</div>
</div></div><br>
 <div class="responsive-map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503045.8491897948!2d77.81533608546005!3d9.930152442899066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf6914288beb%3A0xa4589add82c551dc!2sKalavasal%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1668688869215!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>




  
	</div>
</template>

<style>




.yu{
text-align:center;
color:black;
font-family:serif;
}
.az{
color:black;
text-align:center;
}
.login {
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
}

/* Reset top and bottom margins from certain elements */
.login-header,
.login p {
  margin-top: 0;
  margin-bottom: 0;
}

/* The triangle form is achieved by a CSS hack */
.login-triangle {
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #28d;
}

.login-header {
  background: #28d;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.login-container {
  background: #ebebeb;
  padding: 12px;
}

/* Every row inside .login-container is defined with p tags */
.login p {
  padding: 12px;
}

.login input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login input[type="email"],
.login input[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login input[type="email"]:focus,
.login input[type="password"]:focus {
  border-color: #888;
}

.login input[type="submit"] {
  background: #28d;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
}

.login input[type="submit"]:hover {
  background: #17c;
}

/* Buttons' focus effect */
.login input[type="submit"]:focus {
  border-color: #05a;
}

.bg{
text-align:center;
}
.ho{
font-family:Serif;
    font-size: 21px;
    font-weight: 600;
	margin: 0px 0px 0px -33px;
}
.klo{
   float: right;
    margin: 83px 44px 0px 0px;
}
.flo{
float: right;
    margin: 66px 0px 0px 0px;
	}
.ji{
font-weight: 800;
    font-family: Serif;
	    font-size: 21px;
}

.hg{
font-weight:500;
color:white;
    font-family: Serif;
}
.down{
    margin: -13px 0px 0px 0px;     
    
}
.my{
font-family:Serif;
text-align:center;
color:black;
}
.form-text{
color:white;
font-family:Serif;
}
.form-label {
    font-family:Serif;
	}
h1{
font-family:Serif;
}
.ay{
    padding: 0px 0px 15px 0px;
    border-radius:19px;
    background-color: rgb(240, 240, 240);
    width: 99%;
    color: white;
	    text-shadow: 2px 2px white;
		background-size: cover;
    background-position: center;
    background-image: url(https://cutewallpaper.org/28/city-night-desktop-wallpaper/1474122581.jpg);
}
.responsive-map{
overflow: hidden;
padding-bottom:29.25%;
position:relative;
height:35px;
}
.responsive-map iframe{
left:0;
top:0;
height:101%;
width:100%;
position:absolute;
}

.atm{
    margin: 67px 0px 0px 0px;
}
.he{
color: black;
text-align:center;
background-image:url('http://protechtheme.com/edumart/images/inner-banner-bg.jpg');
font-family:Serif;
font-size:43px;
}
.mm{
       margin: 57px 0px 0px 66px;
}
.kk{
text-align: justify;
    background-color: blue;
    color: white;
    font-family: Serif;
    padding: 20px 28px 6px 28px;
    border-radius: 26px;
	    margin: 52px 66px 0px -83px;
}
.jh{
text-align: justify;
    background-color: blue;
    color: white;
    font-family: Serif;
    padding: 20px 28px 6px 28px;
    border-radius: 26px;
    margin: 20px 66px 0px -83px;
}



@media only screen and (max-width: 600px){
.ay{

}
}
@media only screen and (max-width: 600px){
.login{
width:277px;
}
}
</style>