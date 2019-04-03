var userDAO = require('../UserDAO');
var User = require ('../../model/User.js')

console.log("Kiwi");

userDAO.create(new User("mary","123"),
    function(){
        console.log("apples");
        userDAO.getAll(function(result){
            console.log(JSON.stringify(result));
            userDAO.update(new User("mary","234"),
                function(){
                    console.log("oranges");

                    userDAO.delete("mary");

                });
            console.log("pears");

        })
    });
console.log("bananas");


