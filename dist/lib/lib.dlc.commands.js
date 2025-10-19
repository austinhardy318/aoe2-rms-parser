"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definitions = void 0;
exports.definitions = {
    'PLAYER_SETUP': {
        commands: {
            'grouped_by_team': {
                docs: 'Place team members close to each other on the map. `base_size` attribute of `create_player_lands` command determines the distance between players in a team.',
                conflictsWith: 'random_placement'
            },
            'nomad_resources': {
                docs: 'Adds the cost of a Town Center (275 wood, 100 stone) to starting resources as on nomad maps. Can be used even if your map is not a nomad map.'
            }
        }
    },
    'LAND_GENERATION': {
        commands: {
            'create_player_lands': {
                attributes: {
                    'base_elevation': {
                        docs: 'Modify the base elevation for player and standard lands. `<ELEVATION_GENERATION>` section must exist if this attribute is used.',
                        arguments: [
                            { name: 'N', type: 'elevation', default: 1 }
                        ]
                    }
                }
            }
        }
    },
    'ELEVATION_GENERATION': {},
    'CLIFF_GENERATION': {},
    'TERRAIN_GENERATION': {},
    'CONNECTION_GENERATION': {},
    'OBJECTS_GENERATION': {}
};
//# sourceMappingURL=lib.dlc.commands.js.map