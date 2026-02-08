function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.ageAfter = function ageAfter(a) {
        return this.age + a;
    }
}

const user = new User("helal", 27, "m");
console.log(user);

