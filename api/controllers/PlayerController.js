/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    vs: function (req, res) {

        return res.json({
            player1: req.param('p1'),
            player2: req.param('p2'),
            winner: 'your mama'
        });
    }
};

