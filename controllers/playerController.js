const Player = require('../models/Player');

module.exports = {
  	index: function(req, res) {
        var query;
        if (req.query) {
            query = req.query;
        }
        else {
            query = req.params.id ? { _id: req.params.id } : {};
        }
        Player.find(query)
            .then(function(doc) {
                res.json(doc);
            }).catch(function(err) {
                res.json(err);
            });
    },
  	// This method handles creating new Players
    create: function(req, res) {
      	const savedPlayer 	= {};
      	savedPlayer.playerName 	= req.body.Player.playerName;
    	  savedPlayer.role	= req.body.Player.role;
        Player.create(savedPlayer).then(function(doc) {
          	res.json(doc);
        }).catch(function(err) {
          	res.json(err);
        });
    },
      // This method handles deleting Players
    destroy: function(req, res) {
        Player.remove({
          _id: req.params.id
        }).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
    }
};