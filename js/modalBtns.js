const addQueueRef = document.querySelector(".button-queue");
const addWatchedRef = document.querySelector(".button-watched");

export function locStorage(film) {
  const moviesWatched =
    JSON.parse(localStorage.getItem("movies-watched")) || [];
  const moviesQueue = JSON.parse(localStorage.getItem("movies-queue")) || [];
  // Buttons
  const addWatchedRef = document.querySelector(".button-watched");
  const addQueueRef = document.querySelector(".button-queue");
  // Listener "Add to Watched" "Add to Queue"
  addWatchedRef.addEventListener("click", onWatchedClick);
  addQueueRef.addEventListener("click", onQueueClick);
  // Zmiana nazwy przycisku
  if (localStorage.length > 0) {
    if (film && moviesWatched.find((item) => item.id === film.id)) {
      addWatchedRef.classList.add("js-remove-from");
      addWatchedRef.textContent = "remove from watched";
    }
  }
  if (localStorage.length > 0) {
    if (moviesQueue.find((item) => item.id === film.id)) {
      addQueueRef.classList.add("js-remove-from");
      addQueueRef.textContent = "remove from queue";
    }
  }
  // Funkcja dodawania do localstorage 'Watched'
  function onWatchedClick() {
    console.log(film);
    if (!moviesWatched.find((item) => item.id === film.id)) {
      moviesWatched.push(film);
      localStorage.setItem("movies-watched", JSON.stringify(moviesWatched));
      const res = addWatchedRef.classList.toggle("js-remove-from");
      addWatchedRef.textContent = `${res ? "remove from" : "add to"} watched `;
      //   localStorage.removeItem('movies-queue');
      addToWatched();
      return;
    }
    let index = moviesWatched.findIndex((object) => object.id === film.id);
    moviesWatched.splice(index, 1);
    localStorage.setItem("movies-watched", JSON.stringify(moviesWatched));
    const res = addWatchedRef.classList.toggle("js-remove-from");
    addWatchedRef.textContent = `${res ? "remove from" : "add to"} watched `;
    // infoRemoveFromWatched();
  }
  // Funkcja dodawania do lokalstorage 'Queue'
  function onQueueClick() {
    if (!moviesQueue.find((item) => item.id === film.id)) {
      moviesQueue.push(film);
      localStorage.setItem("movies-queue", JSON.stringify(moviesQueue));
      const res = addQueueRef.classList.toggle("js-remove-from");
      addQueueRef.textContent = `${res ? "remove from" : "add to"} queue `;
      //   localStorage.removeItem('movies-watched');
      // addToQueue();
      return;
    }
    let index = moviesQueue.findIndex((object) => object.id === film.id);
    moviesQueue.splice(index, 1);
    localStorage.setItem("movies-queue", JSON.stringify(moviesQueue));
    const res = addQueueRef.classList.toggle("js-remove-from");
    addQueueRef.textContent = `${res ? "remove from" : "add to"} queue `;
    // infoRemoveFromQueue();
  }
}
