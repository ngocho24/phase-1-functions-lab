// Code your solution in this file!
function distanceFromHqInBlocks (pickUpLocation){
const headQuarterLocation = 42;

if (pickUpLocation >= headQuarterLocation) {
    return ( pickUpLocation - headQuarterLocation );
  } else {
    return (headQuarterLocation - pickUpLocation);
  }

}
let pickUpLocation = 50;
const distance = distanceFromHqInBlocks(pickUpLocation);
console.log (distance);



// Calculate distance from HQ in Feet
function distanceTravelledInFeet(startBlock,destinationBlock) {
    const blockFeet = 264;  
   if( startBlock < 42 && destinationBlock < 42){
        return ((destinationBlock - startBlock)* blockFeet);
    } else { 
        return "Wrong entry!"
    }

}
const startBlock = 34;
const destinationBlock = 38;
const numberOfBlocks = distanceTravelledInFeet(startBlock, destinationBlock);
console.log  (`${numberOfBlocks} ft`);



    // calculate the fare price
    function calculatesFarePrice (startBlock, destinationBlock){
        const distanceBlocks = (destinationBlock-startBlock) * 264 ;
        
        if (distanceBlocks <= 400){
            return 0;
        }
        if (distanceBlocks >400 && distanceBlocks <= 2000){
            return (distanceBlocks - 400) * 0.02;
    
        } else if (distanceBlocks >2000 && distanceBlocks <2500){
            return 25;
    
        }else if (distanceBlocks >= 2500) {
            return "cannot travel that far";
    
        }
    }
   const farePaid = calculatesFarePrice (startBlock, destinationBlock);
    console.log(farePaid);