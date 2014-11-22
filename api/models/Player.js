/**
* Player.js
*
* @description :: mawfuckers be shootin shots
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
      teams: {
          collection: 'matchTeam',
          via: 'players'
      }
  }
};

