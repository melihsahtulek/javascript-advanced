console.clear();

let users = new Set();

users.add("user 1");
users.add("user 2");

console.log(users);
console.log(users.delete("user 2"));
users.add("user 3");
console.log(users.has("user 1"));
console.log(users.values());
console.log(users.size);

for (const user of users) {
  console.log(user);
}
