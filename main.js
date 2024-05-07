var primeslist = [2];
var evenslist = [];
var distributionlist = [];
var currentnumber = 3;
var primeslength = 0;

while (primeslength < 10000) { 
  var isPrime = true;
  for (var i = 2; i < Math.sqrt(currentnumber); i++) {
    if (currentnumber % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeslist.push(currentnumber);
    if (primeslist.length > 1) {
      distributionlist.push(currentnumber - primeslist[primeslist.length - 2]);
    }
    primeslength++;
  } else {
    evenslist.push(currentnumber);
  }
  currentnumber++;
}

console.log(distributionlist);
console.log(currentnumber);
console.log(primeslength);



