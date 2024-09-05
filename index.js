//Fetching a random image from unsplash and setting
//as background for body
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.urls.full);
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    //Adding author name
    document.getElementById(
      "author"
    ).textContent = `Img Author: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1547234935-80c7145ec969?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU1MzcxNTR8&ixlib=rb-4.0.3&q=85)`;
  });

//Fetching data from CoinGeckoAPI
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    // console.log(data);
    document.getElementById("crypto-top").innerHTML = `
    <img src= ${data.image.thumb}
    <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
    <p>🎯R ${data.market_data.current_price.zar}</p>
    <p>👆R ${data.market_data.high_24h.zar}</p>
    <p>👇R ${data.market_data.low_24h.zar}</p>
    `;
  })
  .catch((err) => console.error(err));

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
