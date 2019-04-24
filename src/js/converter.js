
const converter = (unit) => {
    
    if(document.querySelector('.wind') !== undefined && document.querySelector('.temp') !== undefined){
        let wind = document.querySelector('.wind').textContent;
        let temp = document.querySelector('.temp').textContent;
        let windInt = toNumber(wind);
        let tempInt = toNumber(temp);
        if (temp[temp.length-1] === 'C' && unit === 'Metric'){
            return;
        }
        if (temp[temp.length-1] !== 'C' && unit === 'Metric'){
            document.querySelector('.wind').textContent = `Windspeed: ${windInt * .447} m/s` ;
            document.querySelector('.temp').textContent = `Temperature ${(tempInt-32)/1.8} C`;
        } if (temp[temp.length-1] === 'C' && unit === 'Imperial'){
            document.querySelector('.wind').textContent = `Windspeed: ${windInt * 2.23} mph` ;
            document.querySelector('.temp').textContent = `Temperature ${tempInt * 1.8 + 32} F`;
        }
        else{
            return;
        }
    }
  
  
}
const toNumber = string => Number(string.match(/\d+/)[0])
export {converter}