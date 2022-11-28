<template>
<div>
<footer class="footer">
    <div class="container">
      <div class="row">
	  
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li><br>
            <li><router-link to="/about">About</router-link></li><br>
            <li><router-link to="/apply">Apply</router-link></li><br>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
       <div class="col-lg-6"> 
        
          <h4 class="clr">Get Help</h4><br>
           <div class="hg" style="    color: white;
    font-family: serif;">
		   <p>Education Development Center (EDC) is a global nonprofit organization to improve education, promote health, and expand economic opportunity across the United States and in more than 80 other countries.</p>
		   </div>
        
		</div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
          <!--  <a href="https://www.facebook.com/"><font-awesome-icon icon="fa-brands fa-facebook" /></a>-->
            <a href="https://twitter.com/"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
		 <a href="#" <img src="../assets/down.png"alt="123"style="    width: 42%;
   "></a>
        </div>
      </div>
	  
    </div>
	
  </footer>
  <div class="eg">
  <p>Copyright © Your Website 2022</p>
	</div>
  </div>
  </template>
  <style>
  .footer {
  background-color: #179bd7;
  padding: 70px 0;
  
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
    font-family: serif;
  font-size: 18px;
  color: white;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 800;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 107px;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a :hover{

}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  color: antiquewhit;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: red;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: black;
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #ffffff;
  background-color:blue;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
.footer {
    background: linear-gradient(45deg, #503aca 53%, #ea34ff 53%);
  background-color: #179bd7;
  padding: 52px 0;
  
}
.clr{
    font-family: serif;
	color:white;
}
.eg{
    color: white;
    background-color: black;
    text-align: center;
	margin:0px 0px 0px 0px;
}

  </style>