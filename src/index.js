import "core-js/stable";
import "regenerator-runtime/runtime";
import { form, getFormData } from '../src/js/form'
import { extract, modal } from '../src/js/render'
import { waitForIt } from '../src/js/loadingScreen'
import { converter } from '../src/js/converter'
const flashing = document.createElement('div')
const master = document.getElementById('weather')
window.onload = () => {
  form();
  getLocation();
}

// when form is used
document.addEventListener('click', e => {
  if (e.target.textContent === 'Submit') {
    clearInfo();
    let city = getFormData();
    grabIt(city, waitForIt, extract, "lds-ring", flashing, master);
  }
  if (e.target.textContent === 'Imperial' || e.target.textContent === 'Metric') {
    converter(e.target.textContent);
  }
})
// until result is fetched

const grabIt = async (city, loader, data, className, loading, main) => {
  loader(loading, main);
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`, { mode: 'cors' })
    const response = await res.json()
    data(response, className)
  } catch (e) {
    modal(true)
  }
}
// fetching process
const success = async pos => {
  waitForIt(flashing, master);
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${process.env.API_KEY}`,{ mode: 'cors' })
    const response = await res.json()
    extract(response, "lds-ring")
  } catch (e) {
    modal(true)
  }
};
// if navigator is allowed
const getLocation = () => {
  navigator.geolocation.getCurrentPosition(success);
}
const clearInfo = () => {
  if (document.querySelector('.info') !== null) {
    document.querySelector('.info').innerHTML = '';
  }

}

document.addEventListener("click", e => {
  if (e.target.innerText === "X") {
    let toRemove = document.querySelector(".main-frame")
    if (toRemove) {
      document.querySelector("#weather").removeChild(toRemove)
    }
  }
})
document.addEventListener("keydown", e => {
  if (e.keyCode === 27) {
    let toRemove = document.querySelector(".main-frame")
    if (toRemove) {
      document.querySelector("#weather").removeChild(toRemove)
    }
  }
})

