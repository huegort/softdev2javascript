var userDAO = require('../UserDAO');
var User = require ('../../model/User.js')

userDAO.create(new User("mary","123"),
    function(){
        userDAO.getAll(function(result){
            console.log(JSON.stringify(result));
            userDAO.update(new User("mary","234"),
                function(){
                         userDAO.delete("mary");

                });
        })
    });

