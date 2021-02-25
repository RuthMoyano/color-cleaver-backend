/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(primary) {
  if(primary === 'red') {
    return true;
  } else if(primary === 'yellow') {
    return true;
  } else if(primary === 'blue') {
    return true
  } else if(primary === 'orange') {
    return false;
  } else if(primary === 'blorgon') {
    return false;
  } else if(primary === 'ted') {
    return false;
  }
} 




// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
