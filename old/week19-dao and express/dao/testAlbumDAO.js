var albumDAO = require('./albumDAO');


albumDAO.insert({id:33, artist:'joe',title:"blah"},function(result){
    albumDAO.getAll(function(result){
        console.log(JSON.stringify(result));
    })
})