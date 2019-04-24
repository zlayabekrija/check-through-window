
const form = () => {
const parent = document.getElementById('weather');
const formDiv = document.createElement('div');
formDiv.classList.add('w-50','m-auto','container');
const input = document.createElement('input');
input.setAttribute('type','text');
input.classList.add('form-control','mt-3','mb-3');
input.placeholder = 'Please enter your city name'
const sub = document.createElement('span');
sub.classList.add('w-100','btn','btn-primary');
sub.textContent = 'Submit';
formDiv.append(input,sub);
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