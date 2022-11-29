<template>

<div class="wid">


 <div class="type">
<div >

<div class="container-fluid">
  <div class="row">
<div class="bd"><br><br>
<h1 class="mainhead">Education Online</h1>
<!--<img src="../assets/e.png"alt="123"style="    width: 13%;
   ">--><br><br>
   <p>Education Development Center (EDC) is a global nonprofit organization to improve education,<br> promote health, and expand economic opportunity across the United States and in more than 80 other countries.</p>  
   <br><br><br>
   
   <button type="button" class="btn btn-primary"style="    width: 6%;
    height: 6%;">Java</button>&nbsp;
<button type="button" class="btn btn-secondary"style="    width: 6%;
    height: 6%;">HTML</button>&nbsp;
<button type="button" class="btn btn-success"style="    width: 6%;
    height: 6%;">Css</button>&nbsp;
<button type="button" class="btn btn-danger"style="    width: 6%;
    height: 6%;">Javascript</button>&nbsp;
<button type="button" class="btn btn-warning"style="    width: 6%;
    height: 6%;">Bootstrap</button>
   
</div>  
     </div>
</div>
<br><br>

<br>
<div class="container">
<div class="row">
<div class="col-lg-4 col-sm-4 col-lg-6">
<div class="hq"> 
<img src="https://kashmirthunder.com/wp-content/uploads/2020/04/574f1ac03ab14.jpg"alt="smiley"id="jj">
</div>
</div>
<div class="col-lg-4 col-sm-4 col-lg-6">
<div class="hq"> 
<p class="pea">Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits. These aims may include the development of understanding, rationality, kindness, and honesty. Various researchers emphasize the role of critical thinking in order to distinguish education from indoctrination.</p>
</div>
</div>

</div>
</div><br>
<hr class="hr-1">
<!-- Topic Cards -->
<div id="cards_landscape_wrap-2">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href="">
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg" alt="" />
              </div>
              <div class="text-container">
                <h6>HTML</h6>
                <p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href="">
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img src="https://blog.logrocket.com/wp-content/uploads/2022/08/new-css-style-queries.png" alt="" />
              </div>
              <div class="text-container">
                <h6>Css</h6>
                <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML  </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href="">
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>

              <div class="text-container">
                <h6>Bootstrap</h6>
                <p>Bootstrap is a free and open-source CSS framework directed at responsive, front-end web development.Bootstrap is an HTML, CSS and JS Library that.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href="">
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img src="https://t4.ftcdn.net/jpg/02/66/76/83/360_F_266768305_jxxjP3ivAYLHxbOejYQ4095SvaGfTjc3.jpg" alt="" />
              </div>
              <div class="text-container">
                <h6>Javascript</h6>
                <p>JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>


<!--<div class="container">
<div class="row">
<div class="col-lg-4 col-sm-4 col-lg-6">
<div class="hl"> 
     <h3>Educational Organisation</h3>
	 <p class="edu">Bring Real Life Into Learning With Better World Educational Resources. Wordless Videos And Better World Stories To Humanize Learning. Empathy to Love Learning. Real World Academics. Courses: Social Emotional Skills, Global Literacy, Empathy.</p><br>
	 <button type="button" class="btn btn-info">Read More</button>
</div>
</div>
    <div class="col-lg-4 col-sm-4 col-lg-6">
	<div class="kl">
 <img src="https://freepngimg.com/thumb/categories/1463.png"style="width:80%"> 
    </div>
     </div>
	 </div></div>-->
</div></div>

<!--<div class="fire">
<h1 class="klu">Gallery</h1>
<div class="container-fluid">
<div class="row">
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg"class="ft"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"class="lu"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://m.economictimes.com/thumb/msid-88607879,width-1200,height-900,resizemode-4,imgsize-55812/education.jpg"class="pp"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://www.thebarefootnomad.com/wp-content/uploads/2019/09/Teachers-apple-and-books-DP.jpg"class="nn"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://livingonthecheap.com/lotc-cms/wp-content/uploads/2013/03/graduation-cap-books-dp.jpg"class="zc"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_960_720.jpg"class="aq"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://i.pinimg.com/736x/a0/50/74/a05074a3711578719b47a1028524906d.jpg"class="gj"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://img.lovepik.com/photo/50061/1180.jpg_wh860.jpg"class="aq"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://previews.123rf.com/images/maxkabakov/maxkabakov1510/maxkabakov151005351/47012694-learning-concept-pixelated-book-icon-on-digital-background-empty-copyspace-for-card-text-advertising.jpg"class="aq"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://static.vecteezy.com/system/resources/thumbnails/000/697/562/small/human-brain-intelligence-abstract-blue-design.jpg"class="aq"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://e0.pxfuel.com/wallpapers/202/991/desktop-wallpaper-study-books-class-library-school-globe-knowledge-education-for-section-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%86%D0%B8%D0%B8-thumbnail.jpg"class="aq"alt="1234">
</div>
<div class="col-sm-4 col-md-4 col-lg-3">
<img src="https://thumbs.dreamstime.com/b/e-learning-education-internet-technology-webinar-online-courses-concept-e-learning-education-internet-technology-webinar-online-106245239.jpg"class="aq"alt="1234">
</div>
</div>
</div>
</div>-->
  <br>
  <div class="container-fluid">
 <div>
        <iframe width="1300" height="435" src="https://www.youtube.com/embed/QeogOIzG2Is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
</div>

</template>
<script>

</script>
<style scoped>
.mainhead{
    font-size: 75px;
    text-shadow: 3px 0px red;
    font-style: italic;
}
.wid{

}

