let movieContainer = document.querySelector("#movieContainer");

let movieApiLink = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");
movieApiLink.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data.Search);
  movieContainer.innerHTML = "";
  data.Search.forEach((movie) => {
    movieContainer.innerHTML += `
      <div class="movie">
        <img src="${movie.Poster}" alt="movie poster" width="180" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  });
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("API call completed.");
});