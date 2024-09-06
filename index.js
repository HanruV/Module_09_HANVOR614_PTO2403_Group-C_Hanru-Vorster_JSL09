//Fetching a random image from unsplash and setting
//as background for body
try {
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  // console.log(data.urls.full);
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  //Adding author name
  document.getElementById(
    "author"
  ).textContent = `Img Author: ${data.user.name}`;
} catch (err) {
  document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1547234935-80c7145ec969?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU1MzcxNTR8&ixlib=rb-4.0.3&q=85)`;
  document.getElementById("author").textContent = `Img Author: Jack C`;
}

//Fetching data from CoinGeckoAPI
try {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
  if (!res.ok) {
    throw Error("Something went wrong");
  }
  const data = await res.json();
  document.getElementById("crypto-top").innerHTML = `
  <img src= ${data.image.thumb}
  <span>${data.name}</span>
  `;
  document.getElementById("crypto").innerHTML += `
  <p>🎯R ${data.market_data.current_price.zar}</p>
  <p>👆R ${data.market_data.high_24h.zar}</p>
  <p>👇R ${data.market_data.low_24h.zar}</p>
  `;
} catch (err) {
  console.error(err);
}

//Get date and print and update live in the DOM
function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    {
      timeStyle: "short",
    }
  );
}
setInterval(getCurrentTime, 1000);

//Geolocation API/Waether API
try {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    );
    if (!res) {
      throw Error("Weather Data not Available");
    }
    const data = await res.json();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather").innerHTML = `
    <img src = ${iconUrl}>
    <p class="temp">${Math.round(data.main.temp)}°C</p>
    <p class="city-name">${data.name}</p>
    `;
  });
} catch (err) {
  console.error(err);
}
