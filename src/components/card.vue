<template>
    <div>
     <div class="card">
       <h1>  Thank you for all your hard work on this.<br>
      Thanks again, we couldn't have pulled this off without you. <br>
      Thank you, you're amazing! <br>
      I'm so thankful for everything you bring to the team. <br>
      I appreciate your hard work.<br>
      Grateful for your support. </h1>
     </div>
     <a href="https://mythrillfiction.com/" target="_blank">By:Suriya</a>
    </div>
</template>
<style>
:root {
  --card-height: 100vh;
  --card-width: calc(var(--card-height) / 1.5);
}
body {
  min-height: 500vh;
  background: red;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}
.card {
  background: #191C29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
}
.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
.card:hover:before, .card:hover:after {
  animation: none;
  opacity: 0;
}
.card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5DDCFF, #3C67E3 43%, #4E00C2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}
.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate)
    , #5DDCFF, #3C67E3 43%, #4E00C2);
    opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}
@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
a {
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
}
</style>