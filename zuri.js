const el = document.querySelector(".utc");

el.innerText = "Current Date: " + Number( new Date() )

const day = document.querySelector(".day");

const today = new Date().getDay()

if(today == 0){
    day.innerText = "Sunday"
}
else if (today == 1){
    day.innerText = "Monday"
}
else if (today == 2){
    day.innerText="Tuesday"
}

 else{
    day.innerText="N/A"
}

document.querySelector("[data-testid='slackUserName']");
document.querySelector("[data-testid='myTrack']");
document.querySelector("[data-testid='currentDayOfTheWeek']");
document.querySelector("[data-testid='currentUTCTime']");
document.querySelector("[data-testid='githubURL']");
