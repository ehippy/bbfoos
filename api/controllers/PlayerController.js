/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    vs: function (req, res) {

        return res.json({
            player1:
        });
        return res.send("Hi there, " + req.param('p1'));
    }
};

