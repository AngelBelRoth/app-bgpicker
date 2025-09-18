document.getElementById('KJJ').onclick = KimJaejung
document.getElementById('KJS').onclick = KimJunsu

function KimJaejung() {
  document.querySelector('body').style.backgroundImage = 'url("img/KJJ.jpeg")'
  anything()
  // document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  // document.querySelector('body').style.backgroundSize = 'cover'
  // document.querySelector('body').style.color = 'white'
  // document.querySelector('#identity').style.display = 'none'
  // document.querySelector('#KJS').style.display = 'none'
  // document.querySelector('#KJJ').style.display = 'none'
  // document.querySelector('h1').style.display = 'none'
  // document.querySelector('h2').style.display = 'none'
}

function KimJunsu() {
  document.querySelector('body').style.backgroundImage = 'url("img/KJS-HANA.jpeg")'
  anything()
  // document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  // document.querySelector('body').style.backgroundSize = 'cover'
  // document.querySelector('body').style.color = 'white'
  // document.querySelector('#identity').style.display = 'none'
  // document.querySelector('#KJS').style.display = 'none'
  // document.querySelector('#KJJ').style.display = 'none'
  // document.querySelector('h1').style.display = 'none'
  // document.querySelector('h2').style.display = 'none'
}

// M.Kazin taught me
function anything(){
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  // document.querySelector('body').style.color = 'white'
  // document.querySelector('#identity').style.display = 'none'
  // document.querySelector('#KJS').style.display = 'none'
  // document.querySelector('#KJJ').style.display = 'none'
  // document.querySelector('h1').style.display = 'none'
  // document.querySelector('h2').style.display = 'none'
  document.querySelector('.mainPage').style.display = 'none'
}