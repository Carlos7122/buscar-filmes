const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTVkMWQxOWVmZmE5MWUyMDkxNWNiMjZlYjU2ODE3NiIsInN1YiI6IjY0N2Y3MDExYmU2ZDg4MDBmZmFjOGY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rtv9Ud8Dvy9QIH_YefRV2YMOWaJn7N4r0nEMFpOCZV8",
  },
};

async function searchMovie() {
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=pt-US&page=1`,
    options
  );
  const consultaMovie = await movies.json();

  console.table(consultaMovie);
}

searchMovie();
