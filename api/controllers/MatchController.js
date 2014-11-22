/**
 * MatchController
 *
 * @description :: Server-side logic for managing matches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 * USAGE: http://localhost:1337/match/quicksave?p1=1&p2=2&p1score=3&p2score=6&p1team=yellow&p2team=black
 */

module.exports = {
	quicksave: function(req, res) {
        var p1Id = req.param('p1');
        var p2Id = req.param('p2');

        var p1Score = req.param('p1score');
        var p2Score = req.param('p2score');

        var p1Team = req.param('p1team');
        var p2Team = req.param('p2team');

    }
};

