<template>
<div style="padding: 20px 0px 0px 0px;background-image: linear-gradient( to left bottom, rgba(54, 10, 136, 0.8), rgba(139, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1497892597262-2983614aa886?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2051e3b8338218a0f163b9a6ab48bb84&auto=format&fit=crop&w=1350&q=80);">
<h1 class="klu">Apply</h1>
<p class="deep">A course usually covers an individual subject.<br> Courses generally have a fixed program of sessions every week during the term, called lessons or classes.</p>
<br>

<div class="container">
      <header class="header">
        <h1 id="title" class="text-center"></h1>
        <p id="description" class="description text-center">
          
        </p>
      </header>
      <form id="survey-form">
	  <div class="inc">
        <div class="form-group">
          <label id="name-label" for="name">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required="">
        </div><br>
		<div class="form-group">
          <label id="name-label" for="name">Address</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Enter your Address" required="">
        </div><br>
		<div class="form-group">
          <label id="name-label" for="name">Phonenumber</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Enter your Phonenumber" required="">
        </div><br>
		<div class="form-group">
          <label id="name-label" for="number">DOB</label>
          <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Date Of Birth">
        </div><br>
		<div class="form-group">
          <label id="name-label" for="number">Age</label>
          <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Age">
        </div><br>
        <div class="form-group">
          <label id="name-label" for="email">Email</label>
          <input type="email" name="email" id="email" class="form-control" placeholder="Enter your Email" required="">
        </div><br>
        
        <div class="form-group">
          <p class="hod">Select Your Courses?</p>
          <select id="dropdown" name="role" class="form-control" required="">
            <option disabled="" selected="" value="">Select Courses</option>
            <option value="HTML">HTML</option>
            <option value="Css">Css</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="Javascript">Javascript</option>
            <option value="Java">Java</option>
          </select>
        </div>
        
        <br>
        <div class="group">
          <p class="gun">
            What would you like from a Courses?
          </p>
          <label><input name="prefer" value="history" type="checkbox" class="input-checkbox">&nbsp;HTML</label>&nbsp;
          <label>
            <input name="prefer" value="music" type="checkbox" class="input-checkbox">&nbsp;Css</label>&nbsp;
          <label><input name="prefer" value="graphics" type="checkbox" class="input-checkbox">&nbsp;Bootstrap</label>&nbsp;
          <label><input name="prefer" value="gameplay" type="checkbox" class="input-checkbox">&nbsp;Javascript</label>&nbsp;
          <label><input name="prefer" value="multiplayer" type="checkbox" class="input-checkbox">&nbsp;Java</label>
          
        </div><br>
        <div class="race">
          <p>Message!!</p>
          <textarea id="fav-course" class="input-textarea" name="comment" placeholder="Enter your txt..."></textarea>
        </div></div>
        <div class="form-group">
          <button type="submit" id="submit" class="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
</div>
</template>
<script>

</script>
<style>
.klu{
font-family: serif;
text-align:center;	
background-image:url('http://protechtheme.com/edumart/images/inner-banner-bg.jpg');
}
.deep{
    border-radius: 12px;
    background-color: rgb(249, 89, 122);
    color: white;
    width: 56%;
    line-height: 154%;
    margin-left: 24%;
    margin: 2% 0% 0% 23%;
}
#name-label{
    display: table-row-group;
	    color:white;
		font-weight:700px;
}
.form-control{
width:59%;
}
.hod{
display: -webkit-box;
color:white;
		font-weight:700px;
}
.group{
   display:table;
   color:white;
		font-weight:700px;
}
.race{
display:table;
color:white;
		font-weight:700px;
}
.inc{
margin-left:28%;

}
#fav-course{
    width: 258%;
    height: 98px;
}
@media only screen and (max-width: 600px){
#fav-course { 
width:178%;
}
}
@media only screen and (max-width: 600px){
.form-control{
    width: 103%;
}
}
@media only screen and (max-width: 600px){
#survey-form{
        margin: 0px 0px 0px -92px;
}
}
</style>