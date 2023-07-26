 
 
 const key = '42b6a1f19ec8a3ca9fb4b13a0b649967'

 function data(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name 
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description
  document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
  document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%"
 }

 async function searchCity(city) {
  const dados = await 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
  .then( response => response.json())
  data(dados)
  
 }

 function clickButton() {
  const city = document.querySelector(".input-city").value
  searchCity(city)
 }
