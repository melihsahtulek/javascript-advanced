console.clear();

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

wait(2000)
  .then(() => {
    console.log("hi!");
    return wait(3000);
  })
  .then(() => {
    console.log("finish");
  });
