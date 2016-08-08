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

export function distance(coord1, coord2) {
    return 0;
}
