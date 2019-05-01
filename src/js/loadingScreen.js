const flashing = document.createElement('div');
const master = document.getElementById('weather');
const waitForIt = () => {
    const div1 = document.createElement('div');
    const div2 = div1.cloneNode(true);
    const div3 = div1.cloneNode(true);
    const div4 = div1.cloneNode(true);
    flashing.append(div1,div2,div3,div4);
    flashing.classList.add('lds-ring');
    return master.append(flashing);
  }
export {waitForIt}

