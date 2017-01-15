function coordinate(lat, long) {
    let _lat = lat;
    let _long = long;
    return {
        latitude: function () {
            return _lat;
        },
        longitude: function () {
            return _long;
        },
        //Returns a new copy with the translated coordinates
        translate: function (dx, dy) {
            return coordinate(_lat + dx, _long + dy);
        },
        toString: function () {
            return '(' + _lat + ',' + _long + ')';
        }
    };
}
const greenwich = coordinate(51.4778, 0.0015);
greenwich.toString(); //-> '(51.4778, 0.0015)'