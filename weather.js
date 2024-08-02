const apiKey="41c14f3a48839936fc73bbea071885f0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchBox = document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    }else{

    var data = await response.json();
    // console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="img/clouds.png";
}
else if(data.weather[0].main=="clear"){
    weatherIcon.src="img/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="img/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="img/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="img/mist.png";
}
document.querySelector(".weather").style.display="block"
document.querySelector(".error").style.display="none"
}
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})


// ............imageSlider......apiKey.........apiKey.charAt.apply.apply.apply.apply.apply.apply.apply......apiKey.charAt.apply.
  
let sliders=document.querySelectorAll(".slider")
var counter=0;
sliders.forEach((slider,index)=>{
slider.style.left = `${index * 100}%`

})
const next=()=>{
if(counter<sliders.length){
counter++
sliderImg()
}
else{
counter=1
}
}
const prev=()=>{
if(counter!=0){
counter--
sliderImg()
}else{
counter=1
}
}

 
const sliderImg=()=>{
   sliders.forEach((slide)=>{
       slide.style.transform= `translateX(-${counter*100}%)`
   })
  
sliderImg()
}

let slideInterval;
const autoplay=()=>{
    slideInterval=setInterval(()=>{
       if(counter<sliders.length-1){
counter++
sliderImg()
}
else{
counter=0
}
   },2000)
}


const stopSlide=()=>{
   clearInterval(slideInterval)
}
autoplay()
sliders.addEventListener('mouseover',stopSlide)
