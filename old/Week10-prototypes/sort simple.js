people=[
    {name:"joe", age:21},
    {name:"Mary", age:18},
    {name:"Frank", age:49},
    {name:"Cliara", age:1},
];

console.log("unsorted"+JSON.stringify(people));

/*
* the function inside sort is a compare function
* it takes two parameters that are to be compared (a,b) and
* returns -1 if a is before b
* returns 0 if they are the dame
* and
* returns 1 if a is after b
* this is used my the sort function to order the array
* */

people.sort(function(a,b){
    if (a.age<b.age)
        return -1;
    if (a.age>b.age)
        return 1;
    return 0
})

console.log("sorted"+JSON.stringify(people));
