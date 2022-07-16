console.clear();

function User(name, email, age) {
  this.getID = function () {
    return parseInt(Math.random() * 1000);
  };
  this.name = name;
  this.email = email;
  this.age = age;
  this.info = function () {
    return `ID...: ${this.getID()} \nname...: ${this.name} \nemail...: ${this.email} \nage...: ${this.age}`;
  };
}

User.prototype.isActive = false;

let user_1 = new User("Melihşah", "test@gmail.com", 23);
user_1.isActive = true;

console.log(user_1.isActive ? "active" : "passive");
