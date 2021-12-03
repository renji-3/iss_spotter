const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("wah wah" , error);
//     return;
//   }
    
//   console.log('It worked! Returned IP:' , ip);
// });
    


// fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log("yeet try again fam" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });



// const myCoords = { latitude: '43.6445', longitude: '-79.7755' }; //when useing all funcs i might be able to sub the numbers for the lat and long variables

// fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
//   if (error) {
//     console.log("fuck my bad bro" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });


const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass in ur ends is at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("*dark souls you died sound effect plays*:", error);
  }
  printPassTimes(passTimes);
});

//dont know where they got the datetime and duration from