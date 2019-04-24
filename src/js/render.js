    const fulldata = document.createElement('div');
    fulldata.classList.add('w-75', 'm-auto', 'd-flex', 'justify-content-center', 'info');
    const extract = data => {
        const parent = document.getElementById('weather');
        const clear = document.createElement('div');
        const img = document.createElement('img');
        const city = document.createElement('p');
        const country = document.createElement('div');
        const simpleWeather = country.cloneNode(true);
        const extWeater = country.cloneNode(true);

        //country details
        city.classList.add('w-50', 'm-auto');
        city.textContent = data.name + ' ,' + data.sys.country;
        img.src = "https://www.countryflags.io/" + data.sys.country + "/flat/64.png";
        clear.classList.add('clear');

        country.classList.add('card', 'mx-2');
        country.classList.add('country');
        simpleWeather.classList.add('simpleweather', 'card', 'mx-2');
        extWeater.classList.add('extweather');
        country.append(img, city);
        // weather details
        const temeperature = city.cloneNode(true);
        const humidity = city.cloneNode(true);
        const wind = city.cloneNode(true);
        const icon = img.cloneNode(true);
        temeperature.classList.add('temp');
        wind.classList.add('wind');
        icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + '.png';
        temeperature.textContent = 'Temperature: ' + data.main.temp + ' C';
        humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';
        wind.textContent = 'Windspeed: ' + data.wind.speed + 'm/s';
        simpleWeather.append(icon, temeperature, humidity, wind);
        //extWeather
        const direction = city.cloneNode(true);
        const pressure = city.cloneNode(true);
        const sunrise = city.cloneNode(true);
        const sunset = city.cloneNode(true);
        direction.textContent = 'Wind direction: ' + getDirection(data.wind.deg);
        pressure.textContent = 'Relative pressure: ' + data.main.pressure + 'hPa';
        sunrise.textContent = 'Sunrise at: ' + timeConvert(data.sys.sunrise);
        sunset.textContent = 'Sunset at: ' + timeConvert(data.sys.sunset);
        extWeater.classList.add('card', 'mx-2');
        extWeater.append(direction, pressure, sunrise, sunset);
        //
        fulldata.append(country, simpleWeather, extWeater, clear);
        parent.append(fulldata);

    }
    const getDirection = wind => {
        let windy = Number(wind);
        if (windy === 0 || windy === 360) return 'N';
        if (windy > 0 && windy < 90) return 'NE';
        if (windy === 90) return 'E';
        if (windy > 90 && windy < 180) return 'SE';
        if (windy === 180) return 'S';
        if (windy > 180 && windy < 270) return 'SW';
        if (windy === 270) return 'W';
        return 'NW';
    }
    const timeConvert = time => {
        let a = new Date(time * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    }
    export {
        extract
    }