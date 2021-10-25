// console.log('connected');

let cityName = 'California'
const apikey = 'ff8345d57b34c925a8ba78c22f9b34dc'
function fecthData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
    .then(response => { return response.json()
    }).then(data => { console.log(`data`,data)
    })
}

fecthData();
