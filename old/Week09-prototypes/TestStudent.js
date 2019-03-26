Student = function(firstName){
    this.grade="F";
    this.firstName = firstName;
};


Student.prototype={
    college: "NUIG",
    age:21
};
Student.prototype.college="GMIT";
Student.prototype.course="ITS";

aStudent = new Student("joe");
bStudent = new Student("Barney");


console.log(JSON.stringify(aStudent.college));
console.log(JSON.stringify(aStudent.course));
console.log(JSON.stringify(aStudent.age));
console.log(JSON.stringify(aStudent.grade));
console.log(JSON.stringify(aStudent));
console.log(JSON.stringify(bStudent));