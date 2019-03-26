Student = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
Student.prototype = {
    canServe: function(){
        if (this.age >=18){
            return true;

        }else {
            return false;
        }
    },
    getFullName: function(){
        return this.firstName +" "+this.lastName;
    },
    noReturn: function(){
        console.log("calling no return function");
    }
};


var student1 = new Student("joe", "wheeler",17);
student1.course = "ITS";
student1.canServe = function(){
    return true;
};
var student2 = new Student("barney", "Smith",21);

console.log(student1.canServe());
console.log(student1.getFullName());
console.log(student1.noReturn());
console.log(JSON.stringify(student2));
