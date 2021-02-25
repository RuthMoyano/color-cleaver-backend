/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(primary2) {
  if(primary2 === 'orange') {
    return true;
  } else if( primary2 === 'purple') {
    return true;
  } else if(primary2 === 'green') {
    return true;
  } else if(primary2 === 'red') {
    return false;
  } else if( primary2 === 'black') {
    return false;
  } else if( primary2 === 'white') {
    return false;
  }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
