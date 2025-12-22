let checkerForm = document.getElementById('checkerForm');
let spinner = document.getElementById('spinner');
let Area = document.getElementById('Area');
let Temperature = document.getElementById('Temperature');
let Weather = document.getElementById('Weather');
let Feels = document.getElementById('Feels');
let Chance = document.getElementById('Chance');
let UV = document.getElementById('UV');
let Visibility = document.getElementById('Visibility');


checkerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    spinner.style.display = 'flex';
    console.log('Spinner displayed');
    try{
        const campusLocation = document.getElementById('campusLocation').value;
        const send = await fetch(`https://wttr.in/${campusLocation}?format=j1`);
        const answer = await  send.json();
        console.log(answer);
        console.log(answer.nearest_area[0].areaName[0]);

        Area.textContent = "City/Area: "+ answer.nearest_area[0].areaName[0].value;
        Temperature.textContent = "Temperature: "+ answer.current_condition[0].temp_C + "C";
        Weather.textContent = "Weather Condition: " +answer.current_condition[0].weatherDesc[0].value;
        Feels.textContent = "Feels like: "+answer.current_condition[0].FeelsLikeC;
        Chance.textContent ="Chance Of Rain: "+ answer.weather[0].hourly[0].chanceofrain + "%";
        UV.textContent ="UV index: "+ answer.current_condition[0].uvIndex;
        Visibility.textContent ="Visibility: " + answer.current_condition[0].visibility;


     
    } catch (error) {
        console.error("data not received");
    }
    finally{
        
        spinner.style.display = 'none';
           console.log('Spinner hidden');
    }
});
