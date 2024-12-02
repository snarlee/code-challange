//initilisating speed detection

function speedDetector( speed ) {

  //constant for the speed limit

  //

  const speedLimit = 70;

  //

  const demeritPointsPerKm = 5;

  // compare input

  if (speed <= speedLimit) 
    {

  
  //no message will display if under speedLimit

  console.log(" ok ");

  }

  else {

  //over speed limit calculating points as defined.

  constDemeritPoints = Math.floor((speed-speedLimit) / demeritPointsPerKm );

  console.log(`Points:${demeritPoints }` );

  //in case licence need to be suspend.

  if (demeritPoints > 12)

  {

  console.log(" License Suspended");

  // alert in cases where needed.
  
  }