import _ from "lodash";

export function splitOnLatLon(coord) {
    return _.chain(coord)
        .split(",")
        .map(_.trim)
        .value();
}

export function toDecimal(dms) {
    let regex = /(\d+)° (\d+)′ (\d+)″ ((N)|(S)|(E)|(W))/;
    let [_, degrees, minutes, seconds, __, N, S, E, W] = regex.exec(dms);
    let decimal = parseInt(degrees) +
                 (parseInt(minutes) / 60) +
                 (parseInt(seconds) / (60 * 60));
    return decimal * (N || E ? 1 : -1);
}

export function haversine(lat1, lon1, lat2, lon2, R) {
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat/2), 2) +
            Math.cos(lat1) *
            Math.cos(lat2) *
            Math.pow(Math.sin(dlon/2), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export function distance(coord1, coord2) {
    return 0;
}
