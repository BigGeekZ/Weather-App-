const container=document.querySelector(".container"),search=document.querySelector(".search-box button"),weatherBox=document.querySelector(".weather-box"),weatherDetails=document.querySelector(".weather-details"),error404=document.querySelector(".not-found");search.addEventListener("click",()=>{const a=document.querySelector(".search-box input").value;""===a||fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=${"f3b82ccfa0773e0161a71161cfcd6967"}`).then(a=>a.json()).then(a=>{if("404"===a.cod)return container.style.height="400px",weatherBox.style.display="none",weatherDetails.style.display="none",error404.style.display="block",void error404.classList.add("fadeIn");error404.style.display="none",error404.classList.remove("fadeIn");const b=document.querySelector(".weather-box img"),c=document.querySelector(".weather-box .temperature"),d=document.querySelector(".weather-box .description"),e=document.querySelector(".weather-details .humidity span"),f=document.querySelector(".weather-details .wind span");switch(a.weather[0].main){case"Clear":b.src="images/clear.png";break;case"Rain":b.src="images/rain.png";break;case"Snow":b.src="images/snow.png";break;case"Clouds":b.src="images/cloud.png";break;case"Haze":b.src="images/mist.png";break;default:b.src="";}c.innerHTML=`${parseInt(a.main.temp)}<span>°C</span>`,d.innerHTML=`${a.weather[0].description}`,e.innerHTML=`${a.main.humidity}%`,f.innerHTML=`${parseInt(a.wind.speed)}Km/h`,weatherBox.style.display="",weatherDetails.style.display="",weatherBox.classList.add("fadeIn"),weatherDetails.classList.add("fadeIn"),container.style.height="590px"})});