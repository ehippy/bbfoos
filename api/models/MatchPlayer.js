/**
* MatchPlayer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    match: {
        model: 'match',
        required: true
    },
      player: {
          model: 'player',
          required: true
      },
      score: {
          type: 'integer',
          required: true
      },
      team: {
          type: 'string',
          required: true,
          enum: ['yellow', 'black']
      }
  }
};

