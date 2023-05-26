function calculate() {
     setInterval(() => {

          //Input Birth Day
          let birthdate = new Date(document.getElementById('birthdate').value);

          //getTime : return the number of millisecond since January 1, 1970
          let now = new Date();
          let ageInMs = now.getTime() - birthdate.getTime();
          
          let ageInS = ageInMs / 1000; // to Seconds
          let ageInMins = ageInS / 60; // to Minutes
          let ageInHrs = ageInMins / 60; // to Hours
          let ageInDays = ageInHrs / 24; // to Days
          let ageInMonths = ageInDays / 30.4375; // to Months
          let ageInYears = ageInMonths / 12; // to Years

          document.querySelector('#Years').innerHTML = Math.floor(ageInYears);
          document.querySelector('#Months').innerHTML = Math.floor(ageInMonths % 12);
          document.querySelector('#Days').innerHTML = Math.floor(ageInDays % 30.4375);
          document.querySelector('#Hours').innerHTML = Math.floor(ageInHrs % 24);
          document.querySelector('#Minutes').innerHTML = Math.floor(ageInMins % 60);
          document.querySelector('#Seconds').innerHTML = Math.floor(ageInS % 60);
          document.querySelector('#Seconds').style.borderBottom = '1px grey solid';
     
     }, 1000);

}

function reset() {
     window.location.reload();
}
