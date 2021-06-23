

// With the while loop we can create the famous 99 bottles of beer on the wall song. This is a good example of using the while loop to print out the lyrics from 99 - 0.


var word = "bottles";
var count = 99
while (count > 0) {
  if (count === 1) {
    var word = "bottle";
  } 
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
    count--;
  if (count > 0) {
  if (count == 1) {
    var word = "bottle"
  }
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    if (count < 1) {
      var word = "bottles"
    }
    console.log("No more " + word + " of beer on the wall.")
    console.log("No more " + word + " of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
}

