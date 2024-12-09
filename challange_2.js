 //initialisating speed detection

function speedDetector(speed) {
  const speedLimit = 70;   // Adjust the speed limit as needed
  const demeritPointsPerKm = 5;
//compare output
  if (speed <= speedLimit) {
      console.log("OK");
  } else {
    //over speed limit calculating points as defined
      const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);
      console.log("Points:", demeritPoints);

      if (demeritPoints > 12) { // Adjust the threshold as needed
          console.log("License Suspended");
      }
  }
}
