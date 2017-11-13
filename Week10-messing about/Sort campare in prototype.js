Person = function(name, age){
    this.name = name;
    this.age = age;

    compareAge = function(a,b){
        if (a.age<b.age)
            return -1;
        if (a.age>b.age)
            return 1;
        return 0
    };
}

people = [];

people[0] = new Person("Joe", 18);
people[1] = new Person("Frank", 21);
people[2] = new Person("Mary", 1);
people[3] = new Person("Harry", 4);
people[6] = new Person("Harry", 4); // whoops I have missed out 4 and 5 they will be null
people.push (new Person("end one", 6)); // push will add to the end of the array

console.log("unsorted"+JSON.stringify(people));

people.sort(Person.compareAge)  // use the the function in the prototype

console.log("sorted"+JSON.stringify(people));