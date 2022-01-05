N = 13;
function oddeven() {
  if (N % 2 == 0)
    if (N > 0) {
      console.log("Its even and Positive");
    } else {
      console.log("Its Even and Negative");
    }
  else {
    if (N > 0) {
      console.log("Its Odd and Positive");
    } else {
      console.log("Its Odd and Negative");
    }
  }
}
oddeven();
