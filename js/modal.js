const logRegBtn = document.querySelector(".log-reg-btn");
const modalRegLog = document.querySelector(".log-reg");

logRegBtn.addEventListener("click", () => {
  console.log("object");
  console.log(logRegBtn, modalRegLog);
  modalRegLog.classList.toggle("show-log-reg-window");
});