@media only screen and (max-width: 600px) {
.wid{
width:99%;
}
}
@media only screen and (max-width: 600px) {
.menu-items{
      height:141px;
      flex-flow: wrap;
}
}


.fire{
background-color:black;
}
.gj{
border-radius:0px;
    margin: 20px 0px 0px 0px;
	height:93%;
}
.aq{
height:93%;
border-radius:0px;
    margin: 20px 0px 0px 0px;
}
.nn{
border-radius:0px;
height:100%;
}
.zc{
height:93%;
border-radius:0px;
    margin: 20px 0px 0px 0px;
}
.lu{
border-radius:0px;
}
.pp{
border-radius:0px;
}
.ft{
height: 100%;
border-radius:0px;
}
.op{
height: 61%;
    border-radius: 0px;
}
.rh{
height: 61%;
    border-radius: 0px;
}
.hr{
    height: 61%;
    border-radius: 0px;
}
.bd{
    margin-top: 20px;
background-image:url('https://www.uncsa.edu/admissions/img/banners/apply-now.jpg');
height: 600px;
    
	text-align:center;
	font-family:serif;
	color:white;
	padding-top:3%;
}
html {
  background-image: linear-gradient(#eee, #aaa);
  height: 100%;
}

img {
  
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
  max-height: 100%;
  max-width: 100%;
}

.frame {
border-radius:40px;
background-image:url('https://media.istockphoto.com/photos/elearning-for-student-and-university-concept-picture-id1177184973?b=1&k=20&m=1177184973&s=170667a&w=0&h=QDZurMcn7mPB3FkNx553CwLjFccVZqUAGuq9K0yRfiU=');
  width:104%;
  background-color: #ddc;
  //border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
 // margin: 10vh 10vw;
  //height: 80vh;
  //padding: 8vmin;
  position: relative;
  text-align: center;
  &:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
}

@media only screen and (max-width: 600px){
#jj{
width:100%;
}
.hl h3{
font-size:24px;
}
.hl .edu{
margin:0px 0px 0px 0px;
} 
}
.btn btn-info{
float:right;
}
.kl{
        margin: -65px 0px 0px 126px;
}   
.hl h3{
    color:white;
	    text-shadow: 2px 2px red;
     font-family: serif;    margin: 18px 0px 0px 56px;
}
.hl .edu{
    margin: 39px 0px 0px 104px;
    text-align: justify;
	font-weight:500;
	    font-family: serif;
}
.clr{
color:white;
    font-family: serif;
}
.down{
    margin: -13px 0px 0px 0px;     
    
}
.hj{
display:flex;
margin-left: 30%;
}
.hg{
font-weight:500;
color:white;
    font-family: serif;
}
body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
      font-family: serif;
}
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
  left: 0;
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

.pea{
color:black;
text-align:center;
padding: 119px 0px 0px 0px;
font-weight: 500;
    font-family: serif;
}
img{
border-radius: 55px;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.html {
  font-size: 62.5%;
}




body{
  
}
.type{
background-color:antiquewhite;
}
div{
//border-radius:40px;
    background-color: #F5ECEA;

}
#hed{
text-align:center;
color:wheat;
    font-family: cursive;
 text-shadow: 2px 2px red;
}
#first{
    font-family: cursive;
color:black;
border:double;
}
#second{
    font-family: cursive;
color:black;
border:double;
}
#third{
    font-family: cursive;
color:black;
border:double;
}
logo{
 font: 15px Arial, sans-serif;
 }

.klu{
font-family: serif;
text-align:center;	
background-image:url('http://protechtheme.com/edumart/images/inner-banner-bg.jpg');
}  
.eg{
    color: white;
    background-color: black;
    text-align: center;
}
.footer {
    background: linear-gradient(45deg, #503aca 53%, #ea34ff 53%);
  background-color: #179bd7;
  padding: 52px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
    font-family: Serif;
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
  left: 106px;
  bottom: -16px;
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
    display: inline-table;
  
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
/*----  Main Style  ----*/
#cards_landscape_wrap-2 {
  text-align: center;
  background: #f7f7f7;
  background-image:url('https://t4.ftcdn.net/jpg/03/22/38/65/360_F_322386576_QDruDTX3Uw0S5gPALUzPMdmWFq8laY8q.jpg');
   background-size: cover;
    background-position: center;
    background-clip: text;
}
#cards_landscape_wrap-2 .container {
  padding-top: 80px;
  padding-bottom: 100px;
}
#cards_landscape_wrap-2 a {
  text-decoration: none;
  outline: none;
}
#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box img {
  -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
  width: 100%;
  height: 200px;
}
#cards_landscape_wrap-2 .card-flyer:hover .image-box img {
  opacity: 0.7;
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
  transform: scale(1.15);
}
#cards_landscape_wrap-2 .card-flyer .text-box {
  text-align: center;
  width:97%;
}
#cards_landscape_wrap-2 .card-flyer .text-box .text-container {
  padding: 30px 18px;
}
#cards_landscape_wrap-2 .card-flyer {
  background: #ffffff;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
}
#cards_landscape_wrap-2 .card-flyer:hover {
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}
#cards_landscape_wrap-2 .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000000;
}
#cards_landscape_wrap-2 .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Black", sans-serif;
  letter-spacing: 1px;
  color: #00acc1;
}
hr.hr-1 {
  border: 0;
  height: 1px;
      background-image: linear-gradient( to right, rgba(0, 0, 0, 0), rgba(15, 5, 18, 29.75), rgba(0, 0, 0, 0) );
}
@media only screen and (max-width: 600px) {
iframe{
    width: 98%;
    height: 0%;
}
}
</style>