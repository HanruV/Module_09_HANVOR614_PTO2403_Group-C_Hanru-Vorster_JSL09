//Fetching a random image from unsplash and setting
//as background for body
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = data.user.name;
  });
