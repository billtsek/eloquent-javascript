for (let i=1; i<=100; i++){
    let msg = ""
    if (i%3==0){
        msg += "Fizz"
    }
    if (i%5==0){
        msg += "Buzz"
    }
    console.log(i + " " + msg)
}

// book solution
//  same with mine
//  line 19 is elegant
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }