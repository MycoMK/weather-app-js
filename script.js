console.log('connected');
document.getElementById('getText').addEventListener('click', getText);
function getText(){
    console.log('lets Gooo');
}
let cityName = 'California'
const apikey = 'ff8345d57b34c925a8ba78c22f9b34dc'
function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
    .then(response => { return response.json()
    }).then(data => { console.log(`data`,data)
    })
    
}
fetchData()
