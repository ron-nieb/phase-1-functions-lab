function distanceFromHqInBlocks(blockLocation) {
  const hqBlock = 42;
  return Math.abs(blockLocation - hqBlock);
  } 
  function distanceFromHqInFeet(blockLocation) {
  const blockInFeet = 264;
  const distanceInBlocks = Math.abs(blockLocation - 42);
  return distanceInBlocks * blockInFeet;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
  const blockInFeet = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * blockInFeet;
}
function calculatesFarePrice(start, destination) {
const distanceInFeet = distanceTravelledInFeet(start, destination);
let fare = 0;
if (distanceInFeet <= 400) {
fare = 0;
} else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
fare = (distanceInFeet - 400) * 0.02;
} else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
fare = 25;
} else if (distanceInFeet > 2500) {
fare = 'cannot travel that far';
}
return fare;
}
