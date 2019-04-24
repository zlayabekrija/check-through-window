import {form,getFormData} from '../src/js/form'
import {extract} from '../src/js/render'

const master = document.getElementById('weather');
const flashing = document.createElement('div');
window.onload = () => {
  form();
  getLocation();
}
// when form is used
document.addEventListener('click',e => {
    if(e.target.textContent === 'Submit'){
      clearInfo();
      let city = getFormData();
      grabIt(city);
    }
})
// until result is fetched
const waitForIt = () => {
  flashing.classList.add('flashing');
  return master.append(flashing);
}
const grabIt = city => {
   waitForIt();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=7be0a02288cc1414823be7512913a934",{mode: 'cors'})
    .then(function(response) {
      document.querySelector('.flashing').classList.remove('flashing');
      return response.json();
    }).then(function(response){
      return extract(response);
    })
    .catch(function(error) {
      throw new Error(error);
    });
}
const success = pos =>{
  waitForIt();
  fetch("https://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&units=metric&appid=7be0a02288cc1414823be7512913a934",{mode: 'cors'})
  .then(function(response) {
    document.querySelector('.flashing').classList.remove('flashing');
    return response.json();
  }).then(function(response){
    return extract(response);
  })
  .catch(function(error) {
    throw new Error(error);
  });
};
// if navigator is allowed
const getLocation = () => {
  navigator.geolocation.getCurrentPosition(success);
}
const clearInfo = () => {
    if (document.querySelector('.info') !== null){
      document.querySelector('.info').innerHTML = '';
    }
  
}
// 7be0a02288cc1414823be7512913a934 api key 