var express = require('express');
var router = express.Router();
var albumDAO = require('../dao/albumDAO');

/* only used now for third party API
router.get("/getAll", function(req,res){
    albumDAO.getAll(function(result){
        res.send(result);
    });
});
*/
router.post("/create", function(req,res){
    var album = req.body;
    albumDAO.insert(album, function(result){
        res.redirect("/album/albums");
    })
})
router.post("/update", function(req,res){
    var album = req.body;
    albumDAO.update(album, function(result){
        res.redirect("/album/albums");
    })
})
router.post("/delete/:id", function(req,res){
    var id = req.param("id");
    albumDAO.delete(id, function(result){
        res.redirect("/album/albums");
    })
});
router.get("/editform/:id", function(req,res){
    var id = req.param("id");
    albumDAO.findById(id, function(result){
        console.log(result[0]);
        var album = result[0];
        res.render("page/editform",
            {album: album})
    })

});
router.get("/albums", function(req,res){
    albumDAO.getAll( function(result){
        var albums = result;
        res.render("page/albums",
            {albums: albums})
    })

})




module.exports = router;