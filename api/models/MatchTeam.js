/**
 * MatchTeam.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        color: {
            type: 'string',
            required: true,
            enum: ['yellow', 'black']
        },
        players: {
            collection: 'player',
            via: 'teams'

        },
        score: {
            type: 'integer',
            required: true
        },
        match: {
            owner: 'match'
        }
    }
};

