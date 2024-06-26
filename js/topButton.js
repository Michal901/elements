import axios from "axios";
// const axios = require("axios");

const filmList = document.querySelector(".home-film-list");

let currentPage = 1;
let itemsPerPage = 20;

const fetchData = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=${itemsPerPage}&page=${page}`
    );
    let currentFilmIndex = 0;
    const movies = response.data.results;
    console.log(movies);
    // Pobieranie gatunków filmowych
    const genresResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN`
    );
    const genresMap = {};
    genresResponse.data.genres.forEach((genre) => {
      genresMap[genre.id] = genre.name;
    });

    // Tworzenie markupu dla każdego filmu
    const markupArray = movies.map((movie) => {
      const genreNames = movie.genre_ids
        .map((genreId) => genresMap[genreId])
        .slice(0, 2);
      const genresMarkup = genreNames.join(", ");
      return `
        <li class="home-film-item" data-index="${currentFilmIndex++}" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${
            movie.poster_path
          }" alt="${movie.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${movie.title}</h2>
            <p class="home-film-info">
              <span class="home-film-type">${genresMarkup}</span> |
              <span class="home-film-year">${movie.release_date.slice(
                0,
                4
              )}</span>
              <span class="home-film-rating">${movie.vote_average.toFixed(
                1
              )}</span>
            </p>
          </div>
        </li>`;
    });

    // Wstawianie wygenerowanego markupu do elementu HTML
    filmList.innerHTML = markupArray.join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Wywołanie funkcji fetchData, aby pobrać dane i wygenerować markup filmów
fetchData();
