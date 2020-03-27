
const form = () => {
const parent = document.getElementById('weather');
const formDiv = document.createElement('div');
formDiv.classList.add('m-auto','container',"reform");
const input = document.createElement('input');
input.setAttribute('type','text');
input.classList.add('form-control','mt-3','mb-3');
input.placeholder = 'Please enter your city name'
const sub = document.createElement('span');
const metric = sub.cloneNode(true);
const imperial = sub.cloneNode(true);
metric.classList.add('btn','btn-primary','w-50');
metric.textContent = 'Metric';
imperial.classList.add('btn','btn-warning','w-50');
imperial.textContent = 'Imperial'
sub.classList.add('w-100','btn','btn-primary','mt-1');
sub.textContent = 'Submit';
formDiv.append(input,metric,imperial,sub);
parent.append(formDiv);
const line = document.createElement('hr');
line.classList.add('line');
parent.append(line);
return parent;
}

const getFormData = () => {
    let data = document.querySelector('input');
    return data.value
}

export {form,getFormData};