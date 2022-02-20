const cityName=document.getElementById('cityName')
const submitbtn=document.getElementById('submitbutton')
const city_name=document.getElementById('city_name')
const temp_status=document.getElementById('temp_status')
const temp_real_val=document.getElementById('temp_real_val')
const datahide=document.querySelector(".middle_layer");
const day=document.getElementById("day");
const month=document.getElementById("today_date")

var Days = ['Sunday', 'Monday', 'Tuesday', 
'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September',
'October', 'November', 'December'];
var currentday=new Date();
var day_show=Days[currentday.getDay()];
var month_show=Months[currentday.getMonth()];
month.innerHTML=`${month_show} , ${currentday.getDate()}` ;
day.innerHTML=day_show;
const getInfo=async(event)=>{
    event.preventDefault();
    let cityval= cityName.value;
    if(cityval===""){
      city_name.innerText='plz write the name before search';
      datahide.classList.add('data_hide');
    }
   else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d832662f90b77c3edc02b17d8d0a212c`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            const arrdata=[data];
            city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country} `;
            temp_real_val.innerText=arrdata[0].main.temp;
            // temp_status.innerText=arrdata[0].weather[0].main;
            const tempMood=arrdata[0].weather[0].main

            // condition to check sunny ou coludy

            if(tempMood=="Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";

            }
            else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood==="Rain")
            {
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
        else{
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#a4b0be;'></i>";
        }


        datahide.classList.remove('data_hide');









        }catch{
            city_name.innerText='plz write the name before..... search'
            datahide.classList.add('data_hide');
        }
      
    }
   
}
submitbtn.addEventListener('click',getInfo);