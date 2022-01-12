console.clear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = `${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;

const load = () => {
  console.log("Getting user profile...");
  get(close);
};

const get = (callback) => {
  setTimeout(() => {
    console.log(`Welcome Melihşah, today... ${date}`);
    callback();
  }, 2000);
};

const close = () => {
  console.log("-----------------------------------");
  console.log("if you want sign out, click it");
};

load();
