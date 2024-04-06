let active = false;

function mybordes() {
  bordesElem = document.querySelector("img");
  active = !active;

  if (active) {
      bordesElem.classList.add("active");
      
  } else {
    bordesElem.classList.remove("active");
  }
}
