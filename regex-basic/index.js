console.clear();

/abc/.test("abcde"); // true
/abc/.test("abxde"); // false

/[0123456789]/.test("in 1992"); // true
/[0-9]/.test("in 1992"); // true

/'\d+'/.test("'123'"); // true
/'\d+'/.test("'123ABC'"); // false
/'\d+'/.test("''"); // false

/sayHe?llo/.test("sayHello"); // true
/sayHe?llo/.test("sayHllo"); // true

console.log(/\d{1,2}-\d{1,2}-\d{4}/);

/*







































*/
// https://eloquentjavascript.net/09_regexp.html#p_0mNIcPpslS
