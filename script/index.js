import "../style/main.sass"

window.onload = () =>{
  const stars = document.getElementsByClassName("star")
  for(let i = 0 ; i < stars.length ; i++ ){
    stars[i].style.top = GetRandomInt(window.innerHeight) + "px"
    stars[i].style.left = GetRandomInt(window.innerWidth) + "px"
    stars[i].style.animation = `gritter ${GetRandomInt(3)}s linear infinite`
  }
}

const GetRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))+1
}