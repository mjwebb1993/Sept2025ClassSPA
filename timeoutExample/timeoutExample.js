function randomFinish(label) {
  const randomTime = Math.random() * 1000;

  setTimeout(() => console.log(label + "is done!"), randomTime);
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");

// Scenario 1
// strings always print in order, functions wait for previous function to finish running before starting

// Scenario 2
// strings print in any order, order is determined on whichever had shortest timeout time
