import "../style/main.sass"

let rotateDurationOfEarth = 7

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
	let y = window.pageYOffset
	console.log(y)
	const debris = document.getElementsByClassName("debris")
	for(let i = 0 ; i < debris.length; i ++){
		let top = 800 - (y/4) * 2
		debris[i].style.top = top+"px"
		debris[i].style.left = y+"px"
	}
	console.log(debris)	
}