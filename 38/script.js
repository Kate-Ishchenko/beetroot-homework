const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");
const movieDetails = document.getElementById("details");
let searchQ = "";
let pageCountQ = 0; 

// load movies from API
async function loadMovies(searchTerm, page = 1) {
  const URL = `https://omdbapi.com/?s=${searchTerm}&page=${page}&apikey=ef61b148`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  if (data.Response == "True") {
    displayMovieList(data.Search);
    displayPagination(parseInt(data.totalResults), page);
  }
}

function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
  searchQ = searchTerm;
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovies(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = "";
  for (let idx = 0; idx < movies.length; idx++) {
    let movieListItem = document.createElement("div");
    movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
    movieListItem.classList.add("search-list-item");
    if (movies[idx].Poster != "N/A") moviePoster = movies[idx].Poster;
    else moviePoster = "image_not_found.png";

    movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        <a href="#details" class="details-link">Details</a>
        `;
    searchList.appendChild(movieListItem);
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll(".search-list-item");
  searchListMovies.forEach((movie) => {
    movie.children[2].addEventListener("click", async () => {
      movieSearchBox.value = "";
      const result = await fetch(
        `http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=ef61b148`
      );
      const movieDetails = await result.json();
      displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  movieDetails.innerHTML = `
    <div class = "movie-poster">
        <img src = "${
          details.Poster != "N/A" ? details.Poster : "image_not_found.png"
        }" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${
          details.Awards
        }</p>
    </div>
    `;
}

const paginationNumbers = document.getElementById("pagination-numbers");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

function displayPagination(totalResult, activePage) {
  const paginationLimit = 10;
  const pageCount = Math.ceil(totalResult / paginationLimit);
  pageCountQ = pageCount;
  const prevRange = activePage < 10 ? 0 : activePage - 5;
  const currRange = activePage <= pageCount - 5 ? activePage + 5 : pageCount; 
  console.log(currRange)
  
  paginationNumbers.innerHTML = '';
  for (let i = 1; i <= pageCount; i++) {
        if (i >= prevRange && i < currRange) {
          appendPageNumber(i);
          
    }
    
  }

  handleActivePageNumber(activePage);
  handlePageButtonsStatus(activePage, pageCount);

}

function appendPageNumber(index) {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
  pageNumber.addEventListener("click", () => {
    loadMovies(searchQ, index)
  });
}

function disableButton(button) {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

function enableButton(button) {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

function handlePageButtonsStatus(currentPage, pageCount) {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

function handleActivePageNumber(currentPage) {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
      button.setAttribute("data-index", pageIndex)
    }
  });
};

window.addEventListener("load", () => {

  prevButton.addEventListener("click", () => {
    const activePage = document.querySelector('.active');
    const currentIndex = activePage.getAttribute('page-index');
    if(currentIndex > 1) {
      loadMovies(searchQ, currentIndex - 1);
    }

  });

  nextButton.addEventListener("click", () => {
    const activePage = document.querySelector('.active');
    const currentIndex = parseInt(activePage.getAttribute('page-index'));
    console.log(currentIndex + 1 <= pageCountQ)
    if(currentIndex + 1 <= pageCountQ) {
      loadMovies(searchQ, currentIndex + 1);
    }
  });

});
