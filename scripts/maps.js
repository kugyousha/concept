//maps

var maps = {
    levels: [],
    objects: []
};

var map =
    [
        [3,3,3,3,3,3,3,3,3,3,3],
        [3,1,1,1,1,1,1,1,1,1,3],
        [3,1,2,2,2,1,2,1,2,1,3],
        [3,1,1,2,1,1,1,1,1,1,3],
        [3,1,1,1,1,2,1,1,2,1,3],
        [3,1,2,1,2,2,1,2,2,1,3],
        [3,1,1,1,1,1,2,1,1,1,3],
        [3,3,3,3,3,3,3,3,3,3,3]
    ];
maps.levels.push(map);
var gameObjects =
    [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,5,0],
        [0,0,0,0,0,4,0,0,0,0,0],
        [0,0,5,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,5,0,0,0,0],
        [0,0,0,0,5,0,0,5,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0]
    ];
maps.objects.push(gameObjects);