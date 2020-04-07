import "../style/main.sass"

let rotateDurationOfEarth = 7
const height = window.innerHeight
const width = window.innerWidth

window.onload = () => {
  const stars = document.getElementsByClassName("star")
  for(let i = 0 ; i < stars.length ; i++ ){
    stars[i].style.top = GetRandomInt(window.innerHeight) + "px"
    stars[i].style.left = GetRandomInt(window.innerWidth) + "px"
    stars[i].style.animation = `gritter ${GetRandomInt(4)}s linear infinite`
  }
}

const GetRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))+1
}

let earth = document.getElementById("earth")
earth.addEventListener("click", addSpeed)

function addSpeed(){
  rotateDurationOfEarth *= 0.8
  earth.style.animation = `rotateEarth ${rotateDurationOfEarth}s linear infinite`
}

window.addEventListener( "scroll", updateDebris)

function updateDebris(){
  const scrollY = window.pageYOffset / 1000 + 2000
  debri_swing(scrollY, "debris")
  debri_Oval(scrollY, "alien", width / 2, height / 2, 1200, 300 )
  debri_Oval(scrollY, "sun", 0, 0, 800, 900, 0.1 )
}

function debri_Oval(scrollY, className, x, y, w, h, _speed){
  const debris = document.getElementsByClassName(className)
  let speed = 1
  if(_speed){speed = _speed}
  let cos = Math.cos(scrollY * speed)
  let sin = Math.sin(scrollY * speed)
  let top = sin * h + y
  let left = cos * w + x
  for(let i = 0 ; i < debris.length; i ++){
    debris[i].style.top = top + "px"
    debris[i].style.left = left + "px"
  }
}


function debri_swing(scrollY, className){
 
  const debris = document.getElementsByClassName(className)
  for(let i = 0 ; i < debris.length; i ++){
    let top = window.innerHeight - (scrollY/18) ** 1.5
    debris[i].style.top = top+"px"
    debris[i].style.left = scrollY+"px"
  }
}