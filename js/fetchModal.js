// // import { fetchData } from "./main";
// // import Notiflix from "notiflix";

// // function addToQueue() {
// //   Notiflix.Notify.info("The movie has been added to the queue");
// // }
// // function infoRemoveFromQueue() {
// //   Notiflix.Report.info(
// //     "Removing the movie",
// //     "You delete a movie from the queue",
// //     "Okay",
// //     removeFromQueue
// //   );
// // }
// // function removeFromQueue() {
// //   Notiflix.Notify.info("The movie has been removed from the queue");
// // }
// // function addToWatched() {
// //   Notiflix.Notify.info("The movie has been added to watched");
// // }
// // function infoRemoveFromWatched() {
// //   Notiflix.Report.info(
// //     "Removing the movie",
// //     "You delete a movie from the watched",
// //     "Okay",
// //     removeFromWatched
// //   );
// // }
// // function removeFromWatched() {
// //   Notiflix.Notify.info("The movie has been removed from watched");
// // }
// function locStorage(data) {
//   const moviesWatched =
//     JSON.parse(localStorage.getItem("movies-watched")) || [];
//   const moviesQueue = JSON.parse(localStorage.getItem("movies-queue")) || [];
//   // Buttons
//   const addWatchedRef = document.querySelector(".add-watched");
//   const addQueueRef = document.querySelector(".add-queue");
//   // Listener "Add to Watched" "Add to Queue"
//   addWatchedRef.addEventListener("click", onWatchedClick);
//   addQueueRef.addEventListener("click", onQueueClick);
//   // Zmiana nazwy przycisku
//   if (localStorage.length > 0) {
//     if (moviesWatched.find((item) => item.id === data.id)) {
//       addWatchedRef.classList.add("js-remove-from");
//       addWatchedRef.textContent = "remove from watched";
//     }
//   }
//   if (localStorage.length > 0) {
//     if (moviesQueue.find((item) => item.id === data.id)) {
//       addQueueRef.classList.add("js-remove-from");
//       addQueueRef.textContent = "remove from queue";
//     }
//   }
//   // Funkcja dodawania do localstorage 'Watched'
//   function onWatchedClick() {
//     console.log(data);
//     if (!moviesWatched.find((item) => item.id === data.id)) {
//       moviesWatched.push(data);
//       localStorage.setItem("movies-watched", JSON.stringify(moviesWatched));
//       const res = addWatchedRef.classList.toggle("js-remove-from");
//       addWatchedRef.textContent = `${res ? "remove from" : "add to"} watched `;
//       //   localStorage.removeItem('movies-queue');
//       addToWatched();
//       return;
//     }
//     let index = moviesWatched.findIndex((object) => object.id === data.id);
//     moviesWatched.splice(index, 1);
//     localStorage.setItem("movies-watched", JSON.stringify(moviesWatched));
//     const res = addWatchedRef.classList.toggle("js-remove-from");
//     addWatchedRef.textContent = `${res ? "remove from" : "add to"} watched `;
//     infoRemoveFromWatched();
//   }
//   // Funkcja dodawania do lokalstorage 'Queue'
//   function onQueueClick() {
//     if (!moviesQueue.find((item) => item.id === data.id)) {
//       moviesQueue.push(data);
//       localStorage.setItem("movies-queue", JSON.stringify(moviesQueue));
//       const res = addQueueRef.classList.toggle("js-remove-from");
//       addQueueRef.textContent = `${res ? "remove from" : "add to"} queue `;
//       //   localStorage.removeItem('movies-watched');
//       addToQueue();
//       return;
//     }
//     let index = moviesQueue.findIndex((object) => object.id === data.id);
//     moviesQueue.splice(index, 1);
//     localStorage.setItem("movies-queue", JSON.stringify(moviesQueue));
//     const res = addQueueRef.classList.toggle("js-remove-from");
//     addQueueRef.textContent = `${res ? "remove from" : "add to"} queue `;
//     infoRemoveFromQueue();
//   }
// }
// return locStorage();
